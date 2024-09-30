const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());
const ProductRoutes = require("./Routes/ProductRoutes");
const CategoryRoutes = require("./Routes/CategoryRoutes");
app.use("/api/Category", CategoryRoutes);
app.use("/api/Products", ProductRoutes);
app.listen(port, () => {
  console.log("http://localhost:8000 running");
});
