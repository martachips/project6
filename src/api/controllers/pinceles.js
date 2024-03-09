const PINCELES = require('../models/pinceles');

const getPinceles = async (req, res, next) => {
  try {
    const pinceles = await PINCELES.find();
    return res.status(200).json(pinceles);
  } catch (error) {
    return res.status(400).json('Error al buscar pinceles');
  }
};

const getPincelByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pincel = await PINCELES.findById(id);
    return res.status(200).json(pincel);
  } catch (error) {
    return res.status(400).json('Error al buscar pinceles por ID');
  }
};

const postPinceles = async (req, res, next) => {
  try {
    const newPincel = new PINCELES(req.body);
    const pincel = await newPincel.save();
    return res.status(201).json(pincel);
  } catch (error) {
    return res.status(400).json('Error al crear el pincel');
  }
};

const updatePinceles = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newPincel = new PINCELES(req.body);
    newPincel._id = id;
    const pincelUpdated = await PINCELES.findByIdAndUpdate(id, newPincel, {
      new: true
    });
    return res.status(200).json(pincelUpdated);
  } catch (error) {
    return res.status(400).json('Error al actualizar el pincel');
  }
};

const deletPinceles = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pincelDeleted = await PINCELES.findByIdAndDelete(id);
    return res.status(200).json(pincelDeleted);
  } catch (error) {
    return res.status(400).json('Error al eliminar el pincel');
  }
};

module.exports = {
  getPinceles,
  getPincelByID,
  postPinceles,
  updatePinceles,
  deletPinceles
};
