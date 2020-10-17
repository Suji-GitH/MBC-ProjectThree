const express = require("express");
const router = express.Router();
const customersController = require("../controller/customersController");

// Matches with "/api/customerForm/:id"
router
  .route("/:id")
  .get(customersController.findAllCustomer)
  .post(customersController.create)
  .delete(customersController.remove);

module.exports = router;