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
const tariffsRouter = require('./routers/tariffsPage.router');
const animalChangeRouter = require('./routers/animalChange.router');
const mainPageRouter = require('./routers/mainPage.router');
const loguotRouter = require('./routers/logout.router');
const page404Router = require('./routers/page404.router');
const animalRouter = require('./routers/animals.router');
const createdAnimalRouter = require('./routers/createdAnimal.router');
const updateAnimalRouter = require('./routers/updateAnimal.router');
const cardAnimals = require('./routers/cardAnimal.router');

const app = express();
const PORT = process.env.PORT ?? 3001;

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
app.use('/logout', isAuth, loguotRouter);
app.use('/changeTariffs', isAuth, changeTariffsRouter);
app.use('/changeAnimals', isAuth, changeAnimalsRouter);
app.use('/tariffs', tariffsRouter);
app.use('/changeAnimal', isAuth, animalChangeRouter);
app.use('/404', page404Router);

app.use('/animal', animalRouter);
app.use('/createanimal', isAuth, createdAnimalRouter);
app.use('/updateanimal', isAuth, updateAnimalRouter);
app.use('/animals', cardAnimals);

app.get('*', (req, res) => res.redirect('/404'));

app.listen(PORT, () => { console.log(`${PORT} never gonna give you up !!!`); });

// ! reset; npm run dev
