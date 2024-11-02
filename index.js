import express, { json } from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());

app.get("/user", (req, res) => {
  return res.send({ status: true, message: "I am working bro, don't worry" });
});

app.listen(8080, () => {
  console.log("server running on port: 8080");
});
