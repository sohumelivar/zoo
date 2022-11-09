const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const CreateAnomal = require('../views/CreateAnimal');
const { Animal } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(CreateAnomal, {}, res);
});

router.post('/', async (req, res) => {
  try {
    const {
      species, description, short, photo1, photo2, photo3, photo4,
    } = req.body;
    const NewAnimal = await Animal.create({
      species, description, short, photo1, photo2, photo3, photo4,
    });
    res.redirect('/animals');
  } catch (error) {
    console.log('ErrCreate', error);
  }
});

module.exports = router;
