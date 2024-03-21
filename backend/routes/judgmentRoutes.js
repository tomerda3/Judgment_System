const express = require("express");
const judmentController = require("../controllers/judgmentController");

const router = express.Router();

router.route("/").get(judmentController.getAllJudgments);
router.post("/saveJudgment", judmentController.judment);
router.patch("/editJudgment/:id", judmentController.editJudgment);

router
  .route("/:id")
  .get(judmentController.getJudgment)
  .delete(judmentController.deleteJudgment);

module.exports = router;
