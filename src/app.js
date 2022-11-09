require('@babel/register');
const express = require('express');
const path = require('path');
const morgan = require('morgan');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const app = express();
const PORT = process.env.PORT ?? 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public/')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(session({
  store: new FileStore(),
  name: 'authUser',
  secret: process.env.SECRET || 'zoo',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
}));
const Animal = require('./router/AnimalRout');
const CreAn = require('./router/CreateAn');
const UpdateAn = require('./router/UpdateAnimal');
const CardAn = require('./router/cardRout');

app.use('/', Animal);
app.use('/', CreAn);
app.use('/', UpdateAn);
app.use('/', CardAn);

app.listen(PORT, () => { console.log(`поднят на ${PORT}`); });
