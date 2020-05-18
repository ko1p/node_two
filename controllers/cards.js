const Card = require('../models/card');
const NotFoundError = require('../errors/notFoundError');

const getAllCards = ((req, res) => {
  Card.find({})
    .then((card) => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
});

const createCard = ((req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((newCard) => res.send({ data: newCard }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
});

const deleteCard = async (req, res) => {
  await Card.findByIdAndRemove(req.params.cardId)
    .orFail(() => new NotFoundError('Пользователь с таким id не найден'))
    .then(() => res.send({ message: 'Карточка удалена' }))
    .catch((err) => {
      const statusCode = err.statusCode || 500;
      const message = statusCode === 500 ? 'Произошла ошибка' : err.message;
      res.status(statusCode).send({ message });
    });
};

const likeCard = async (req, res) => {
  await Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => new NotFoundError('Нет карточки с таким id, лайк не поставлен'))
    .then(() => res.send({ message: 'Лайк поставлен' }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

const dislikeCard = async (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => new NotFoundError('Нет карточки с таким id, лайк не снят'))
    .then(() => res.send({ message: 'Лайк снят' }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports = {
  getAllCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
