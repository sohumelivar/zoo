const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const AdminPage = require('../views/AdminPage');

router.get('/', (req, res) => {
  renderTemplate(AdminPage, { title: 'Change tariffs', username: req.session.username }, res);
});

module.exports = router;
