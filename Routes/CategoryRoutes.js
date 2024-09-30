const express = require("express");
const router = express.Router();
const CategorisController = require("../controllers/CategorisController");
router.post("/", CategorisController.CreateCategori);
router.get("/", CategorisController.getallCategori);
module.exports = router;
