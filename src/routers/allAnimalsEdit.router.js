const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const AllAnimalsEdit = require('../views/AllAnimalsEdit');
const { Animal } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const currentAnimal = await Animal.findAll();
    const result = currentAnimal.map((animal) => animal.dataValues);
    renderTemplate(AllAnimalsEdit, { title: 'Change animals', result, username: req.session.username }, res);
  } catch (error) {
    console.log('allAnimalsEditROUTER', error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    // const currentAnimal = await Animal.findOne({ where: id });
    // console.log(currentAnimal);
    // res.send(`Page ${currentAnimal}`);
    res.sendStatus(200);
  } catch (error) {
    console.log('ERROR PARAM ANIMALEDIT', error);
  }
});

router.delete('/', async (req, res) => {
  try {
    const { name } = req.body;
    await Animal.destroy({ where: { id: name } });
    console.log('iDDDDDDDDDDDD', name);
    res.status(200).json({ status: 'success', message: 'Вы удалили данное животное' });
  } catch (error) {
    console.log('allANIMALSROUTER DELETE ERRROR', error);
  }
});

module.exports = router;
