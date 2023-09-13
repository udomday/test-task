const sequelize = require("../db");
const ApiError = require("../error/ApiError");
const { Reviews, Books } = require("../models/models");

class ReviewsController {
  async create(req, res, next) {
    try {
      const { login, description, bookid } = req.body;

      if (login && description && bookid) {
        const review = await sequelize.query(
          `INSERT INTO reviews (login, description, bookid) VALUES ('${login}', '${description}', '${bookid}') RETURNING *`,
          {
            type: sequelize.QueryTypes.SELECT,
          }
        );

        return res.json(review);
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
      const count = await sequelize.query(`SELECT * FROM reviews;`, {
        type: sequelize.QueryTypes.SELECT,
      });

      const reviews = await sequelize.query(
        `SELECT reviews.id, reviews.login, reviews.description, reviews.likes, reviews.createdat, books.title AS titlebook FROM reviews INNER JOIN books ON reviews.bookid = books.id ORDER BY reviews.id LIMIT ${limit} OFFSET ${offset}`,
        {
          type: sequelize.QueryTypes.SELECT,
        }
      );

      return res.json({ count: count.length, rows: reviews });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res, next) {
    try {
      const { reviewId } = req.params;
      const review = await Reviews.findOne({ where: { id: reviewId } });

      return review
        ? res.json(review)
        : next(ApiError.notFound("Рецензия не найдена"));
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async update(req, res, next) {
    try {
      const { reviewId } = req.params;
      const { login, description } = req.body;
      if (login && description) {
        await sequelize.query(
          `UPDATE reviews SET login = '${login}', description = '${description}' WHERE reviews.id = '${reviewId}' RETURNING *`,
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
      const { reviewId } = req.params;

      await sequelize.query(
        `DELETE FROM reviews WHERE reviews.id = '${reviewId}'`
      );

      return res.json({ message: "Рецензия успешно удалена" });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ReviewsController();
