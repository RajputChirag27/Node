const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const database = "e-comm";

async function dbConnect() {
  let result = await client.connect();
  db = result.db(database);
  return db.collection("products");
}

async function close() {
  try {
    // Close the connection
    await client.close();
    console.log('Connection to MongoDB closed');
  } catch (error) {
    console.error('Error closing MongoDB connection:', error);
  }
}

module.exports = {dbConnect, close};