require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const pincelesRouter = require('./src/api/routes/pinceles');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/v1/pinceles', pincelesRouter);

const PORT = 4000;

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found');
});

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
