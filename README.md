# Важно.
Необходимо установить npm и postgreSQL


npm - https://nodejs.org/en/download

postgreSQL - https://www.postgresql.org/download/

# Скачивание репозитория.
Клонируйте в любое удобное место репозиторий, используя команду git clone https://github.com/udomday/test-task.git

# Установка БД.
С помощью терминала перейдите в папку bin(Обычно она находится по пути "C:\Program Files\PostgreSQL\15(может отличаться в зависимости от версии)\bin").
Затем необходимо залогиниться с помощью команды psql -U postgres(или название другого аккаунта).

Прежде чем создавать базу данных, таблицы и вносить туда данные, необходимо поменять кодировку postgreSQL с помощью команды psql \! chcp 1251. 

Это необходимо для корректного отображения и записи кириллицы.

!Примечание!

Иногда после команды psql \! chcp 1251 плохо считывается следующий SQL запрос. Во избежание этого можно написать любую команду по типу SELECT * FROM users;
Данный способ является костылем, но нужен для корректного создания базы данных.

Далее перейдите в корневую папку проекта, копируйте все содержимое файла init-db.sql и вставляйте в строчку терминала.

# Настройка БД.
Из корня проекта перейдите в папку server. Там находится файл .env. Его необходимо отредактировать под ваши данные PostgreSQL.


DB_NAME=testaskdb - название базы данных.

DB_USER=postgres - имя пользователя, которому принадлежит база дынных.

DB_PASSWORD=root - пароль от пользователя.

DB_HOST=localhost - хост.

DB_PORT=5432 - пароль от хоста.

# Установка модулей.
С помощью терминала перейдите в папку server. Напишите команду npm install.

С помощью терминала перейдите в папку client. Напишите команду npm install.


# Запуск проекта.
С помощью терминала перейдите в папку server. Напишите команду npm start.

С помощью терминала перейдите в папку client. Напишите команду npm start.

