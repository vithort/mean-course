const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: { tipe: String, require: true },
  content: { tipe: String, require: true },
});

module.exports = mongoose.model("Post", postSchema);
