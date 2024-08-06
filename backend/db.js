const { MongoClient } = require('mongodb');

const uri ='mongodb+srv://2100030338:12345@cluster0.vodaxez.mongodb.net/ecommercemern-1?retryWrites=true&w=majority&appName=Cluster0'

async function mongoDB() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to database!');
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

module.exports = mongoDB;