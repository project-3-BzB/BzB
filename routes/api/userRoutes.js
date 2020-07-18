const router = require("express").Router();
const passport = require("../../config/passport");
const userController = require("../../controllers/userController");
const authenticateUser = require("../../config/middleware/authenticateLogin");

// "/api/user/signup"
router
  .route("/signup")
  .post(userController.createUser);

// "/api/user/login"
router
  .route("/login")
  .post(passport.authenticate("local"), userController.loginUser)
  .get(userController.populateFolders);

// "api/user/data"
router
  .route("/data")
  .get(authenticateUser, userController.getUser);

module.exports = router;