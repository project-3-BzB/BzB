// Authentication Middleware
module.exports = {
  loggedInOnly: (req, res, next) => {
    // console.log(req.isAuthenticated())
    // if (req.isAuthenticated()) next();
    // else console.log("You are not logged in!")
    // else res.redirect("/login");
  },
  loggedOutOnly: (req, res, next) => {
    if (req.isUnauthenticated()) next();
    else console.log("Nope")
    // else res.redirect("/");
  }
};