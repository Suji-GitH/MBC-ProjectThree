const express = require("express");
const router = express.Router();
const themeController = require("../controller/themeController");

// Matches with "/api/mAppTheme/:id"
router
  .route("/:id")
  .post(themeController.createTheme)
  .get(themeController.findThemeById);


module.exports = router;