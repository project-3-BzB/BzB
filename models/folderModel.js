const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const folderSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: false,
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
      required: false,
      default: null
    },
    notesList: [
      {
        type: Schema.Types.ObjectId,
        ref: "noteModel"
      }
    ],
    tasksList: [
      {
        type: Schema.Types.ObjectId,
        ref: "taskModel"
      }
    ],
    imagesList: [
      {
        type: Schema.Types.ObjectId,
        ref: "imageModel"
      }
    ],
    linksList: [
      {
        type: Schema.Types.ObjectId,
        ref: "linkModel"
      }
    ]
  }
);

const folderModel = mongoose.model("folderModel", folderSchema);

module.exports = folderModel;