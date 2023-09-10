const { Router } = require("express");
const BooksRoute = require("./BooksRoute");
const ReviewsRoute = require("./ReviewsRoute");

const router = Router();

router.use("/books", BooksRoute);
router.use("/reviews", ReviewsRoute);

module.exports = router;
