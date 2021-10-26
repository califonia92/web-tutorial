const { gql } = require("graphql-tag");

module.exports = gql`
  type User {
    id: ID
    firstName: String
    middleName: String
    lastName: String
    dob: String
    email: String
    ssn: String
    accNum: String
  }
  input createUserInput {
    firstName: String
    middleName: String
    lastName: String
    dob: String
    email: String
    ssn: String
    accNum: String
  }

  input updateUserInput {
    firstName: String
    middleName: String
    lastName: String
    phone:String
    dob: String
    email: String
    ssn: String
    accNum: String
  }

  type Query {
    getUser(id: ID): User!
  }

  type Mutation {
    createUser(input: createUserInput): User!
    updateUser(input: updateUserInput): User!
  }
`;
