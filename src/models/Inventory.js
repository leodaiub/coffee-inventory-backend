const { Schema, model } = require("mongoose");

const inventorySchema = new Schema(
  {
    name: String,
    costPrice: Number,
    sellingPrice: Number,
    quantity: Number
  },
  {
    timestamps: true,
    collection: "Inventory"
  }
);

module.exports = model("Inventory", inventorySchema);
