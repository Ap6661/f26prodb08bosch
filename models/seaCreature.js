const mongoose = require("mongoose");


const seaCreatureSchema = mongoose.Schema({
  name: String,
  genusName: String,
  numberOfTeeth: Number,
  isVertebrate: Boolean,
});

module.exports = mongoose.model("SeaCreature", seaCreatureSchema);
