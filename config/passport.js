const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

// const validPassword = db.User.schema.methods.validPassword;

const local = new LocalStrategy((username, password, done) => {
  db.User.findOne({ username })
    .then(user => {
      if (!user || !user.validPassword(password)) {
        console.log("Authentication failure!")
        done(null, false);
      } else {
        console.log("Authentication success!")
        done(null, user);
      }
    })
    .catch(e => done(e));
});

passport.use("local", local);

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(userId, done) {
  db.User.findById(userId, (err, user) => done(err, user));
});

module.exports = passport;