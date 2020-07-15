const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema(
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
      maxlength: 250,
      required: [true, "A task must be entered (max. 250 characters)."]
    },
    dueDate: {
      type: Date,
      required: true
    },
    isComplete: {
      type: Boolean,
      required: true
    }
  }
);

const taskModel = mongoose.model("taskModel", taskSchema);

module.exports = taskModel;