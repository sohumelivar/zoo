const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Tarrifs = require('../views/Tariffs');
const { Tariff } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const tariffs = await Tariff.findAll({ raw: true });
    const childrenWeekEnd = tariffs.find((el) => el.visitor === 'children' && el.dayOfTheWeek === 'weekend');
    const childrenWeekDay = tariffs.find((el) => el.visitor === 'children' && el.dayOfTheWeek === 'weekday');
    const adultWeekEnd = tariffs.find((el) => el.visitor === 'adult' && el.dayOfTheWeek === 'weekend');
    const adultWeekDay = tariffs.find((el) => el.visitor === 'adult' && el.dayOfTheWeek === 'weekday');
    renderTemplate(Tarrifs, {
      title: 'Tarrifs', childrenWeekEnd, childrenWeekDay, adultWeekEnd, adultWeekDay, username: req.session.username,
    }, res);
  } catch (error) {
    console.log('ERROR TARRIFSPAGE.ROUTER.JS POST ROUTER --- >>> ', error);
  }
});

module.exports = router;
