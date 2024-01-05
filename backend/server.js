// importing express using the ES6 standard
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import products from "./data/products.js";

const app = express();
const port = process.env.PORT || 8000;

// Use cors middleware with options
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>API is running</h1>");
});

app.get("/api/products", (req, res) => {
  res.status(200).json({
    status: "success",
    data: products,
  });
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.status(200).json({
    status: "success",
    data: product,
  });
});

app.listen(port, () => console.log(`server is running on port ${port}`));
