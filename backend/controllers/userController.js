const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const Email = require("../utils/email");
const AppError = require("./../utils/appError");

exports.sendJudgment = catchAsync(async (req, res, next) => {
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
  // console.log(req.body);

  const requiredFields = [
    "court",
    "procedureAndNumber",
    "judgeName",
    "plaintiffs",
    "matter",
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

  try {
    await new Email({
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
    }).sendJudgment();

    res.status(200).json({
      status: "success",
      message: "message has been sent",
    });
  } catch (err) {
    return next(new AppError(err.message, 500));
  }
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    // status: "success",
    results: users.length,
    data: {
      users,
    },
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: user,
  });
});
