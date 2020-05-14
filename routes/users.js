const usersRouter = require('express').Router();

const users = require('../data/users.json');

usersRouter.get('/', (req, res) => {
  res.send(users);
});

usersRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((element) => element._id === id);
  if (!user) {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
  } else {
    res.send(user);
  }
});

module.exports = usersRouter;
