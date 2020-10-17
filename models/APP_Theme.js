const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appThemeSchema = new Schema({
  t_logo: {
    data: Buffer,
    contentType: String
  },
  t_style: {
    type: String,
    required: true,
  }
});

const appTheme = mongoose.model("app_theme", appThemeSchema);

module.exports = appTheme;
