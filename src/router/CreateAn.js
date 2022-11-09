const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const CreateAnomal = require('../views/CreateAnomal');
const { Animal } = require('../../db/models');

router.get('/createanimal', (req, res) => {
  renderTemplate(CreateAnomal, {}, res);
});

router.post('/createanimal', async (req, res) => {
  try {
    const {
      species, description, short, photo1, photo2, photo3, photo4,
    } = req.body;
    const NewAnimal = await Animal.create({
      species, description, short, photo1, photo2, photo3, photo4,
    });
    res.redirect('/animal');
  } catch (error) {
    console.log('ErrCreate', error);
  }
});

module.exports = router;
