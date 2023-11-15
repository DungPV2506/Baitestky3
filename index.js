import express from "express";
<<<<<<< HEAD
import mongoose from 'mongoose';
import warehouseModle from "./warehouse.js";

const app = express();
mongoose.connect('mongodb://localhost:27017/TestMindx');


//2
app.get('/api/getData', async (req, res) => {
    const data = await warehouseModle.find();
    res.send({
        message: 'success full',
        data: data
    })
  });


//3
app.get('/api/getData', async (req, res) => {
    const data = await warehouseModle.find({
        "instock": {
            $gt: {
                $size: "$instock"
            }
        }
    });
    res.send({
        message: 'success full',
        data: data
    })
  });
=======
import { connectToDb } from "./dbs/init.dbs.js";
import { getAllProducts, getProductByQuantity } from "./getproducts.js";
import signUp from "./user.js";


const app = express();
app.use(express.json());

app.get("/getAllProducts", getAllProducts);
app.get("/getProductByQuantity", getProductByQuantity);
app.post("sign", signUp)
>>>>>>> 25bfaf6 (bai test 2)



app.listen(3000, () => {
  console.log("App is running at 3000");
<<<<<<< HEAD
  
=======
  connectToDb();
>>>>>>> 25bfaf6 (bai test 2)
});
