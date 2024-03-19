const express = require("express");
const judmentController = require("../controllers/judgmentController");

//middleware
const router = express.Router();

router.post("/saveJudgment", judmentController.judment);
router.route("/").get(judmentController.getAllJudgments);

// router.route("/").get(judmentController.getAllJudmen);

module.exports = router;
