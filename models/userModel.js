const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    user: {
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

//https://dev.to/ganeshmani/node-authentication-using-passport-js-part-1-53k7
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt(password, this.password);
};

const userModel = mongoose.model("userModel", userSchema);

module.exports = userModel;