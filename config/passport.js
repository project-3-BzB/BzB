const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");
const validatePassword = db.User.schema.statics.validatePassword;

//https://mherman.org/blog/local-authentication-with-passport-and-express-4/
passport.use(new LocalStrategy(
  //users sign in with username
  {
    usernameField: "username",
    passwordField: "password"
  },
  function(username, password, done) {
    // console.log(username, password, done)
    //finds user through their username in database
    db.User.findOne({username: username})
      .then(function(user) {
      //username validation
      if (!user) {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      // console.log(password, user.password)
      validatePassword(password, user.password, (err, isValid) => {
        if (!isValid) {
          console.log(err)
        };
        return user
      });
      return done(null, user.password);
    });
  }
));

//from boilerplate code
passport.serializeUser(function(user, cb) {
  cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

//exporting our configured passport
module.exports = passport;