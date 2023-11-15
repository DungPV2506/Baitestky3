import mongoose from "mongoose";

const connectToDb = () => {
  const connectString = "mongodb://127.0.0.1:27017/mindxModule3";
  mongoose
    .connect(connectString)
    .then(() => {
      console.log("connect to database: " + connectString);
    })
    .catch((err) => {
      console.log("Error connecting to database: " + err);
    });
};

export { connectToDb };
