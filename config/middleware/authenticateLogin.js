//only routes user to members page if they login successfully; used in front-end routes
module.exports = function (req, res, next) {
  //for successful login
  if (req.user) {
    return next();
  } else {
  //redirects user to login page
  return res.status(401).send("Login failed!");
  }
};