let mongoose = require("mongoose");
let productScema = new mongoose.Schema({
  name: String,
  price: Number,
  profit: Number,
  qty: Number,
});

module.exports = mongoose.model("Product", productScema);
