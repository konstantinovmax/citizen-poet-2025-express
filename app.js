const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const usersRouter = require('./routes/users');
const poemsRouter = require('./routes/poems');
require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/citizen-poetdb', {
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

app.listen(port);