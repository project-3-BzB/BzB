const express = require("express");
const passport = require("../../config/passport");
const db = require("../../models");

const router = express.Router();

// Login User (/api/user/login)
router.post("/login", passport.authenticate("local"), (req, res) => {
  // console.log(res.req.user);
  // res.redirect("/api/user/" + res.req.user._id)
  if(res.req.user) {
    res.json(res.req.user);
  } else {
    console.log("LOGIN ERROR: ", err)
  };
  // req.login(res.req.user, function(err) {
  //   if (err) next(err);
  //   return res.redirect("/" + req.user._id + "/folder");
  // });
});

// Get User (/api/user/:_id)
router.get("/:_id", (req, res) => {
  let userId = req.params;
  // console.log(userId)
  db.User
    .find(userId)
    .populate("foldersList")
    .then(user => {
      // console.log(user)
      res.json(user);
    })
    .catch(err => {
      console.log("POPULATE FOLDERS ERROR: ", err);
  });
});

// Create Folder (/api/user/:_id/new_folder)
router.post("/:_id/new_folder", (req, res) => {
  // console.log(req.body)
  let userId = req.params;
  // console.log(userId)
  db.Folder
    .create(req.body)
    .then(({_id}) => {
      // console.log({_id})
      db.User
        .findOneAndUpdate(userId, {$push: {foldersList: _id}}, {new: true})
        .then(user => {
          // console.log(user)
          res.json(user)
        })
        .catch(err => {
          console.log(err)
          // res.status(401).json(err);
      });
    })
    .catch(err =>
      console.log("CREATE FOLDER ERROR:", err))
});

// Signup User (/api/user/signup)
router.post("/signup", (req, res, next) => {
  // console.log(req.body)
  db.User
    .create(req.body)
    .then(user => {
      // console.log(user)
      res.json(user)
      // req.login(user, err => {
      //   if (err) next(err);
      //   else console.log("New user created!")
      //   // else res.redirect("/");
      // });
    })
    .catch(err => {
      if (err.name === "ValidationError") {
        console.log("SIGN UP ERROR: ", err);
        // res.redirect("/register");
      } else next(err);
    });
});


// Error Handler
// router.use((err, req, res) => {
//   console.error(err.stack);
//   res.status(500).end(err.stack);
// });

module.exports = router;