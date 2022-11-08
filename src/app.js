require('@babel/register');
const express = require('express');
const path = require('path');
const morgan = require('morgan');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const isAuth = require('./middlewares/isAuth');
const adminPageRouter = require('./routers/adminPage.router');
const changeTariffsRouter = require('./routers/changeTariffs.router');
const changeAnimalsRouter = require('./routers/changeAnimals.router');
const tariffsRouter = require('./routers/tariffsPage');
const animalChangeRouter = require('./routers/animalChange.router');
const mainPageRouter = require('./routers/mainPage.router');
const loguotRouter = require('./routers/logout.router');

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(morgan('dev'));
app.use(session({
  store: new FileStore(),
  name: 'authUser',
  secret: process.env.SECRET || 'zoo',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
}));

app.use('/', mainPageRouter);
app.use('/admin', isAuth, adminPageRouter);
app.use('/logout', loguotRouter);
app.use('/changeTariffs', isAuth, changeTariffsRouter);
app.use('/changeAnimals', isAuth, changeAnimalsRouter);
app.use('/tariffs', tariffsRouter);
app.use('/changeAnimal', isAuth, animalChangeRouter);

app.listen(PORT, () => { console.log('never gonna give you up !!!'); });

// ! reset; npm run dev
