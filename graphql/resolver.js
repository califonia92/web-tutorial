const User = require("../models/User");

module.exports = {
  Query: {
    getUser: async function (_, context, { id }, info) {
      try {
        const user = await User.findById(id);
        if (user) {
          return user;
        } else return {};
      } catch (err) {
        return {};
      }
    },
  },
  Mutation: {
    createUser: async function (
      _,
      { input: { firstName, middleName, lastName, dob, email, ssn, accNum } },
      context,
      info
    ) {
      try {
        const user = new User({
          firstName,
          middleName,
          lastName,
          dob,
          email,
          ssn,
          accNum,
        });

        const res = await user.save();
        return res;
      } catch (err) {
        throw new Error(err);
      }
    },
    updateUser: async function (
      _,
      { input: { firstName, middleName, lastName, dob, email, ssn, accNum } },
      context,
      info
    ) {
      try {
        const user = await User.findOne({ email: email });
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
