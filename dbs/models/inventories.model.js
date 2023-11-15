import { Schema, model } from "mongoose";

const DOCUMENT_NAME = "Inventories";
const COLLECTION_NAME = "Inventories";
const productSchema = new Schema(
  {
    sku: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    instock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

export default model(DOCUMENT_NAME, productSchema);
