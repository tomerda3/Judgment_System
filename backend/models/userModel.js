const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "נא למלא שם פרטי."],
  },
  lastName: {
    type: String,
    required: [true, "נא למלא שם משפחה."],
  },
  email: {
    type: String,
    required: [true, "אנא ספק אימייל."],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "אנא ספק אימייל חוקי."],
  },
  password: {
    type: String,
    required: [true, "נא להזין סיסמה."],
    minlength: [6, "הסיסמה חייבת להכיל לפחות 6 תווים."],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "נא להזין אישור סיסמה."],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function (el) {
        return el === this.password;
      },
      message: "סיסמאות לא תואמות.",
    },
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  // False means NOT changed
  return false;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
