const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Page404 = require('../views/Page404');

router.get('/', (req, res) => {
  renderTemplate(Page404, { title: 'Error! 404 Error!', username: req.session.username }, res);
});

module.exports = router;
