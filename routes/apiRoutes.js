const app = require("express").Router();
const User = require("../models/User.js");
const Project = require("../models/Project.js");

// Create a new Admin account
app.post("/api/login", (req, res) => {
  console.log("Creating a Admin account")
  User.create({
    First_Name: req.body.First_Name,
    Last_Name: req.body.Last_Name,
    Username: req.body.Username,
    Password: req.body.Password,
    User_status: req.body.User_status,
    Account: req.body.Account
  })
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Create a new Team account
app.post("/api/signUp/:projectId", (req, res) => {
  console.log("Creating a Team member account")
  User.create({
    First_Name: req.body.First_Name,
    Last_Name: req.body.Last_Name,
    Username: req.body.Username,
    Password: req.body.Password,
    User_status: req.body.User_status,
    Account: req.body.Account,
    Projects: req.params.Projects
  })
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Create a new Project + Link 
app.post("/api/addProject/", ({ body }, res) => {
  console.log("Add Project")
  Project.create(body)
  .then(({ _id }) => db.User.findOneAndUpdate({_id}, { $push: { Project: _id } }, { new: true }))
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});





module.exports = app;