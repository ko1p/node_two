const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(avatarLink) {
        return validator.isURL(avatarLink, { protocols: ['http', 'https'], require_protocol: true });
      },
    },
  },
});

module.exports = mongoose.model('user', userSchema);
