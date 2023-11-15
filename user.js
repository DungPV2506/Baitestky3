import { userModel } from "./dbs/models/users.models.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import saveSecretKeyToDb from "./funtion/keyToken.service.js";
import createToken from "./funtion/createToken.js";
const signUp = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userExists = await userModel.findOne({ username });
    console.log("file: user.js:9 ~ signUp ~ userExists:", userExists);
    if (userExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await bcrypt.hash(password, 10);
    console.log("file: user.js:17 ~ signUp ~ passwordHash:", passwordHash);
    const newUser = await userModel.create({
      username,
      password: passwordHash,
    });

    if (newUser) {
      const secretKey = await crypto.randomBytes(64).toString("hex");
      const keyStore = await saveSecretKeyToDb({
        userId: newUser._id,
        secretKey,
      });
      console.log("file: user.js:30 ~ signUp ~ keyStore:", keyStore);
      if (!keyStore) {
        return {
          message: "public key error",
        };
      }

      const tokens = await createToken(
        { userId: newUser._id, username },
        keyStore
      );
      console.log("file: user.js:36 ~ signUp ~ tokens:", tokens);

      return res.status(200).send({
        message: "thanh cong",
        data: newUser,
        tokens,
      });
    }
  } catch (error) {
    return res.status(401).send({
      message: error.message,
    });
  }
};
export default signUp;
