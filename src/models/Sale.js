const { Schema, model } = require("mongoose");

const saleSchema = new Schema(
  {
    item: [
      {
        type: Schema.Types.ObjectId,
        ref: "Inventory"
      }
    ],
    price: Number
  },
  {
    timestamps: true,
    collection: "Sales"
  }
);

module.exports = model("Sale", inventorySchema);
