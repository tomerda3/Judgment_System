const express = require("express");
const judgmentController = require("../controllers/judgmentController");

const router = express.Router();

router.route("/").get(judgmentController.getAllJudgments);
router.post("/saveJudgment", judgmentController.judgment);
router.patch("/editJudgment/:id", judgmentController.editJudgment);

router
  .route("/:id")
  .get(judgmentController.getJudgment)
  .delete(judgmentController.deleteJudgment);

module.exports = router;
