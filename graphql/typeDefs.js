const { gql } = require("graphql-tag");

module.exports = gql`
  type User {
    id: ID
    fName: String
    mName: String
    lName: String
    suffix: String
    dob: String
    email: String
    phone: String
    street: String
    city: String
    state: String
    zipCode: String
    ssn: String
  }
  input createUserInput {
    fName: String
    mName: String
    lName: String
    suffix: String
    dob: String
    email: String
    phone: String
    street: String
    city: String
    state: String
    zipCode: String
    ssn: String
  }

  input updateUserInput {
    fName: String
    mName: String
    lName: String
    suffix: String
    dob: String
    email: String
    phone: String
    street: String
    city: String
    state: String
    zipCode: String
    ssn: String
  }

  type Query {
    getUser(id: ID): User!
  }

  type Mutation {
    createUser(input: createUserInput): User!
    updateUser(input: updateUserInput): User!
  }
`;
