require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const db = require("./config/connection");
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const stripeRoutes = require('./routes/stripe');

const app = express();
const PORT = process.env.PORT || 3001;
async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      return authMiddleware({ req });
    },
  });
  await server.start();
  server.applyMiddleware({ app });
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use('/api/stripe', stripeRoutes);
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
  }
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
}
startServer();
