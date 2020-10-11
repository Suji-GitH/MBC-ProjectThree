const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appThemeSchema = new Schema({
  t_logo: {
    type: String,
    required: true,
  },
  t_style: {
    type: String,
    required: true,
  }
});

const appTheme = mongoose.model("app_theme", appThemeSchema);

module.exports = appTheme;
