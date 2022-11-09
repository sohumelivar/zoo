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
    if (!name1.trim()) {
      return res.status(404).json({ status: 'error', message: 'Необходимо заполнить поле' });
    }
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
    if (!name2.trim()) {
      return res.status(404).json({ status: 'error', message: 'Необходимо заполнить поле' });
    }
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
    if (!name3.trim()) {
      return res.status(404).json({ status: 'error', message: 'Необходимо заполнить поле' });
    }
    if (!name3.trim()) {
      return res.status(404).json({ status: 'error', message: 'Необходимо заполнить поле' });
    }
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
    if (!name4.trim()) {
      return res.status(404).json({ status: 'error', message: 'Необходимо заполнить поле' });
    }
    const result = await Tariff.findOne({ where: { visitor: 'children', dayOfTheWeek: 'weekday' } });
    result.basicPrice = Number(name4);
    await result.save();
    res.json(result);
  } catch (error) {
    console.log('ERROR CHANGETARIFFSROUTER.JS INPUT 4 --- >>> ', error);
  }
});
router.post('/5', async (req, res) => {
  try {
    const { name5 } = req.body;
    if (!name5.trim()) {
      return res.status(404).json({ status: 'error', message: 'Необходимо заполнить поле' });
    }
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
    if (!name6.trim()) {
      return res.status(404).json({ status: 'error', message: 'Необходимо заполнить поле' });
    }
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
    if (!name7.trim()) {
      return res.status(404).json({ status: 'error', message: 'Необходимо заполнить поле' });
    }
    const result = await Tariff.findOne({ where: { visitor: 'adult', dayOfTheWeek: 'weekday' } });
    result.additionalTicket = Number(name7);
    await result.save();
    res.json(result);
  } catch (error) {
    console.log('ERROR CHANGETARIFFSROUTER.JS INPUT 7 --- >>> ', error);
  }
});

// todo input 8 --------------------------------------------------------------------------------------------
router.post('/8', async (req, res) => {
  try {
    const { name8 } = req.body;
    if (!name8.trim()) {
      return res.status(404).json({ status: 'error', message: 'Необходимо заполнить поле' });
    }
    const result = await Tariff.findOne({ where: { visitor: 'children', dayOfTheWeek: 'weekday' } });
    result.additionalTicket = Number(name8);
    await result.save();
    res.json(result);
  } catch (error) {
    console.log('ERROR CHANGETARIFFSROUTER.JS --- >>> ', error);
  }
});
// todo input 9 --------------------------------------------------------------------------------------------
router.post('/9', async (req, res) => {
  try {
    const { name9 } = req.body;
    if (!name9.trim()) {
      return res.status(404).json({ status: 'error', message: 'Необходимо заполнить поле' });
    }
    const result = await Tariff.findOne({ where: { visitor: 'adult', dayOfTheWeek: 'weekend' } });
    result.additionalTicket = Number(name9);
    await result.save();
    console.log(result, '33333333');
    res.json(result);
  } catch (error) {
    console.log('ERROR CHANGETARIFFSROUTER.JS --- >>> ', error);
  }
});

// todo input 10 --------------------------------------------------------------------------------------------
router.post('/10', async (req, res) => {
  try {
    const { name10 } = req.body;
    if (!name10.trim()) {
      return res.status(404).json({ status: 'error', message: 'Необходимо заполнить поле' });
    }
    const result = await Tariff.findOne({ where: { visitor: 'children', dayOfTheWeek: 'weekend' } });
    result.additionalTicket = Number(name10);
    await result.save();
    console.log(result, '33333333');
    res.json(result);
  } catch (error) {
    console.log('ERROR CHANGETARIFFSROUTER.JS --- >>> ', error);
  }
});

// todo input 11 --------------------------------------------------------------------------------------------
router.post('/11', async (req, res) => {
  try {
    const { name11 } = req.body;
    if (!name11.trim()) {
      return res.status(404).json({ status: 'error', message: 'Необходимо заполнить поле' });
    }
    const result = await Tariff.findOne({ where: { visitor: 'adult', dayOfTheWeek: 'weekday' } });
    result.ridePrice = Number(name11);
    await result.save();
    console.log(result, '33333333');
    res.json(result);
  } catch (error) {
    console.log('ERROR CHANGETARIFFSROUTER.JS --- >>> ', error);
  }
});
// todo input 12 --------------------------------------------------------------------------------------------
router.post('/12', async (req, res) => {
  try {
    const { name12 } = req.body;
    if (!name12.trim()) {
      return res.status(404).json({ status: 'error', message: 'Необходимо заполнить поле' });
    }
    const result = await Tariff.findOne({ where: { visitor: 'children', dayOfTheWeek: 'weekday' } });
    result.ridePrice = Number(name12);
    await result.save();
    console.log(result, '33333333');
    res.json(result);
  } catch (error) {
    console.log('ERROR CHANGETARIFFSROUTER.JS --- >>> ', error);
  }
});

// todo input 13 --------------------------------------------------------------------------------------------
router.post('/13', async (req, res) => {
  try {
    const { name13 } = req.body;
    if (!name13.trim()) {
      return res.status(404).json({ status: 'error', message: 'Необходимо заполнить поле' });
    }
    const result = await Tariff.findOne({ where: { visitor: 'adult', dayOfTheWeek: 'weekend' } });
    result.ridePrice = Number(name13);
    await result.save();
    console.log(result, '33333333');
    res.json(result);
  } catch (error) {
    console.log('ERROR CHANGETARIFFSROUTER.JS --- >>> ', error);
  }
});
// ? ------------------------------------------------
// todo Выходной день день, adult

// todo input 14 --------------------------------------------------------------------------------------------
router.post('/14', async (req, res) => {
  try {
    const { name14 } = req.body;
    if (!name14.trim()) {
      return res.status(404).json({ status: 'error', message: 'Необходимо заполнить поле' });
    }
    const result = await Tariff.findOne({ where: { visitor: 'children', dayOfTheWeek: 'weekend' } });
    result.ridePrice = Number(name14);
    await result.save();
    console.log(result, '33333333');
    res.json(result);
  } catch (error) {
    console.log('ERROR CHANGETARIFFSROUTER.JS --- >>> ', error);
  }
});

module.exports = router;
