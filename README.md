# Бэкенд проекта "Гражданин-поэт 2025"

**[Ссылка на сервер](https://citizen-poet-2025.herokuapp.com/)**

**[Ссылка на фронтенд](https://github.com/HappyMarvin/citizen-poet-2025)**


---

**Запуск сервера**

`npm run start` — запускает сервер   
`npm run dev` — запускает сервер с hot-reload


---

**Функционал**

На сервере настроены три роута **`/poems`**, **`/users`**, **`/requests`**.


**`/poems`**

* GET-запрос на роутер `/poems` возвращает JSON со списком поэм российских поэтов-классиков.
* GET-запрос вида `/poems/?q=<искомое слово>` возвращает поэмы, в которых найдено искомое слово (искомое слово в запросе должно быть указано без стрелок <>).
* GET-запрос вида `/poems/?q=<искомое слово>&wordString=1` возвращает искомое слово и строку из поэмы, в которой найдено искомое слово (искомое слово в запросе должно быть указано без стрелок <>).
* GET-запрос вида `/poems/?q=<искомое слово>&wordStringPoem=1` возвращает искомое слово, строку из поэмы и поэму целиком, в которой найдено искомое слово (искомое слово в запросе должно быть указано без стрелок <>).


**`/users`**

* GET-запрос на роутер `/users` возвращает JSON со списком зарегистрированных пользователей.
* GET-запрос вида `/users/<id пользователя>` возвращает данные конкретного пользователя (id пользователя в запросе должно быть указано без стрелок <>).
* POST-запрос на роутер `/users` с объектом вида {"name": "", "phone": "", "email": "", "password": ""} регистрирует пользователя (делает запись в базе данных).


**`/requests`**

* GET-запрос на роутер `/requests` возвращает JSON со списком запросов от пользователя.
* POST-запрос на роутер `/requests` с объектом вида {"tile": "", "text": ""} делает запись в базе данных с запросом пользователя.


**ВНИМАНИЕ: сервер тестовый и публичный. Указанные при создании пользователя данные будут общедоступны.**
