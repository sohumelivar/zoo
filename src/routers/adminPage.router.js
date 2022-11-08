const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const AdminPage = require('../views/AdminPage');

router.get('/', (req, res) => {
  renderTemplate(AdminPage, { title: 'Admin page' }, res);
});

module.exports = router;
