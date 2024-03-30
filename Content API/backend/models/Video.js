const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
});

module.exports = mongoose.model("Video", VideoSchema); //name of collection, name of model we want to refer to
