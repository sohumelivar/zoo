const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const ChangeTariffs = require('../views/ChangeTariffs');

router.get('/', (req, res) => {
  renderTemplate(ChangeTariffs, { title: 'Change tariffs', username: req.session.username }, res);
});

module.exports = router;
