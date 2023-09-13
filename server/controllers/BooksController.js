const sequelize = require("../db");
const ApiError = require("../error/ApiError");
const { Books } = require("../models/models");

class BooksController {
  async create(req, res, next) {
    try {
      const { title, release, price, pageCount } = req.body;
      if (title && release && price && pageCount) {
        const book = await sequelize.query(
          `INSERT INTO books (title, release, price, pagecount) VALUES ('${title}', '${release}', '${price}','${pageCount}') RETURNING *`,
          {
            type: sequelize.QueryTypes.SELECT,
          }
        );

        return res.json(book);
      }

      next(ApiError.badRequest("Неправильно заполнены данные"));
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const { offset, limit } = req.query;

      if (!offset || !limit) {
        return next(
          ApiError.badRequest("Необходимо ввести параметры limit и page")
        );
      }

      const books = await Books.findAndCountAll({
        offset: offset,
        limit: limit,
        subQuery: false,
      });
      return res.json(books);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res, next) {
    try {
      const { bookId } = req.params;
      const book = await Books.findOne({ where: { id: bookId } });

      return book
        ? res.json(book)
        : next(ApiError.notFound("Книга не найдена"));
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async update(req, res, next) {
    try {
      const { bookId } = req.params;
      const { title, release, price, pageCount } = req.body;

      if (title && release && price && pageCount) {
        await sequelize.query(
          `UPDATE books SET title = '${title}', release = '${release}', price = '${price}', pagecount = '${pageCount}' WHERE books.id = '${bookId}' RETURNING *`,
          {
            type: sequelize.QueryTypes.SELECT,
          }
        );

        return res.json({ message: "Объект успешно обновлен" });
      }

      next(ApiError.badRequest("Неправильно заполнены данные"));
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async delete(req, res, next) {
    try {
      const { bookId } = req.params;

      await sequelize.query(`DELETE FROM books WHERE books.id = '${bookId}'`);

      return res.json({ message: "Книга успешно удалена" });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new BooksController();
