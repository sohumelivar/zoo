const bcrypt = require('bcrypt');
const { Tariff } = require('./db/models');
const { Admin } = require('./db/models');

// // ? -----------------------------------------------------------------------------------------------------------------------
// // ! ADD ADMINS

// const addAdmin1 = async () => {
//   try {
//     const password = '123';
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const result = await Admin.create({ name: 'admin1', password: hashedPassword });
//     return result;
//   } catch (error) {
//     console.log('ERROR ADDSEEDS.JS ADMIN1 --- >>> ', error);
//   }
// };
// addAdmin1();

// // ? -----------------------------------------------------------------------------------------------------------------------

// const addAdmin2 = async () => {
//   try {
//     const password = '123';
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const result = await Admin.create({ name: 'admin2', password: hashedPassword });
//     return result;
//   } catch (error) {
//     console.log('ERROR ADDSEEDS.JS ADMIN2 --- >>> ', error);
//   }
// };
// addAdmin2();

// // ? -----------------------------------------------------------------------------------------------------------------------

// const addAdmin3 = async () => {
//   try {
//     const password = '123';
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const result = await Admin.create({ name: 'admin3', password: hashedPassword });
//     return result;
//   } catch (error) {
//     console.log('ERROR ADDSEEDS.JS ADMIN3 --- >>> ', error);
//   }
// };
// addAdmin3();

// // ? -----------------------------------------------------------------------------------------------------------------------
// // ! ADD TARIFFS

// const addTariff1 = async () => {
//   try {
//     const result = await Tariff.create({
//       visitor: 'adult', dayOfTheWeek: 'weekend', basicPrice: '500', additionalTicket: '300', ridePrice: '400', age: '17',
//     });
//     return result;
//   } catch (error) {
//     console.log('ERROR ADDSEEDS.JS ADDTARIFF1 --- >>> ', error);
//   }
// };
// addTariff1();

// // ? -----------------------------------------------------------------------------------------------------------------------

// const addTariff2 = async () => {
//   try {
//     const result = await Tariff.create({
//       visitor: 'adult', dayOfTheWeek: 'weekday', basicPrice: '300', additionalTicket: '200', ridePrice: '200', age: '17',
//     });
//     return result;
//   } catch (error) {
//     console.log('ERROR ADDSEEDS.JS ADDTARIFF2 --- >>> ', error);
//   }
// };
// addTariff2();

// // ? -----------------------------------------------------------------------------------------------------------------------

// const addTariff3 = async () => {
//   try {
//     const result = await Tariff.create({
//       visitor: 'children', dayOfTheWeek: 'weekend', basicPrice: '300', additionalTicket: '200', ridePrice: '200', age: '17',
//     });
//     return result;
//   } catch (error) {
//     console.log('ERROR ADDSEEDS.JS ADDTARIFF3 --- >>> ', error);
//   }
// };
// addTariff3();

// // ? -----------------------------------------------------------------------------------------------------------------------]

// const addTariff4 = async () => {
//   try {
//     const result = await Tariff.create({
//       visitor: 'children', dayOfTheWeek: 'weekday', basicPrice: '150', additionalTicket: '100', ridePrice: '100', age: '17',
//     });
//     return result;
//   } catch (error) {
//     console.log('ERROR ADDSEEDS.JS ADDTARIFF4 --- >>> ', error);
//   }
// };
// addTariff4();

// // ? -----------------------------------------------------------------------------------------------------------------------

// ! node addSeeds.js
