import keyTokenModel from "../dbs/models/keyToken.models.js";

const saveSecretKeyToDb = async ({ userId, secretKey }) => {
  try {
    const tokens = await keyTokenModel.create({
      user: userId,
      secretKey,
    });
    return tokens ? tokens.secretKey : null;
  } catch (error) {
    return error;
  }
};

export default saveSecretKeyToDb;
