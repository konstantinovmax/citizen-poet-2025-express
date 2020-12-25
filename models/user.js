const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  birthday: {
    type: Date,
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(v);
      },
      message: 'Введите номер телефона в международном формате',
    },
  },
  email: {
    type: String,
    required: true,
    minlength: 2,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
