const express = require("express");
const db = require("../../models");

const router = express.Router();

//Get Folder (/api/folder/:_id)
router.get("/:_id", (req, res) => {
  let folderId = req.params;
  // console.log(folderId)
  db.Folder
    .findById(folderId)
    .populate("notesList")
    .populate("tasksList")
    .populate("imagesList")
    .populate("linksList")
    .then(folder => {
      // console.log(folder)
      res.json(folder);
    })
    .catch(err => {
      console.log("GET FOLDER ERROR: ", err);
  });
});

//Update Folder (/api/folder/:_id)
router.put("/:_id", (req, res) => {
  // console.log(req.body)
  let folderId = req.params;
  // console.log(folderId)
  db.Folder
    .findOneAndUpdate(folderId, req.body, {new: true})
    .then(folder => {
      // console.log(folder)
      res.json(folder)
    })
    .catch(err => {
      console.log("UPDATE FOLDER ERROR: ", err);
  });
});

//Delete Folder (/api/folder/:_id)
router.delete("/:_id", (req, res) => {
  let folderId = req.params;
  // console.log(folderId)
  db.Folder
    .findById(folderId)
    .then(folder => {
      folder.remove()
    })
    .then(folder => {
      console.log("FOLDER DELETED!");
      res.json(folder);
    })
    .catch(err => {
      console.log("GET FOLDER ERROR: ", err);
  });
});

//Create Note (/api/folder/:_id/new_note)
router.post("/:_id/new_note", (req, res) => {
  // console.log(req.body)
  let folderId = req.params;
  // console.log(folderId)
  db.Note
    .create(req.body)
    .then(({_id}) => {
      // console.log({_id})
      db.Folder
        .findOneAndUpdate(folderId, {$push: {notesList: _id}}, {new: true})
        .then(note => {
          // console.log(folder)
          res.json(note);
        })
        .catch(err => {
          console.log(err);
          // res.status(401).json(err);
      });
    })
    .catch(err =>
      console.log("CREATE NOTE ERROR:", err))
});

module.exports = router;