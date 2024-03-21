const Judgment = require("../models/judgmentModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Email = require("../utils/email");

exports.judment = catchAsync(async (req, res, next) => {
  let {
    court,
    procedureAndNumber,
    judgeName,
    plaintiffs,
    matter,
    attorney,
    defendants,
    defendantAttorney,
    caseSummary,
    judgment,
  } = req.body;

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

  const newJudment = await Judgment.create({
    judgmentID: req.body.judgmentID,
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

  // try {
  //   await new Email({
  //     court,
  //     procedureAndNumber,
  //     judgeName,
  //     plaintiffs,
  //     matter,
  //     attorney,
  //     defendants,
  //     defendantAttorney,
  //     caseSummary,
  //     judgment,
  //   }).sendJudgment();

  //   res.status(200).json({
  //     status: "success",
  //     message: "message has been sent",
  //   });
  // } catch (err) {
  //   return next(new AppError(err.message, 500));
  // }
});

exports.getAllJudgments = catchAsync(async (req, res, next) => {
  const judment = await Judgment.find();
  res.status(200).json({
    // status: "success",
    results: judment.length,
    data: {
      judment,
    },
  });
});

exports.deleteJudgment = catchAsync(async (req, res, next) => {
  const judment = await Judgment.findByIdAndDelete(req.params.id);

  console.log(judment);

  res.status(204).json({
    status: "success",
    data: null,
  });
});
