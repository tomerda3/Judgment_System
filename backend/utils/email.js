const nodemailer = require("nodemailer");
const pug = require("pug");
const { convert } = require("html-to-text");

module.exports = class Email {
  constructor({
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
    email,
  }) {
    this.to = email;
    this.court = court;
    this.procedureAndNumber = procedureAndNumber;
    this.judgeName = judgeName;
    this.plaintiffs = plaintiffs;
    this.matter = matter;
    this.attorney = attorney;
    this.defendants = defendants;
    this.defendantAttorney = defendantAttorney;
    this.caseSummary = caseSummary;
    this.judgment = judgment;
    this.from = `JudgmentSystem<${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === "production") {
      // Sendgrid
      return nodemailer.createTransport({
        service: "SendGrid",
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD,
        },
      });
    } else {
      return nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
    }
  }

  async send(template, subject) {
    // 1) Render HTML based on template
    const html = pug.renderFile(`${__dirname}/../views/${template}.pug`, {
      court: this.court,
      procedureAndNumber: this.procedureAndNumber,
      judgeName: this.judgeName,
      plaintiffs: this.plaintiffs,
      matter: this.matter,
      attorney: this.attorney,
      defendants: this.defendants,
      defendantAttorney: this.defendantAttorney,
      caseSummary: this.caseSummary,
      judgment: this.judgment,
      subject,
    });

    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: convert(html),
    };

    // 3) create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendJudgment() {
    await this.send("judgmentEmail", "פסק הדין");
  }
};
