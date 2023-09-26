const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactformSchema = new Schema({
  Name: {
    type: String,
  },
  Score: {
    type: Number,
  },
  EnglishAns: {
    type: Number,
  },
  HindiAns: {
    type: Number,
  },
  id1 : {
    type: Schema.ObjectId,
  }
});

exports.UserResult = mongoose.model("UserResult", contactformSchema);
