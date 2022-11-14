const router = require('express').Router();

router.get('/', async (req, res) => {
  req.session.destroy((error) => {
    res.clearCookie('authUser');
    if (error) {
      res.status(500).json({ message: 'Ошибка удаления сессии' });
    }
    res.redirect('/');
  });
});

module.exports = router;
