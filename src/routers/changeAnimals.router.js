const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const ChangeAnimals = require('../views/ChangeAnimals');

router.get('/', (req, res) => {
  renderTemplate(ChangeAnimals, { title: 'Change tariffs', username: req.session.username }, res);
});

module.exports = router;
