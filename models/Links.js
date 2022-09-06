const mongoose = require("mongoose");

const LinksSchema = new mongoose.Schema({
  LinkName: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  TagName: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tags"
    }],
    validate: [limite, '{PATH} no puede tener mas de 5 tags']
  }
});

function limite(val) {
  return val.length <= 5;
}
module.exports = mongoose.model("Links", LinksSchema);
