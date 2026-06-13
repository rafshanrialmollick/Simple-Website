const express = require("express");
const contactController = require("../controller/contactController");

const router = express.Router();

router.get("/contact-data", contactController.handleContactData);

module.exports = router;
