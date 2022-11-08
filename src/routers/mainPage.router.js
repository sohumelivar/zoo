const router = require('express').Router();
const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');
const MainPage = require('../views/MainPage');
const Admin = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(MainPage, { title: 'Welcome to the amazing ZOO' }, res);
});

router.post('/', async (req, res) => {
  const { name, password } = req.body;
  const logUser = await Admin.findOne({ where: { name } });
  if (!name.trim() || !password.trim()) {
    return res.status(404).json({ status: 'error', message: 'Пожалуйста заполните все поля' });
  }
  if (logUser) {
    const validPassword = await bcrypt.compare(password, logUser.password);
    if (validPassword) {
      req.session.username = logUser.login;
      return res.json({ status: 'success', message: 'Неправильный логин или пароль' });
    }
  }
  return res.status(404).json({ status: 'error', message: 'Неправильный логин или пароль' });
});
module.exports = router;
