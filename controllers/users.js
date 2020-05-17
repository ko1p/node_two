const User = require('../models/user');

const getAllUsers = ((req, res) => {
  User.find({})
    .then((allUsers) => res.send({ data: allUsers }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
});

const getUser = ((req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (user !== null) {
        res.send({ data: user });
      } else {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
    })
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
});

const createUser = ((req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
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
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
});

const updateUserAvatar = ((req, res) => {
  User.findByIdAndUpdate(req.user._id, { avatar: req.body.avatar }, {
    new: true,
    runValidators: true,
    upsert: true,
  })
    .then((userProfile) => res.send({ data: userProfile }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
});

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUserProfile,
  updateUserAvatar,
};
