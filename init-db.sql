CREATE DATABASE testaskdb;
\connect testaskdb
CREATE TABLE books(id BIGSERIAL PRIMARY KEY, title VARCHAR NOT NULL, release DATE NOT NULL, price INTEGER NOT NULL, pagecount NUMERIC NOT NULL);
CREATE TABLE reviews(id BIGSERIAL PRIMARY KEY, login VARCHAR NOT NULL, description VARCHAR NOT NULL,likes NUMERIC DEFAULT 0, createdat DATE DEFAULT now(), bookid INTEGER REFERENCES books (id) ON DELETE CASCADE NOT NULL);
INSERT INTO books (title, release, price, pagecount) VALUES ('Отель Манифик', '01.12.2023', '554', '400');
INSERT INTO books (title, release, price, pagecount) VALUES ('Горячий снег', '10.05.1971', '915', '488');
INSERT INTO books (title, release, price, pagecount) VALUES ('Джейн Эйр', '10.05.1923', '550', '320');
INSERT INTO books (title, release, price, pagecount) VALUES ('Остров. Обезьяна и сущность. Гений и богиня', '12.02.1962', '979', '160');
INSERT INTO books (title, release, price, pagecount) VALUES ('Гадюка. Любовь', '12.05.1928', '563', '112');
INSERT INTO books (title, release, price, pagecount) VALUES ('На дне', '02.10.1984', '149', '448');
INSERT INTO books (title, release, price, pagecount) VALUES ('Страсти', '23.02.1976', '728', '352');
INSERT INTO books (title, release, price, pagecount) VALUES ('Приключения Шерлока Холмса', '01.03.1979', '728', '384');
INSERT INTO books (title, release, price, pagecount) VALUES ('Приключения Оливера Твиста', '10.05.1837', '480', '554');
INSERT INTO reviews (login, description, likes, bookid) VALUES ('Ashlee', 'Волшебная новинка от издательства Like Book уже у меня на полке) Оформление очень красивое. Обложка софт тач, позолоченные буквы, цветной срез. Такую книгу приятно просто держать в руках. Надеюсь, что сама история мне тоже понравится.', '1');
INSERT INTO reviews (login, description, likes, bookid) VALUES ('Lepin', 'Если бы вы объединили цирк, карнавал, мрак и торжественность, то вышла бы именно эта книга, и она шикарна! Блестящее и жуткое развлечение для тех, кто обожает магию, иллюзии и спектакли. Автор талантливо создает невероятную атмосферу отеля, которая ощущается как реальное место. Темп книги тоже идеален - не слишком медленный и не слишком быстрый. Рекомендую к прочтению!.', 10, '1');
INSERT INTO reviews (login, description, likes, bookid) VALUES ('Fsar', 'Волшебная и чарующая история. Страшная сказка для взрослых. По французски изящно и красиво.', 14, '1');
INSERT INTO reviews (login, description, likes, bookid) VALUES ('iscander', 'Здравствуйте. Здравствуйте все! Этот отзыв дань памяти тем, кому уже нельзя сказать слова, высказанные генералом Бессоновым при награждении орденами оставшихся в живых артиллеристов... Книга сильная, лично я читал её несколько раз.', 16, '2');
INSERT INTO reviews (login, description, likes, bookid) VALUES ('mentor1', 'Писатель Юрий Бондарев был непосредственным участником Великой Отечественный войны. Тем печальнее было узнать, что он не дожил до юбилейной даты дня Победы всего лишь чуть более одного месяца.', 32, '2');
INSERT INTO reviews (login, description, likes, bookid) VALUES ('zaikov', 'Повесть "Гадюка" - это первое произведение Алексея Николаевича Толстого, с которым я ознакомился. Прочитал и сразу захотелось высказаться. Эмоции захлестнули. Повесть захватила сразу, после первых прочитанных абзацев.', 12, '5');
INSERT INTO reviews (login, description, likes, bookid) VALUES ('alla012', 'Купила эту книгу большей частью из-за очаровавших меня иллюстраций. Потрясающие! Сразу решила освежить в памяти произведение. Тем более что такое издание просто приятно держать в руках.', 17, '5');
INSERT INTO reviews (login, description, likes, bookid) VALUES ('pappido', 'Гарри Поттер до того, как Гарри появился. Только воссозданный в чертогах Лондона Читается легко. Описания обычно пропускаю, но здесь они воссаздают чёткую картину и передают настроение произведения.', 48, '9');
INSERT INTO reviews (login, description, likes, bookid) VALUES ('kirllo', 'Прочитала буквально на днях. Книга большая, но читается на одном дыхании. Интересно переданы характеры, чувства и мысли главных героев, прекрасные описания, создающие определённую атмосферу.', 6, '9');
INSERT INTO reviews (login, description, likes, bookid) VALUES ('vansdi', 'Прекрасное произведение! Диккенс пишет о том, что он сам прекрасно знал и прошёл.', 2, '9');

