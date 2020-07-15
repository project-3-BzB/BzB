const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const folderSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      minlenght: 1,
      required: [true, "Folder name is required."],
      default: "My Folder"
    },
    createdAt: {
      type: Date,
      required: true,
      default: new Date()
    },
    updatedAt: {
      type: Date,
      required: true,
      default: null
    },
    notesList: [],
    tasksList: [],
    imagesList: [],
    linksList: []
  }
);

const folderModel = mongoose.model("folderModel", folderSchema);

module.exports = folderModel;