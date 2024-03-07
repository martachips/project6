const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Conectadoooo');
  } catch (error) {
    console.log('ERROOOOOR');
  }
};

module.exports = { connectDB };
