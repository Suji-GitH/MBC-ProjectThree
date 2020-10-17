const db = require("../models");

// Defining methods for the Vendor Details
module.exports = {
  findAllVendor: function(req, res) {
    db.Business_Owner
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      });
  },
  findVendorDetails: function(req, res) {
    db.Business_Owner
      .findById({ _id : req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      });
  }
};