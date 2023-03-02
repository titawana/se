const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
      firstname: {
        type: String,
        required: [true, "Please add the user name"],
      },
      lastname: {
        type: String,
        required: [true, "Please add the user name"],
      },
      username: {
        type: String,
        required: [true, "Please add the user name"],
      },
      email: {
        type: String,
        required: [true, "Please add the user email address"],
        unique: [true, "Email address already taken"],
      },
      password: {
        type: String,
        required: [true, "Please add the user password"],
      },
      phonenumber: {
        type: Number,
        required: [true, "Please add the phonenumber"],
      },
      role:{
        type: String,
        required: [true]
      }
    },
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("User", userSchema);