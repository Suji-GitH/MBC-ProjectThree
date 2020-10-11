const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema for Business Owner
const BusinessOwnerSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  business_vendor: {
    type: String
  },
  ABN_number: {
    type: Number,
    max: 11
  },
  date: {
    type: Date,
    default: Date.now
  },
  QR_link: {
    type: String
  },
  app_theme: {
    type: Schema.Types.ObjectId,
    ref: "app_theme"
  },
  customer_details: {
    type: Schema.Types.ObjectId,
    ref: "customer_details"
  }
});

const BusinessOwner = mongoose.model("BusinessOwner", BusinessOwnerSchema);

module.exports = BusinessOwner;
