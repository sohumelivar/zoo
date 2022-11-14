const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Anima = require('../views/Animal');
const { Animal } = require('../../db/models');
const CardAnimal = require('../views/CardAnimal');

router.get('/', async (req, res) => {
  try {
    const All = await Animal.findAll({ raw: true });
    renderTemplate(Anima, { All, title: 'Animal page', username: req.session.username }, res);
  } catch (error) {
    console.log(error);
  }
});
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const One = await Animal.findOne({ where: { id }, raw: true });
    renderTemplate(CardAnimal, { One }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
