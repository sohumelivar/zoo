const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const ChangeTariffs = require('../views/ChangeTariffs');

router.get('/', (req, res) => {
  renderTemplate(ChangeTariffs, { title: 'Change tariffs' }, res);
});

module.exports = router;
