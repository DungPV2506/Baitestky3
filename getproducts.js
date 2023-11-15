import { query } from "express";
import Inventories from "./dbs/models/inventories.model.js";

export async function getAllProducts(req, res) {
  try {
    const products = await Inventories.find();
    console.log(products);

    if (!products) {
      throw new Error("Product not found");
    }
    return res.status(200).send({
      message: "Find product successfully",
      data: products,
    });
  } catch (error) {
    res.status(401).send({
      message: error.message,
    });
  }
}

// export async function getProductByQuantity(req, res) {
//   try {
//     const instock = query.prams;
//     const products = await Inventories.find({ instock: { $lte: 100 }  });
//     if (!products) {
//       throw new Error("Product not found");
//     }
//     return res.status(200).send({
//       message: "Find product successfully",
//       data: products,
//     });
//   } catch (error) {
//     res.status(401).send({
//       message: error.message,
//     });
//   }
// }



export async function getProductByQuantity(req, res) {
  try {
    const { param } = req.query;

    let products;
    if (param && param === 'preset') {
      products = await Inventories.find({ instock: { $lte: 100 } });
    } else {
      products = await Inventories.find();
    }

    if (!products) {
      throw new Error("Product not found");
    }

    return res.status(200).send({
      message: "Find product successfully",
      data: products,
    });
  } catch (error) {
    res.status(401).send({
      message: error.message,
    });
  }
}






