const express = require("express");
const judmentController = require("../controllers/judgmentController");

const router = express.Router();

router.route("/").get(judmentController.getAllJudgments);
router.post("/saveJudgment", judmentController.judment);
router.delete("/:id", judmentController.deleteJudgment);

module.exports = router;
