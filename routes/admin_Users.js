const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../passport/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// Load Business Owner model
const BusinessOwner = require("../models/Business_Owner");

// @route POST /admin_Users/register
// @desc Register Business Owner
// @access Public
router.post("/register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  BusinessOwner.findOne({ email: req.body.email }).then(businessOwner => {
    if (businessOwner) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newBuinessOwner = new BusinessOwner({
        business_vendor: req.body.business_vendor,
        email: req.body.email,
        password: req.body.password
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newBuinessOwner.password, salt, (err, hash) => {
          if (err) throw err;
          newBuinessOwner.password = hash;
          newBuinessOwner
            .save()
            .then(businessOwner => res.json(businessOwner))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/businessOwner/login
// @desc Login businessOwner and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find Business Owner by email
  BusinessOwner.findOne({ email }).then(businessOwner => {
    // Check if business owner exists
    if (!businessOwner) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, businessOwner.password).then(isMatch => {
      if (isMatch) {
        // Business Owner matched
        // Create JWT Payload
        const payload = {
          id: businessOwner.id,
          business_vendor: businessOwner.business_vendor
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

module.exports = router;