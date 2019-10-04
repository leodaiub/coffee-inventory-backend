const Sale = require("../models/Sale");
const Item = require("../models/Inventory");

module.exports = {
  // --- CREATE --- //

  async store(req, res) {
    let { item, price, itemName, quantity } = req.body;

    const itens = await Item.findByIdAndUpdate(item, {
      $inc: { quantity: -quantity }
    });

    const name = await Item.findById(item, "name sellingPrice").exec();
    itemName = name.name;
    price = name.sellingPrice;

    const sale = await Sale.create({
      item,
      price,
      itemName,
      quantity
    });

    return res.json(sale);
  },

  // --- READ --- //

  async index(req, res) {
    const sale = await Sale.find().sort("-createdAt");
    return res.json(sale);
  },

  // --- READ BY ID --- //

  async findById(req, res) {
    const sale = await Sale.findById(req.params.id);
    return res.status(200).send(sale);
  },

  // --- UPDATE --- //

  async update(req, res) {
    const sale = await Sale.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).send({ message: "sale successfully updated", sale });
  },

  // --- DELETE --- //

  async delete(req, res) {
    const sale = await Sale.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .send({ message: "sale successfully deleted!", sale });
  },

  // --- DELETE all --- //

  async deleteAll(req, res) {
    const sale = await Sale.deleteMany({});
    return res
      .status(200)
      .send({ message: "sale successfully deleted!", sale });
  }
};
