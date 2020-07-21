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

//Delete Folder (/api/folder/delete/:user_id/:folder_id)
router.delete("/delete/:user_id/:folder_id", (req, res) => {
  // console.log(req.params)
  let userId = req.params.user_id;
  let folderId = req.params.folder_id;
  db.User
    .findOneAndUpdate({_id: userId}, {$pull: {foldersList: folderId}}, {safe: true, upsert: true, new: true})
    .then(folderList => {
      console.log(folderList)
    })
    .then(() => {
      db.Folder
        .findById(folderId)
        .then(folder => {
          folder.remove();
          console.log("FOLDER DELETED!");
          res.json(folder);
        })
        .catch(err => {
          console.log("DELETE FOLDER OBJECT ERROR: ", err);
      });
    })
    .catch(err => {
      console.log("DELETE FOLDER ERROR: ", err);
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
          // console.log(note)
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

//Create Task (/api/folder/:_id/new_task)
router.post("/:_id/new_task", (req, res) => {
  // console.log(req.body)
  let title = req.body.title;
  let content = req.body.content;
  let isComplete = req.body.isComplete;
  let dueDate = formatTime(req.body);
  let folderId = req.params;
  // console.log(folderId)
  db.Task
    .create({
      title: title,
      content: content,
      dueDate: dueDate,
      isComplete: isComplete
    })
    .then(({_id}) => {
      // console.log({_id})
      db.Folder
        .findOneAndUpdate(folderId, {$push: {tasksList: _id}}, {new: true})
        .then(task => {
          // console.log(task)
          res.json(task);
        })
        .catch(err => {
          console.log(err);
          // res.status(401).json(err);
      });
    })
    .catch(err =>
      console.log("CREATE TASK ERROR:", err))
});

//Create Image (/api/folder/:_id/new_image)
router.post("/:_id/new_image", (req, res) => {
  // console.log(req.body)
  let folderId = req.params;
  // console.log(folderId)
  db.Image
    .create(req.body)
    .then(({_id}) => {
      // console.log({_id})
      db.Folder
        .findOneAndUpdate(folderId, {$push: {imagesList: _id}}, {new: true})
        .then(image => {
          // console.log(image)
          res.json(image);
        })
        .catch(err => {
          console.log(err);
          // res.status(401).json(err);
      });
    })
    .catch(err =>
      console.log("CREATE IMAGE ERROR:", err))
});

//Create Link (/api/folder/:_id/new_link)
router.post("/:_id/new_link", (req, res) => {
  // console.log(req.body)
  let folderId = req.params;
  // console.log(folderId)
  db.Link
    .create(req.body)
    .then(({_id}) => {
      // console.log({_id})
      db.Folder
        .findOneAndUpdate(folderId, {$push: {linksList: _id}}, {new: true})
        .then(link => {
          // console.log(link)
          res.json(link);
        })
        .catch(err => {
          console.log(err);
          // res.status(401).json(err);
      });
    })
    .catch(err =>
      console.log("CREATE LINK ERROR:", err))
});

function formatTime(input) {
  // console.log(input);
  let month = input.month - 1;
  let dueDate = new Date(input.year, month, input.day, input.hour, input.minute);
  // console.log(dueDate)
  return dueDate;
};

module.exports = router;