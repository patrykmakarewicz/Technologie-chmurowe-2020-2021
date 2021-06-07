const express = require("express");
const router = express.Router();
//const client = require("../../src/server");


const User = require("../../src/models/User.model");

router.post("/register", (req, res) => {  
  User.findOne({ login: req.body.login }).then(user => {
      if (user) {
        return res.status(400).json({ name: "Login already exists" });
      } else {
        const newUser = new User({
          login: req.body.login,
          email: req.body.email,
          password: req.body.password
        });

        newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err))

        //client.set(req.body.login, "0", function(err, res) {
        //  console.log("set: ", res);
        //});
      }
    });
  });


  router.post("/login", (req, res) => {
    const login = req.body.login;
    const password = req.body.password;
    User.findOne({ login }).then(user => {
      if (!user) {
        return res.status(404).json({ loginnotfound: "User not found" });
      }
      if (user.password==password) {
        res.json({
          succes: true
        });
      };
    });
  });


  router.put("/increaseCounter/:id", (req, res) => {


  })
  module.exports = router;