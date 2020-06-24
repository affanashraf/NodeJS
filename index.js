const express = require("express");
const mongoose = require("mongoose");

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
app.get("/mongo_db", (req, res) => {
  res.send("GET request to the homepage");
});
app.put("", (req, res) => {
  res.send("PUT request to the homepage");
});
app.delete("", (req, res) => {
  res.send("DELETE request to the homepage");
});
app.post("", (req, res) => {
  res.send("POST request to the homepage");
});
