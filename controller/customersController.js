const db = require("../models");

// Defining methods for the customer Controller
module.exports = {
  findVendorDetails: function(req, res) {
    db.Business_Owner
      .findById({ _id : req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      });
  },
  findAllCustomer: function(req, res) {
    db.Business_Owner
      .findById({ _id : req.params.id})
      .populate('customer_details')
      .select('customer_details -_id')
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      });
  },
  create: function(req, res) {
    const businessId = req.params.id;
    db.Customer_Details
      .create(req.body)
      .then(({ _id }) => db.Business_Owner.findByIdAndUpdate(businessId, { $push: { customer_details: _id } }, { new: true }))
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      });
  },
  remove: function(req, res) {
    db.Customer_Details
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      });
  }
};