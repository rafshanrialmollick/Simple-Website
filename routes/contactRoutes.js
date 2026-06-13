const express = require("express");
const contactController = require("../controller/contactController");

const router = express.Router();
router.get("/contact", contactController.getContactPage);
router.post("/contact", contactController.handleContactForm);

module.exports = router;
