const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Tarrifs = require('../views/Tariffs');

router.get('/', (req, res) => {
  renderTemplate(Tarrifs, { title: 'Tarrifs' }, res);
});

module.exports = router;
