const express = require("express");
const db = require("../../models");

const router = express.Router();

//Get Note
router.get("/:_id", (req, res) => {
  let noteId = req.params;
  // console.log(noteId)
  db.Note
    .findById(noteId)
    .then(note => {
      // console.log(note)
      res.json(note);
    })
    .catch(err => {
      console.log("GET FOLDER ERROR: ", err);
  });
});

//Update Note
router.put("/:_id", (req, res) => {
  // console.log(req.body)
  let noteId = req.params;
  // console.log(noteId)
  db.Note
    .findOneAndUpdate(noteId, req.body, {new: true})
    .then(note => {
      console.log(note)
      res.json(note)
    })
    .catch(err => {
      console.log("UPDATE FOLDER ERROR: ", err);
  });
});

//Delete Note
router.delete("/:_id", (req, res) => {
  let noteId = req.params;
  // console.log(noteId)
  db.Note
    .findById(noteId)
    .then(note => {
      note.remove()
    })
    .then(note => {
      console.log("NOTE DELETED!")
      res.json(note);
    })
    .catch(err => {
      console.log("GET FOLDER ERROR: ", err);
  });
});

module.exports = router;