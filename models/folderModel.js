const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const folderSchema = new Schema(
  {
    folderName: {
      type: String,
      trim: true,
      unique: true,
      minlenght: 1,
      required: [true, "Folder name is required."]
    },
    folderCreatedAt: {
      type: Date,
      required: true
    },
    folderUpdatedAt: {
      type: Date,
      required: true
    },
    noteList: [],
    taskList: [],
    imageList: [],
    linkList: []
  }
);

const folderModel = mongoose.model("folderModel", folderSchema);

module.exports = folderModel;