const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const BusinessOwner = mongoose.model("BusinessOwner");
const keys = require("../passport/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      BusinessOwner.findById(jwt_payload.id)
        .then(businessOwner => {
          if (businessOwner) {
            return done(null, businessOwner);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};