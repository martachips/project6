const {
  getPinceles,
  getPincelByID,
  postPinceles,
  updatePinceles,
  deletPinceles
} = require('../controllers/pinceles');

const pincelesRouter = require('express').Router();

pincelesRouter.get('/:id', getPincelByID);
pincelesRouter.get('/', getPinceles);
pincelesRouter.post('/', postPinceles);
pincelesRouter.put('/:id', updatePinceles);
pincelesRouter.delete('/:id', deletPinceles);

module.exports = pincelesRouter;
