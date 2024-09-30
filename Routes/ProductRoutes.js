const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");
router.post("/", ProductController.createProducts);
router.get("/", ProductController.getallproduct);
router.get("/:id", ProductController.getproductsingleid);
router.put("/:id", ProductController.updateproduct);
module.exports = router;
