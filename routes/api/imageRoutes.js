const express = require("express");
const db = require("../../models");

const router = express.Router();

//Get Image (/api/image/:id)
router.get("/:_id", (req, res) => {
  let imageId = req.params;
  // console.log(imageId)
  db.Image
    .findById(imageId)
    .then(image => {
      // console.log(image)
      res.json(image);
    })
    .catch(err => {
      console.log("GET IMAGE ERROR: ", err);
  });
});

//Update Image (/api/image/:id)
router.put("/:_id", (req, res) => {
  // console.log(req.body)
  let imageId = req.params;
  // console.log(imageId)
  db.Image
    .findOneAndUpdate(imageId, req.body, {new: true})
    .then(image => {
      // console.log(image)
      res.json(image)
    })
    .catch(err => {
      console.log("UPDATE IMAGE ERROR: ", err);
  });
});

//Delete Image (/api/image/delete/:folder_id/:image_id)
router.delete("/delete/:folder_id/:image_id", (req, res) => {
  // console.log(req.params)
  let folderId = req.params.folder_id;
  let imageId = req.params.image_id;
  db.Folder
    .findOneAndUpdate({_id: folderId}, {$pull: {imagesList: imageId}}, {safe: true, upsert: true, new: true})
    .then(folder => {
      console.log(folder)
    })
    .then(() => {
      db.Image
        .findById(imageId)
        .then(image => {
          image.remove();
          console.log("IMAGE DELETED!");
          res.json(image);
        })
        .catch(err => {
          console.log("DELETE IMAGE OBJECT ERROR: ", err);
      });
    })
    .catch(err => {
      console.log("DELETE IMAGE ERROR: ", err);
    });
});

module.exports = router;