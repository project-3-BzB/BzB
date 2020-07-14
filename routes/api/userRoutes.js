const router = require("express").Router();
const booksController = require("../../controllers/userController");

// "/api/user/signup"
router
  .route("/signup")
  .post(booksController.createUser);

// "/api/user/login"
router
  .route("/login")
  .get(booksController.loginUser);

// "api/user/data"
router
  .route("/data")
  .get(booksController.getUser);
module.exports = router;