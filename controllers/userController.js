const db = require("../models");
const passport = require("passport");

module.exports = {
  createUser: function(req, res) {
    db.User
      .create(req.body)
      // .then(function() {
      //   res.redirect(307, "/api/user/login");
      // })
      .then(newUser => {
        res.json(newUser)
      })
      .catch(err => {
        res.status(401).json(err);
      });
  },
  loginUser: function(req, res) {
    db.User
      .find({password: req.body.password})
      .then(user => {
        console.log(user)
        res.json(user)
      })
      .catch(err => {
        res.status(401).json(err);
      });
  },
  getUser: function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        username: req.user.username,
        id: req.user._id,
        folders: req.user.foldersList
      });
    };
  },
  populateFolders: function(req, res) {
    db.User
    .find({username: req.body.username})
    .populate("foldersList")
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.json(err);
    });
  }
};