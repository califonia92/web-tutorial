const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  fName: String,
  mName: String,
  lName: String,
  suffix: String,
  dob: String,
  email: String,
  phone: String,
  street: String,
  city: String,
  state: String,
  zipCode: String,
  ssn: String,
});

module.exports = model("User", userSchema);
