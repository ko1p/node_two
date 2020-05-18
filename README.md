## node.projectTwo

Ссылка на проект: [node.projectTwo](https://github.com/ko1p/node_two "REST API проекта Mesto")

Текущая версия: **v0.0.3**

## Что это за проект?

Создаем REST API проекта Mesto и связываем его с базой данных MongoDB :floppy_disk:

## Запуск и настройка:

#### Клонируем приложение:

    https://github.com/ko1p/node_two.git

#### Настройка конфигурационного файла:

Проект работает с MongoDB, по умолчанию подключение происходит по адресу:

_mongodb://localhost:27017/mestodb_

поменять настройки можно в конфигурационном файле **config.js**, находящемся в корне проекта.

#### Установка необходимых модулей
Введите в терминале следующие команды:

    npm install
#### Запуск MongoDB
    mongod
#### Запуск приложения
    node app.js

### Примеры запросов:

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
