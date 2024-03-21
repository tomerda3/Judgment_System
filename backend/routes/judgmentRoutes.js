const express = require("express");
const judmentController = require("../controllers/judgmentController");

//middleware
const router = express.Router();

router.route("/").get(judmentController.getAllJudgments);
router.post("/saveJudgment", judmentController.judment);

module.exports = router;
