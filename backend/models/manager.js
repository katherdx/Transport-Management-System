const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const managerSchema = mongoose.Schema({
  name: { type: String, required: true },
  sex: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  adharNo: { type: String, required: true },
  password: { type: String, required: true },
  workingCity: { type: String, required: true },
  imagePath: { type: String, required: true },
  isAdmin: { type: String, required: true }
});

managerSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Manager", managerSchema);
