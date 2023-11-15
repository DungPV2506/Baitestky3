import { Schema, model } from "mongoose";

const DOCUMENT_KEY_NAME = "Key";
const COLLECTION_KEY_NAME = "Keys";

const keyTokenSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "shop",
      require: true,
    },
    secretKey: {
      type: String,
      require: true,
    },
  },
  { collation: COLLECTION_KEY_NAME, timestamps: true }
);

export default model(DOCUMENT_KEY_NAME, keyTokenSchema);
