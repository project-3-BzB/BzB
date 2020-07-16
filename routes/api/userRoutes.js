const router = require("express").Router();
const passport = require("../../config/passport");
const booksController = require("../../controllers/userController");
const authenticateUser = require("../../config/middleware/authenticateLogin");

// "/api/user/signup"
router
  .route("/signup")
  .post(booksController.createUser);

// "/api/user/login"
router
  .route("/login")
  .post(passport.authenticate("local"), booksController.loginUser);

// "api/user/data"
router
  .route("/data")
  .get(authenticateUser, booksController.getUser);
module.exports = router;