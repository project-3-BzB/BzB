const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const linkSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      unique: false,
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
      required: false,
      default: null
    },
    content: {
      type: String,
      trim: true,
      minlenght: 1,
      required: [true, "A link must be entered."]
    }
  }
);

const linkModel = mongoose.model("linkModel", linkSchema);

module.exports = linkModel;