const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageSchema = new Schema(
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
    //content will be image url
    content: {
      type: String,
      trim: true,
      minlenght: 1,
      required: [true, "An image URL must be uploaded."]
    }
  }
);

const imageModel = mongoose.model("imageModel", imageSchema);

module.exports = imageModel;