const router = require('express').Router();
const { Animal } = require('../../db/models');

router.delete('/', async (req, res) => {
  try {
    await Animal.findByPk(req.body.id, { raw: true });
    await Animal.destroy({ where: { id: req.body.id } });
    res.json({ re: 'удалено' });
  } catch (error) {
    console.log('errdelete', error);
  }
});

module.exports = router;
