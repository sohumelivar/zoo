const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const UpdateAn = require('../views/UpdateAn');
const { Animal } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(UpdateAn, {}, res);
});

router.post('/', async (req, res) => {
  try {
    const {
      species, description, short, photo1, photo2, photo3, photo4,
    } = req.body;
    const UpAn = await Animal.update({
      species, description, short, photo1, photo2, photo3, photo4,
    });
    res.redirect('/animal');
  } catch (error) {
    console.log('ErrCreate', error);
  }
});

module.exports = router;
