const Card = require('../models/card');

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

const deleteCard = ((req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then(() => res.send({ message: 'Карточка успешно удалена' }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
});

const likeCard = ((req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then(() => res.send({ message: 'Лайк успешно поставлен' }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
});

const dislikeCard = ((req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then(() => res.send({ message: 'Лайк успешно снят' }))
    .catch(() => res.status(500).send({ message: 'Проищошла ошибка' }));
});

module.exports = {
  getAllCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
