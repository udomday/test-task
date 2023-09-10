CREATE DATABASE testaskdb;

\connect testaskdb

CREATE TABLE books(id BIGSERIAL PRIMARY KEY, title VARCHAR NOT NULL, release DATE NOT NULL, price INTEGER NOT NULL, pagecount NUMERIC NOT NULL);

CREATE TABLE reviews(id BIGSERIAL PRIMARY KEY, login VARCHAR NOT NULL, description VARCHAR NOT NULL,likes NUMERIC DEFAULT 0, createdat DATE DEFAULT now(), bookid INTEGER REFERENCES books (id) NOT NULL);

INSERT INTO books (title, release, price, pagecount) VALUES ('Портрет Дориана Грея', '01.02.2022', '200','320');
