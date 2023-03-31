const express = require("express");
const PORT = 3000;
const app = express();

app.set("jsx", "view_engine");
app.get("/", (req, res) => {
  res.render("<h1>This is Running</h1>");
});

app.listen(PORT, () => {
  console.log("Currently Running APP on Port 3000");
});
