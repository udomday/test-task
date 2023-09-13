CREATE DATABASE testaskdb;
\connect testaskdb
CREATE TABLE books(id BIGSERIAL PRIMARY KEY, title VARCHAR NOT NULL, release DATE NOT NULL, price INTEGER NOT NULL, pagecount NUMERIC NOT NULL);
CREATE TABLE reviews(id BIGSERIAL PRIMARY KEY, login VARCHAR NOT NULL, description VARCHAR NOT NULL,likes NUMERIC DEFAULT 0, createdat DATE DEFAULT now(), bookid INTEGER REFERENCES books (id) ON DELETE CASCADE NOT NULL);
INSERT INTO books (title, release, price, pagecount) VALUES ('Отель Манифик', '01.12.2023', '554', '400');
INSERT INTO reviews (login, description, bookid) VALUES ('Ashlee', 'Волшебная новинка от издательства Like Book уже у меня на полке) Оформление очень красивое. Обложка софт тач, позолоченные буквы, цветной срез. Такую книгу приятно просто держать в руках. Надеюсь, что сама история мне тоже понравится.', '1');
INSERT INTO reviews (login, description, bookid) VALUES ('Lepin', 'Если бы вы объединили цирк, карнавал, мрак и торжественность, то вышла бы именно эта книга, и она шикарна! Блестящее и жуткое развлечение для тех, кто обожает магию, иллюзии и спектакли. Автор талантливо создает невероятную атмосферу отеля, которая ощущается как реальное место. Темп книги тоже идеален - не слишком медленный и не слишком быстрый. Рекомендую к прочтению!.', '1');
INSERT INTO reviews (login, description, bookid) VALUES ('Fsar', 'Волшебная и чарующая история. Страшная сказка для взрослых. По французски изящно и красиво.', '1');
INSERT INTO books (title, release, price, pagecount) VALUES ('Горячий снег', '10.05.1971', '915', '488');
INSERT INTO reviews (login, description, bookid) VALUES ('iscander', 'Здравствуйте. Здравствуйте все! Этот отзыв дань памяти тем, кому уже нельзя сказать слова, высказанные генералом Бессоновым при награждении орденами оставшихся в живых артиллеристов... Книга сильная, лично я читал её несколько раз.', '2');
INSERT INTO reviews (login, description, bookid) VALUES ('mentor1', 'Писатель Юрий Бондарев был непосредственным участником Великой Отечественный войны. Тем печальнее было узнать, что он не дожил до юбилейной даты дня Победы всего лишь чуть более одного месяца.', '2');

