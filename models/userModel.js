const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    user: {
      firstName: {
        type: String,
        trim: true,
        minlenght: 1,
        required: [true, "First name is required."]
      },
      lastName: {
        type: String,
        trim: true,
        required: [true, "Last name is required."]
      },
      // email validation in mongoose https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
      email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
          validator: function(v) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
          },
          message: "Please enter a valid email.",
        },
        required: [true, "Email is required"]
      },
      username: {
        type: String,
        trim: true,
        unique: true,
        minlenght: 1,
        required: [true, "Unique username is required."]
      },
      password: {
        type: String,
        trim: true,
        minlength: [4, "Password must be 4 characters long."],
        required: [true, "Password is required."]
      },
    },
    character:   {
      characterName: {
        type: String,
        trim: true,
        unique: true,
        minlenght: 1,
        required: [true, "Enter a name for your character."]
      },
      characterCreatedAt: {
        type: Date,
        required: true
      },
      characterTitle: {
        type: String,
        minlenght: 1,
        required: true
      }
    },
    foldersList: []
  }
);

const userModel = mongoose.model("userModel", userSchema);

module.exports = userModel;