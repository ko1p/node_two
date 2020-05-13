# node.projectTwo

Ссылка на проект: [node.projectTwo](https://github.com/ko1p/node_two "REST API проекта Mesto")

Текущая версия: **v0.0.1**

### Что это за проект?

Создаем REST API проекта Mesto и связываем его с базой данных MongoDB :floppy_disk:

## Примеры запросов:

Node.js приложение подключается к серверу Mongo по адресу mongodb://localhost:27017/mestodb

- запрос на GET /users возвращает всех пользователей из базы;
- запрос GET /users/:userId возвращает конкретного пользователя;
- запрос POST /users создаёт пользователя;
- запрос GET /cards возвращает все карточки всех пользователей;
- запрос POST /cards создаёт карточку;
- PATCH /users/me — обновляет профиль
- PATCH /users/me/avatar — обновляет аватар
- PUT /cards/:cardId/likes — поставить лайк карточке
- DELETE /cards/:cardId/likes — убрать лайк с карточки
- если в любом из запросов что-то идёт не так, сервер возвращает ответ с ошибкой и соответствующим ей статусом;

###  Используемые технологии:

- JS
- CSS
- HTML
- Git
- Webpack
- Node.js (express)
- MongoDB
