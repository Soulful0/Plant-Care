const { ApolloServer } = require("apollo-server");
const typeDefs = require("../schemas/typeDefs"); // Adjust the path
const resolvers = require("../schemas/resolvers"); // Adjust the path
const { createTestClient } = require("apollo-server-testing");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const Plant = require("../models/plants"); // Use the Plant model

// NO USER MODEL INCLUDED IN THIS TEST

let mongoServer;
let server;
let query;
let mutate;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const testClient = createTestClient(server);
  query = testClient.query;
  mutate = testClient.mutate;
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("Resolvers", () => {
  beforeEach(async () => {
    await Plant.create({
      name: "Rose",
      scientificName: "Rosa",
      species: new mongoose.Types.ObjectId(),
    });
  });

  afterEach(async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
      await collections[key].deleteMany();
    }
  });

  it("fetches plants", async () => {
    const GET_PLANTS = `
      query {
        plants {
          _id
          name
          scientificName
        }
      }
    `;

    const res = await query({ query: GET_PLANTS });
    expect(res.data.plants).toBeDefined();
    expect(res.data.plants).toBeInstanceOf(Array);
  });
});
