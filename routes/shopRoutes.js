const express = require("express");
const router = express.Router();
const shopController = require("../controller/shopController");

router.get("/shop", shopController.getShopPage);

module.exports = router;
