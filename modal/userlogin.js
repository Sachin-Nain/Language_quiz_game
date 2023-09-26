const mongoose = require("mongoose");
const { Schema } = mongoose;

const loginformSchema = new Schema({
    userName: {
      type: String
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  });
  
  exports.Login = mongoose.model("Login", loginformSchema);