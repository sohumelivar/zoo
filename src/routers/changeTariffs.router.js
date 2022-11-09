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
      title: 'Change tariffs', childrenWeekEnd, childrenWeekDay, adultWeekEnd, adultWeekDay, username: req.session.username,
    }, res);
  } catch (error) {
    console.log('ERROR CHANGETARIFFSROUTER.JS --- >>> ', error);
  }
});

// ? -------------------------------------------------------------------------------------------------------
// todo изменение возраста взрослого человека

router.post('/1', async (req, res) => {
  try {
    const { name1 } = req.body;
    const result = await Tariff.findOne({ where: { visitor: 'adult', dayOfTheWeek: 'weekday' } });
    const result1 = await Tariff.findOne({ where: { visitor: 'adult', dayOfTheWeek: 'weekend' } });
    result.age = Number(name1);
    result1.age = Number(name1);
    await result.save();
    await result1.save();
    res.json(result);
  } catch (error) {
    console.log('ERROR CHANGETARIFFSROUTER.JS INPUT 1 --- >>> ', error);
  }
});

// ? -------------------------------------------------------------------------------------------------------
// todo изменение возраста ребенка

router.post('/2', async (req, res) => {
  try {
    const { name2 } = req.body;
    const result = await Tariff.findOne({ where: { visitor: 'children', dayOfTheWeek: 'weekday' } });
    const result1 = await Tariff.findOne({ where: { visitor: 'children', dayOfTheWeek: 'weekend' } });
    result.age = Number(name2);
    result1.age = Number(name2);
    await result.save();
    await result1.save();
    res.json(result);
  } catch (error) {
    console.log('ERROR CHANGETARIFFSROUTER.JS INPUT 2 --- >>> ', error);
  }
});

// ? ------------------------------------------------
// todo Изменить цену на единый билет
// todo Будний день, adult

router.post('/3', async (req, res) => {
  try {
    const { name3 } = req.body;
    const result = await Tariff.findOne({ where: { visitor: 'adult', dayOfTheWeek: 'weekday' } });
    result.basicPrice = Number(name3);
    await result.save();
    res.json(result);
  } catch (error) {
    console.log('ERROR CHANGETARIFFSROUTER.JS INPUT 3 --- >>> ', error);
  }
});

// ? ------------------------------------------------
// todo Изменить цену на единый билет
// todo Будний день, children

router.post('/4', async (req, res) => {
  try {
    const { name4 } = req.body;
    const result = await Tariff.findOne({ where: { visitor: 'children', dayOfTheWeek: 'weekday' } });
    result.basicPrice = Number(name4);
    await result.save();
    res.json(result);
  } catch (error) {
    console.log('ERROR CHANGETARIFFSROUTER.JS INPUT 4 --- >>> ', error);
  }
});

// ? ------------------------------------------------
// todo Выходной день день, adult

router.post('/5', async (req, res) => {
  try {
    const { name5 } = req.body;
    const result = await Tariff.findOne({ where: { visitor: 'adult', dayOfTheWeek: 'weekend' } });
    result.basicPrice = Number(name5);
    await result.save();
    res.json(result);
  } catch (error) {
    console.log('ERROR CHANGETARIFFSROUTER.JS INPUT 5 --- >>> ', error);
  }
});

// ? ------------------------------------------------
// todo Выходной день день, children

router.post('/6', async (req, res) => {
  try {
    const { name6 } = req.body;
    const result = await Tariff.findOne({ where: { visitor: 'children', dayOfTheWeek: 'weekend' } });
    result.basicPrice = Number(name6);
    await result.save();
    res.json(result);
  } catch (error) {
    console.log('ERROR CHANGETARIFFSROUTER.JS INPUT 6 --- >>> ', error);
  }
});

// ? ------------------------------------------------
// todo Изменить цену на "Зооэкзотариум"
// todo Будний день, adult

router.post('/7', async (req, res) => {
  try {
    const { name7 } = req.body;
    const result = await Tariff.findOne({ where: { visitor: 'adult', dayOfTheWeek: 'weekday' } });
    result.additionalTicket = Number(name7);
    await result.save();
    res.json(result);
  } catch (error) {
    console.log('ERROR CHANGETARIFFSROUTER.JS INPUT 7 --- >>> ', error);
  }
});

module.exports = router;
