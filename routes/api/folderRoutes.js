const router = require("express").Router();
const folderController = require("../../controllers/folderController");

// "/api/folder/create"
router
  .route("/create")
  .post(folderController.createFolder)

// "/api/folder/:id"
router
  .route("/:id")
  .get(folderController.getFolderById)
  .put(folderController.updateFolderById)
  .delete(folderController.removeFolderById);
  
module.exports = router;