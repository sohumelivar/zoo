const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const ChangeTariffs = require('../views/ChangeTariffs');
const { Tariff } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const tariffs = await Tariff.findAll({ raw: true });
    const childrenWeekEnd = tariffs.find((el) => el.visitor === 'children' && el.dayOfTheWeek === 'weekend');
    const childrenWeekDay = tariffs.find((el) => el.visitor === 'children' && el.dayOfTheWeek === 'weekday');
    const adultWeekEnd = tariffs.find((el) => el.visitor === 'adult' && el.dayOfTheWeek === 'weekend');
    const adultWeekDay = tariffs.find((el) => el.visitor === 'adult' && el.dayOfTheWeek === 'weekday');
    renderTemplate(ChangeTariffs, {
      title: 'Change tariffs', childrenWeekEnd, childrenWeekDay, adultWeekEnd, adultWeekDay,
    }, res);
  } catch (error) {
    console.log('ERROR CHANGETARIFFSROUTER.JS --- >>> ', error);
  }
});

router.post('/', async (req, res) => {
  try {
    const { changeAgeAdultWD } = req.body;
    const result = await Tariff.findAll({ raw: true });
    console.log(result);
    console.log('REQ BODY --- >>> ', req.body);
    res.json('14');
  } catch (error) {
    console.log('ERROR CHANGETARIFFSROUTER.JS --- >>> ', error);
  }
});

module.exports = router;
