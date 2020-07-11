const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    taskTitle: {
      type: String,
      trim: true,
      unique: true,
      minlenght: 1,
      required: [true, "A title is required."]
    },
    taskCreatedAt: {
      type: Date,
      required: true
    },
    taskUpdatedAt: {
      type: Date,
      required: true
    },
    taskContent: {
      type: String,
      trim: true,
      minlenght: 1,
      maxlength: 250,
      required: [true, "A task must be entered (max. 250 characters)."]
    },
    taskDue: {
      type: Date,
      required: true
    },
    taskCompleted: {
      type: Boolean,
      required: true
    }
  }
);

const taskModel = mongoose.model("taskModel", taskSchema);

module.exports = taskModel;