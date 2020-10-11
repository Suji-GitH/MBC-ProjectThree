const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerDetailsSchema = new Schema({
  c_firstName: {
    type: String,
    required: true,
  },
  c_lastName: {
    type: String,
    required: true,
  },
  c_email: {
    type: String,
    required: true,
  },
  c_mobileNumber: {
    type: String,
    required: true,
  },
  timestamps: true
});

const customerDetails = mongoose.model("customer_details", customerDetailsSchema);

module.exports = customerDetails;
