const express = require("express");
const session = require("express-session");
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const adminUsers = require("./routes/admin_Users.js");
const customerForm = require("./routes/customerForm");
const businessVendor = require("./routes/businessVendor");

const MongoStore = require("connect-mongo")(session);

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));
app.use(express.static("public"));

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trace", 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
)
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./passport/setup.js")(passport);

// Routes
app.use("/api/adminUsers", adminUsers);
app.use("/api/customerForm", customerForm);
app.use("/api/businessVendor", businessVendor);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});