const express = require("express");
const passport = require("../../config/passport");
const db = require("../../models");

const router = express.Router();

// Route Handlers
// function authenticate(passport) {
  // Main Page
  // router.get("/", loggedInOnly, (req, res) => {
  //   res.render("index", { username: req.user.username });
  // });

  // Login View
  // router.get("/login", loggedOutOnly, (req, res) => {
  //   res.render("login");
  // });

  // Login Handler
  router.post("/login", passport.authenticate("local"), (req, res) => {
    console.log(res.req.user);
    // res.json(res.req.user)
    // req.login(res.req.user, function(err) {
    //   if (err) next(err);
    //   return res.redirect("/" + req.user._id + "/folder");
    // });
  });

  // Register View
  // router.get("/register", loggedOutOnly, (req, res) => {
  //   res.render("register");
  // });

  // Signup Handler
  router.post("/signup", (req, res, next) => {
    // console.log(req.body)
    db.User.create(req.body)
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
          console.log("Sorry, that username is already taken.");
          // res.redirect("/register");
        } else next(err);
      });
  });

  // // Logout Handler
  // router.all("/logout", function(req, res) {
  //   req.logout();
  //   res.redirect("/login");
  // });

  // Error Handler
//   router.use((err, req, res) => {
//     console.error(err.stack);
//     res.status(500).end(err.stack);
//   });

//   return router;
// }

module.exports = router;