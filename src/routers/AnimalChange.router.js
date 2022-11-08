const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const AnimalChange = require('../views/AnimalChange');

router.get('/', (req, res) => {
  renderTemplate(AnimalChange, { title: 'Change currentt animal', username: req.session.username }, res);
});

module.exports = router;
