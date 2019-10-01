const { Schema, model } = require("mongoose");

const moneySchema = new Schema(
  {
    debit,
    credit,
    amount
  },
  {
    timestamps: true,
    collection: "Money"
  }
);

module.exports = model("Money", moneySchema);
