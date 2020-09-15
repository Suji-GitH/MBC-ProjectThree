const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerDetailsSchema = new Schema({
  c_name: {
    type: String,
    required: true,
  },
  c_email: {
    type: String,
    required: true,
  },
  mobile_number: {
    type: String,
    required: true,
  }
});

const customerDetails = mongoose.model("customer_details", customerDetailsSchema);

module.exports = customerDetails;
