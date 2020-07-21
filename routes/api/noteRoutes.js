const express = require("express");
const db = require("../../models");

const router = express.Router();

//Get Note (/api/note/:id)
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
      console.log("GET NOTE ERROR: ", err);
  });
});

//Update Note (/api/note/:id)
router.put("/:_id", (req, res) => {
  // console.log(req.body)
  let noteId = req.params;
  // console.log(noteId)
  db.Note
    .findOneAndUpdate(noteId, req.body, {new: true})
    .then(note => {
      console.log(note);
      res.json(note);
    })
    .catch(err => {
      console.log("UPDATE NOTE ERROR: ", err);
  });
});

//Delete Note (/api/note/delete/:folder_id/:user_id)
router.delete("/delete/:folder_id/:note_id", (req, res) => {
  // console.log(req.params)
  let folderId = req.params.folder_id;
  let noteId = req.params.note_id;
  db.Folder
    .findOneAndUpdate({_id: folderId}, {$pull: {notesList: noteId}}, {safe: true, upsert: true, new: true})
    .then(folder => {
      console.log(folder)
    })
    .then(() => {
      db.Note
        .findById(noteId)
        .then(note => {
          note.remove();
          console.log("NOTE DELETED!");
          res.json(note);
        })
        .catch(err => {
          console.log("DELETE NOTE OBJECT ERROR: ", err);
      });
    })
    .catch(err => {
      console.log("DELETE NOTE ERROR: ", err);
    });
});

module.exports = router;