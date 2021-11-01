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
      {
        input: {
          fName,
          mName,
          lName,
          dob,
          email,
          ssn,
          zipCode,
          state,
          city,
          phone,
          suffix,
        },
      },
      context,
      info
    ) {
      try {
        const user = new User({
          fName,
          mName,
          lName,
          dob,
          email,
          ssn,
          zipCode,
          state,
          city,
          phone,
          suffix,
        });

        const res = await user.save();
        return {
          ...res,
          id: res._id,
        };
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
