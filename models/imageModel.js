const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageSchema = new Schema(
  {
    imageTitle: {
      type: String,
      trim: true,
      unique: true,
      minlenght: 1,
      required: [true, "A title is required."]
    },
    imageCreatedAt: {
      type: Date,
      required: true
    },
    imageUpdatedAt: {
      type: Date,
      required: true
    },
    //content will be image url
    imageContent: {
      type: String,
      trim: true,
      minlenght: 1,
      required: [true, "An image URL must be uploaded."]
    }
  }
);

const imageModel = mongoose.model("imageModel", imageSchema);

module.exports = imageModel;