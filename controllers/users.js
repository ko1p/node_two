const User = require('../models/user');
const NotFoundError = require('../errors/notFoundError');

const getAllUsers = ((req, res) => {
  User.find({})
    .then((allUsers) => res.send({ data: allUsers }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
});

const getUser = (req, res) => {
  User.findById(req.params.userId)
    .orFail(() => new NotFoundError('Пользователь с таким id не найден'))
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      const statusCode = err.statusCode || 500;
      const message = statusCode === 500 ? 'Произошла ошибка' : err.message;
      res.status(statusCode).send({ message });
    });
};

const createUser = ((req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: err.message }));
});

const updateUserProfile = ((req, res) => {
  User.findByIdAndUpdate(req.user._id, {
    name: req.body.name,
    about: req.body.about,
  }, {
    new: true,
    runValidators: true,
    upsert: true,
  })
    .then((userProfile) => res.send({ data: userProfile }))
    .catch((err) => res.status(500).send({ message: err.message }));
});

const updateUserAvatar = ((req, res) => {
  User.findByIdAndUpdate(req.user._id, { avatar: req.body.avatar }, {
    new: true,
    runValidators: true,
    upsert: true,
  })
    .then((userProfile) => res.send({ data: userProfile }))
    .catch((err) => res.status(500).send({ message: err.message }));
});

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUserProfile,
  updateUserAvatar,
};
