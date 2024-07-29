const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = 'plantDB';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 60000,
  socketTimeoutMS: 60000,
  connectTimeoutMS: 60000,
});

let db;

client.connect()
  .then(() => {
    db = client.db(dbName);
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Insert plant
router.post('/plants', async (req, res) => {
  const plantData = req.body;
  try {
    const result = await db.collection('plants').insertOne(plantData);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get plants
router.get('/plants', async (req, res) => {
  try {
    const plants = await db.collection('plants').find({}).toArray();
    res.status(200).json(plants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
