const express = require("express");
const db = require("../../models");

const router = express.Router();

//Get Link (/api/link/:id)
router.get("/:_id", (req, res) => {
  let linkId = req.params;
  // console.log(linkId)
  db.Link
    .findById(linkId)
    .then(link => {
      // console.log(link)
      res.json(link);
    })
    .catch(err => {
      console.log("GET LINK ERROR: ", err);
  });
});

//Update Link (/api/link/:id)
router.put("/:_id", (req, res) => {
  // console.log(req.body)
  let linkId = req.params;
  // console.log(linkId)
  db.Link
    .findOneAndUpdate(linkId, req.body, {new: true})
    .then(link => {
      // console.log(link)
      res.json(link)
    })
    .catch(err => {
      console.log("UPDATE LINK ERROR: ", err);
  });
});

//Delete Link (/api/link/delete/:folder_id/:link_id)
router.delete("/delete/:folder_id/:link_id", (req, res) => {
  // console.log(req.params)
  let folderId = req.params.folder_id;
  let linkId = req.params.link_id;
  db.Folder
    .findOneAndUpdate({_id: folderId}, {$pull: {linksList: linkId}}, {safe: true, upsert: true, new: true})
    .then(linksList => {
      console.log(linksList)
    })
    .then(() => {
      db.Link
        .findById(linkId)
        .then(link => {
          link.remove();
          console.log("LINK DELETED!");
          res.json(link);
        })
        .catch(err => {
          console.log("DELETE LINK OBJECT ERROR: ", err);
      });
    })
    .catch(err => {
      console.log("DELETE LINK ERROR: ", err);
    });
});

module.exports = router;