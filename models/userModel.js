const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const uniqueValidator = require("mongoose-unique-validator");
const HASH_SYNC_NUM = 12; //hide in .env!!!

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
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
    passwordHash: {
      type: String,
      required: true
    },
    // character: {
    //   characterName: {
    //     type: String,
    //     trim: true,
    //     unique: true,
    //     minlenght: 1,
    //     required: [true, "Enter a name for your character."]
    //   },
    //   characterCreatedAt: {
    //     type: Date,
    //     required: true
    //   },
    //   characterTitle: {
    //     type: String,
    //     minlenght: 1,
    //     required: true
    //   }
    // },
    foldersList: [
      {
        type: Schema.Types.ObjectId,
        ref: "folderModel"
      }
    ]
  }
);

userSchema.plugin(uniqueValidator);

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

userSchema.virtual("password").set(function(value) {
  this.passwordHash = bcrypt.hashSync(value, HASH_SYNC_NUM);
});

//https://medium.com/front-end-weekly/how-to-create-a-simple-authorization-login-using-bcrypt-react-and-ajax-d71ed919f5cb
// userSchema.pre("save", function(next) {
//   let user = this;
//   //hashes password if it is new or updated
//   if (!user.isModified("password")) return next();
//   //generate salt
//   bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//     if (err) return next(err);
//     //hash password with salt
//     bcrypt.hash(user.password, salt, function(err, hash) {
//       if (err) return next(err);
//       user.password = hash;
//       next();
//     });
//   });
// });

// userSchema.statics.validatePassword = function(inputedPassword, realPassword, cb) {
//   bcrypt.compare(inputedPassword, realPassword, function(err, isValid) {
//     if (err) return cb(err);
//     cb(err, isValid);
//   });
// };

const userModel = mongoose.model("userModel", userSchema);

module.exports = userModel;