const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");
router.put("/", ProductController.createProducts);
router.get("/", ProductController.getallproduct);
router.get("/:id", ProductController.getproductsingleid);
module.exports = router;
