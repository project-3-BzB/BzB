const router = require("express").Router();
const userRoutes = require("./userRoutes");
const folderRoutes = require("./folderRoutes");

router.use("/user", userRoutes);
router.use("/folder", folderRoutes);

module.exports = router;