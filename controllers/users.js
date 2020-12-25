const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch(() => res.status(500).send({ message: 'Не удалось загрузить список пользователей' }));
};

const getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Не удалось найти пользователя' });
      }
      return res.status(200).send(user);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(400).send({ message: 'Некорректно указан id пользователя' });
      }
      return res.status(500).send({ message: 'Ошибка сервера' });
    });
};

const createUser = (req, res) => {
  const { name, phone, email, password } = req.body;

  User.create({ name, phone, email, password })
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: err.message });
      }
      return res.status(500).send({ message: 'Ошибка сервера' });
    });
};

const updateUser = (req, res) => {
  const { name, phone, email, password } = req.body;

  User.findByIdAndUpdate(req.user._id, { name, phone, email, password }, { runValidators: true, new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Не удалось найти пользователя' });
      }
      return res.status(200).send(user);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: err.message });
      }
      return res.status(500).send({ message: 'Ошибка сервера' });
    });
};

const deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Не удалось найти пользователя' });
      }
      return res.status(200).send(user);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(400).send({ message: 'Некорректно указан id пользователя' });
      }
      return res.status(500).send({ message: 'Ошибка сервера' });
    });
}

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };