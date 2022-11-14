const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Aaa = require('../views/Aaa');
const { Animal } = require('../../db/models');

router.get('/updateanimal/:id', async (req, res) => {
  try {
    const { id, species } = req.params;
    console.log('qqqqqqqqqqqq', species);
    renderTemplate(Aaa, { id, species }, res);
  } catch (error) {
    console.log('1', error);
  }
});
router.post('/updateanimal/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      species, description, short, photo1, photo2, photo3, photo4,
    } = req.body;
    await Animal.update({
      species, description, short, photo1, photo2, photo3, photo4,
    }, { where: { id: req.params.id } });
    res.redirect('/animal');
  } catch (error) {
    console.log('ErrCreate', error);
  }
});
module.exports = router;
