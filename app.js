const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const usersRouter = require('./routes/users');
const poemsRouter = require('./routes/poems');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/citizen-poetdb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());
app.use('/', usersRouter);
app.use('/', poemsRouter);
app.use('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log('Ссылка на сервер: http://localhost:3000/');
});