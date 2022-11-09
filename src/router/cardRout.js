const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const CardAnimal = require('../views/CardAnimal');
const { Animal } = require('../../db/models');

router.get('/animal/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const One = await Animal.findOne({ where: { id }, raw: true });
    renderTemplate(CardAnimal, { One }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
