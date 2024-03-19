const Judment = require("../models/judgmentModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.judment = catchAsync(async (req, res, next) => {
  console.log(req.body);
  //   Check if any of the required fields are empty
  const requiredFields = [
    "court",
    "procedureAndNumber",
    "judgeName",
    "matter",
    "plaintiffs",
    "attorney",
    "defendants",
    "defendantAttorney",
    "caseSummary",
    "judgment",
  ];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      return next(new AppError("יש למלא את כל השדות", 400));
    }
  }

  const newJudment = await Judment.create({
    court: req.body.court,
    procedureAndNumber: req.body.procedureAndNumber,
    judgeName: req.body.judgeName,
    matter: req.body.matter,
    plaintiffs: req.body.plaintiffs,
    attorney: req.body.attorney,
    defendants: req.body.defendants,
    defendantAttorney: req.body.defendantAttorney,
    caseSummary: req.body.caseSummary,
    judgment: req.body.judgment,
  });

  res.status(200).json({
    status: "success",
    data: {
      newJudment,
    },
  });
});

exports.getAllJudgments = catchAsync(async (req, res, next) => {
  const judment = await Judment.find();
  res.status(200).json({
    // status: "success",
    results: judment.length,
    data: {
      judment,
    },
  });
});
