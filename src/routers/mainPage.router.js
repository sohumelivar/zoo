const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const MainPage = require('../views/MainPage');

router.get('/', (req, res) => {
  renderTemplate(MainPage, { title: 'Welcome to the amazing ZOO' }, res);
});

module.exports = router;
