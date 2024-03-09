const mongoose = require('mongoose');

const pincelesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: Number, required: true }
  },
  {
    timestamps: true,
    collection: 'pinceles'
  }
);
const PINCELES = mongoose.model('pinceles', pincelesSchema, 'pinceles');
module.exports = PINCELES;
