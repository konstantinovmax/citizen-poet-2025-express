const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    minlength: 5,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const requestModel = mongoose.model('request', requestSchema);

module.exports = requestModel;
