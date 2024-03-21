const mongoose = require("mongoose");

const judmentSchema = new mongoose.Schema({
  judgmentID: {
    type: String,
  },
  court: {
    type: String,
    required: [true, "נא למלא"],
  },
  procedureAndNumber: {
    type: String,
    required: [true, "נא למלא"],
  },
  judgeName: {
    type: String,
    required: [true, "נא למלא"],
  },
  matter: {
    type: String,
    required: [true, "נא למלא"],
  },
  plaintiffs: {
    type: String,
    required: [true, "נא למלא"],
  },
  attorney: {
    type: String,
    required: [true, "נא למלא"],
  },
  defendants: {
    type: String,
    required: [true, "נא למלא"],
  },
  defendantAttorney: {
    type: String,
    required: [true, "נא למלא"],
  },
  caseSummary: {
    type: String,
    required: [true, "נא למלא"],
  },
  judgment: {
    type: String,
    required: [true, "נא למלא"],
  },
});

const Judment = mongoose.model("Judment", judmentSchema);

module.exports = Judment;
