const mongoose = require('mongoose');

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
      validator(v) {
        return /^((https?:\/{2})([a-z-_0-9]{1,}\.)?[a-z-_0-9]{2,}\.[a-z]{2,}((\/[a-z-_0-9]+)*?)(\/[a-z-_0-9]+\.[a-z-_0-9]{3,}))$/.test(v);
      },
    },
  },
});

module.exports = mongoose.model('user', userSchema);
