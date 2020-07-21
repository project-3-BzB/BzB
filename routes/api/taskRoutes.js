const express = require("express");
const db = require("../../models");

const router = express.Router();

//Get Task (/api/task/:id)
router.get("/:_id", (req, res) => {
  let taskId = req.params;
  // console.log(taskId)
  db.Task
    .findById(taskId)
    .then(task => {
      // console.log(task)
      res.json(task);
    })
    .catch(err => {
      console.log("GET TASK ERROR: ", err);
  });
});

//Update Task (/api/task/:id)
router.put("/:_id", (req, res) => {
  console.log(req.body)
  let taskId = req.params;
  // console.log(taskId)
  let title = req.body.title;
  let content = req.body.content;
  let isComplete = req.body.isComplete;
  let dueDate = formatTime(req.body);
  db.Task
    .findOneAndUpdate(taskId, {title: title, content: content, dueDate: dueDate, isComplete: isComplete}, {new: true})
    .then(task => {
      console.log(task)
      // res.json(task)
    })
    .catch(err => {
      console.log("UPDATE TASK ERROR: ", err);
  });
});

//Delete Task (/api/task/delete/:folder_id/:task_id)
router.delete("/delete/:folder_id/:task_id", (req, res) => {
  // console.log(req.params)
  let folderId = req.params.folder_id;
  let taskId = req.params.task_id;
  db.Folder
    .findOneAndUpdate({_id: folderId}, {$pull: {tasksList: taskId}}, {safe: true, upsert: true, new: true})
    .then(folder => {
      console.log(folder)
    })
    .then(() => {
      db.Task
        .findById(taskId)
        .then(task => {
          task.remove();
          console.log("TASK DELETED!");
          res.json(task);
        })
        .catch(err => {
          console.log("DELETE TASK OBJECT ERROR: ", err);
      });
    })
    .catch(err => {
      console.log("DELETE TASK ERROR: ", err);
    });
});

function formatTime(input) {
  // console.log(input);
  let month = input.month - 1;
  let dueDate = new Date(input.year, month, input.day, input.hour, input.minute);
  // console.log(dueDate)
  return dueDate;
};

module.exports = router;