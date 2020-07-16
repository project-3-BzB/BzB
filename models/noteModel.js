const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      unique: true,
      minlenght: 1,
      required: [true, "A title is required."]
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
    content: {
      type: String,
      trim: true,
      minlenght: 1,
      required: [true, "A note must be entered."]
    }
  }
);

const noteModel = mongoose.model("noteModel", noteSchema);

module.exports = noteModel;