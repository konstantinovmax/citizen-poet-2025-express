const Request = require('../models/request');

const getRequests = (req, res) => {
  Request.find({})
    .then((requests) => res.status(200).send(requests))
    .catch(() => res.status(500).send({ message: 'Не удалось загрузить список запросов' }));
};

const createRequest = (req, res) => {
  const { title, text } = req.body;

  Request.create({ title, text, owner: req.user._id })
    .then((request) => res.status(200).send(request))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: err.message });
      }
      return res.status(500).send({ message: 'Ошибка сервера' });
    });
};

const deleteRequest = (req, res) => {
  Request.findByIdAndRemove(req.params.requestId)
    .then((request) => {
      if (!request) {
        return res.status(404).send({ message: 'Не удалось найти запрос' });
      }
      return res.status(200).send(request);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(400).send({ message: 'Некорректно указан id запроса' });
      }
      return res.status(500).send({ message: 'Ошибка сервера' });
    });
};

module.exports = { getRequests, createRequest, deleteRequest };
