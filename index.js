const express = require("express");
const mongoose = require("mongoose");
let Product = require("./Modules/product");
const app = express();
app.listen(3000, (req, res) => {
  console.log("Connected to API");
});
mongoose
  .connect("mongodb://localhost/mongo_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to database"))
  .catch((err) => console.log("Not connected to database" + err));

//CRUD Operations
//read
app.get("/mongo_db/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (err) {
    console.log("Cannot get data\n" + err);
  }
});
//write
app.post("/mongo_db/products/:name/:price/:profit/:qty", async (req, res) => {
  const product = new Product(req.params);
  try {
    await product.save();
    res.send(req.params);
  } catch (err) {
    console.log("Not POSTED\n" + err);
  }
});
//update
app.put("", (req, res) => {});
//delete
app.delete("", (req, res) => {
  res.send("DELETE request to the homepage");
});
