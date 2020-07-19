const express = require("express");
const db = require("../../models");
const authenticate = require("../../config/authenticate")

const router = express.Router();

router.post("/create", (req, res) => {
  // console.log(req.body)
  db.Folder
    .create(req.body)
    .then(({_id}) => 
    // console.log({_id}))
      db.User
        .findOneAndUpdate({}, {$push: {foldersList: _id}}, {new: true}))
    .then(user => {
      console.log(user)
      // res.json(user)
    })
    .catch(err => {
      console.log(err)
      // res.status(401).json(err);
    });
})

module.exports = router;