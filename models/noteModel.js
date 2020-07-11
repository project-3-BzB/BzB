const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
    noteTitle: {
      type: String,
      trim: true,
      unique: true,
      minlenght: 1,
      required: [true, "A title is required."]
    },
    noteCreatedAt: {
      type: Date,
      required: true,
      // default: new Date()
    },
    noteUpdatedAt: {
      type: Date,
      required: true
    },
    noteContent: {
      type: String,
      trim: true,
      minlenght: 1,
      required: [true, "A note must be entered."]
    }
  }
);

const noteModel = mongoose.model("noteModel", noteSchema);

module.exports = noteModel;