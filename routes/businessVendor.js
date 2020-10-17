const express = require("express");
const router = express.Router();
const businessController = require("../controller/businessController");

// Matches with "/api/books"
router.route("/")
  .get(businessController.findAllVendor);

// Matches with "/api/customerForm/:id"
router
  .route("/:id")
  .get(businessController.findVendorDetails);

module.exports = router;