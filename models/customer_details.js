const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerDetailsSchema = new Schema({
  c_firstName: {
    type: String,
    required: true,
    validate: [({ length }) => length >= 1, "Must be longer than one letter"]
  },
  c_lastName: {
    type: String,
    required: true,
    validate: [({ length }) => length >= 1, "Must be longer than one letter"]
  },
  c_email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  c_mobileNumber: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const customerDetails = mongoose.model("customer_details", customerDetailsSchema);

module.exports = customerDetails;
