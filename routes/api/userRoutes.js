const router = require("express").Router();
let passport = require("../../config/passport");
const booksController = require("../../controllers/userController");

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
  .get(booksController.getUser);
module.exports = router;