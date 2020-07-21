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
      console.log("GET LINK ERROR: ", err);
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
      console.log("UPDATE LINK ERROR: ", err);
  });
});

//Delete Image (/api/image/:id)
router.delete("/:_id", (req, res) => {
  let imageId = req.params;
  // console.log(imageId)
  db.Image
    .findById(imageId)
    .then(image => {
      image.remove()
    })
    .then(image => {
      console.log("LINK DELETED!")
      res.json(image);
    })
    .catch(err => {
      console.log("DELTE LINK ERROR: ", err);
  });
});

module.exports = router;