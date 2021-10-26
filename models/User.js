const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  dob: String,
  email: String,
  ssn: String,
  accNum: String,
});

module.exports = model("User", userSchema);
