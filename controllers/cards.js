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
    .catch((err) => res.status(500).send({ message: err.message }));
});

const deleteCard = ((req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (card !== null) {
        res.send({ message: 'Карточка успешно удалена' });
      } else {
        res.status(404).send({ message: 'Ошибка, карточки с таким id нет' });
      }
    })
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
});

const likeCard = ((req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (card !== null) {
        res.send({ message: 'Лайк успешно поставлен' });
      } else {
        res.status(404).send({ message: 'Лайк не поставлен, т.к карточки с таким id нет' });
      }
    })
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
});

const dislikeCard = ((req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (card !== null) {
        res.send({ message: 'Лайк успешно снят' });
      } else {
        res.status(404).send({ message: 'Лайк не снят, т.к карточки с таким id нет' });
      }
    })
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
});

module.exports = {
  getAllCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
