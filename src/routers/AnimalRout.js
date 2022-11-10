const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Anima = require('../views/Animal');
const { Animal } = require('../../db/models');

router.get('/animal', async (req, res) => {
  try {
    const All = await Animal.findAll({ raw: true });
    renderTemplate(Anima, { All }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
