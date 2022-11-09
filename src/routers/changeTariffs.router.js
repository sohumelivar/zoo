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

// ? -------------------------------------------------------------------------------------------------------
// todo input 1 --------------------------------------------------------------------------------------------

router.post('/', async (req, res) => {
  try {
    const { name1 } = req.body;
    const result = await Tariff.findOne({ where: { id: '1' } });
    const result1 = await Tariff.findOne({ where: { id: '4' } });
    result.age = Number(name1);
    result1.age = Number(name1);
    await result.save();
    await result1.save();
    res.json(result);
  } catch (error) {
    console.log('ERROR CHANGETARIFFSROUTER.JS --- >>> ', error);
  }
});

// todo input 2 --------------------------------------------------------------------------------------------

module.exports = router;
