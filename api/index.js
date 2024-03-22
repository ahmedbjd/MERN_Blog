import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("mongodb connected successfuly");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`server listening on port ${port} ...`);
});
