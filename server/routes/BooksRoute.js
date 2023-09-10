const { Router } = require("express");
const BooksController = require("../controllers/BooksController");

const router = Router();

router.post("/", BooksController.create);
router.get("/", BooksController.getAll);
router.get("/:bookId", BooksController.getOne);
router.put("/:bookId", BooksController.update);
router.delete("/:bookId", BooksController.delete);

module.exports = router;
