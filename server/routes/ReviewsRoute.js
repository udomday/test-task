const { Router } = require("express");
const ReviewsController = require("../controllers/ReviewsController");

const router = new Router();

router.post("/", ReviewsController.create);
router.get("/", ReviewsController.getAll);
router.get("/:reviewId", ReviewsController.getOne);
router.put("/:reviewId", ReviewsController.update);
router.delete("/:reviewId", ReviewsController.delete);

module.exports = router;
