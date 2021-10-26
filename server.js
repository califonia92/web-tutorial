require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolver");
const { MONGO_URI, PORT } = process.env;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Database is Connected");
    return server.listen({ port: PORT || process.env.PORT });
  })
  .then((res) => {
    console.log(`Server running on ${res.url}`);
  });
