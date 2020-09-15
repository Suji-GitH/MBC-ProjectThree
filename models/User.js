const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ThirdPartyProviderSchema = new Schema({
  provider_name: {
      type: String,
      default: null
  },
  provider_id: {
      type: String,
      default: null
  },
  provider_data: {
      type: {},
      default: null
  }
})

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  email_is_verified: {
    type: Boolean,
    default: false
  },
  password: {
    type: String
  },
  customer_details: {
    type: Schema.Types.ObjectId,
    ref: "customer_details"
  },
  //custom function and creates a six-character hash of the email. I.e., a new referral code is created whenever somebody signs up.
  referral_code: {
    type: String,
    default: function() {
        let hash = 0;
        for (let i = 0; i < this.email.length; i++) {
            hash = this.email.charCodeAt(i) + ((hash << 5) - hash);
        }
        let res = (hash & 0x00ffffff).toString(16).toUpperCase();
        return "00000".substring(0, 6 - res.length) + res;
    }
  },
    //Indicates by whom the user was referred by.
    referred_by: {
        type: String,
        default: null
    },
    third_party_auth: [ThirdPartyProviderSchema],
    date: {
        type: Date,
        default: Date.now
    }
},
//object will accept additional not in the schema specified data.
{ strict: false }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
