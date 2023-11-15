import jwt from "jsonwebtoken";

const createToken = async (payload, secretKey) => {
  try {
    const accessToken = await jwt.sign(payload, secretKey, {
      expiresIn: "1h",
    });
    jwt.verify(accessToken, secretKey, (err, decode) => {
      if (err) {
        console.error("error verify::", err);
      } else {
        console.log("jwt.verify ~ decode:", decode);
      }
    });

    return { accessToken };
  } catch (error) {
    return error;
  }
};

export default createToken;
