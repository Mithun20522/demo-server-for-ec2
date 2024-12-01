import express, { json } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(json());
app.use(cookieParser());

app.get("/user", (req, res) => {
  return res.send({ status: true, message: "I am working bro, don't worry" });
});

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
