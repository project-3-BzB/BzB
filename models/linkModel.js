const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const linkSchema = new Schema(
  {
    linkTitle: {
      type: String,
      trim: true,
      unique: true,
      minlenght: 1,
      required: [true, "A title is required."]
    },
    linkCreatedAt: {
      type: Date,
      required: true
    },
    linkUpdatedAt: {
      type: Date,
      required: true
    },
    linkContent: {
      type: String,
      trim: true,
      minlenght: 1,
      required: [true, "A link must be entered."]
    }
  }
);

const linkModel = mongoose.model("linkModel", linkSchema);

module.exports = linkModel;