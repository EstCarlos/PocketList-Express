const mongoose = require("mongoose");

const TagsSchema = new mongoose.Schema({
  TagName: {
    type: String,
    trim: true,
  }
});

module.exports = mongoose.model("Tags", TagsSchema);
