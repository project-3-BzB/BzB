const router = require("express").Router();
const userRoutes = require("./userRoutes");
const folderRoutes = require("./folderRoutes");
const noteRoutes= require("./noteRoutes");
// const taskRoutes= require("./taskRoutes");
// const imageRoutes= require("./imageRoutes");
// const linkRoutes= require("./linkRoutes");

router.use("/user", userRoutes);
router.use("/folder", folderRoutes);
router.use("/note", noteRoutes);
// router.use("/task", taskRoutes);
// router.use("/image", imageRoutes);
// router.use("/link", linkRoutes);

module.exports = router;