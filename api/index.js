import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.Route.js";
import cors from "cors";

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
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`server listening on port ${port} ...`);
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
