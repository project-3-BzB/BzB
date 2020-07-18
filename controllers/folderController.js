const db = require("../models");

module.exports = {
  createFolder: function({body}, res) {
  db.Folder
      .create(body)
      .then(({_id}) => 
       db.User
         .findOneAndUpdate({}, {$push: {foldersList: _id}}, {new: true}))
      .then(user => {
        res.json(user)
      })
      .catch(err => {
        res.status(401).json(err);
      });
  },
  getFolderById: function(req, res) {
    db.Folder
      .findById(req.params.id)
      .then(folder => res.json(folder))
      .catch(err => res.status(401).json(err));
  },
  updateFolderById: function(req, res) {
    db.Folder
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(folder => res.json(folder))
      .catch(err => res.status(401).json(err));
  },
  removeFolderById: function(req, res) {
    db.Folder
      .findById({ _id: req.params.id })
      .then(folder => folder.remove())
      .then(folder => res.json(folder))
      .catch(err => res.status(401).json(err));
  }
  //https://stackoverflow.com/questions/15691224/mongoose-update-values-in-array-of-objects
  //https://tech-blog.maddyzone.com/node.js/add-update-delete-object-array-schema-mongoosemongodb
};