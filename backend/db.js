const mongoose = require('mongoose');
const uri = 'mongodb+srv://2100030338:12345@cluster0.vodaxez.mongodb.net/ecommercemern-1?retryWrites=true&w=majority';

async function mongoDB() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to database!');
  } catch (e) {
    console.error('Database connection error:', e);
  }
} 

module.exports = mongoDB;
