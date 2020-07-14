const db = require("../models");
let passport = require("../config/passport");

module.exports = {
  createUser: function(req, res) {
    db.User
      .create(
        {
          email: req.body.email,
          username: req.body.username,
          password: req.body.password
        }
      )
      .then(function() {
        console.log(req.body)
        res.redirect(307, "/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  },
  loginUser: function(req, res) {
    req.json(req.user);
  },
  getUser: function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        username: req.user.username,
        id: req.user.id
      });
    };
  }
};