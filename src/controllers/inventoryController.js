const Inventory = require("../models/Inventory");

module.exports = {
  // --- CREATE --- //

  async store(req, res) {
    const { name, costPrice, sellingPrice, quantity } = req.body;

    const inventory = await Inventory.create({
      name,
      costPrice,
      sellingPrice,
      quantity
    });

    return res.json(inventory);
  },

  // --- READ --- //

  async index(req, res) {
    const inventory = await Inventory.find().sort("-createdAt");
    return res.json(inventory);
  },

  // --- READ BY ID --- //

  async findById(req, res) {
    const inventory = await Inventory.findById(req.params.id);
    return res.status(200).send(inventory);
  },

  // --- UPDATE --- //

  async update(req, res) {
    const inventory = await Inventory.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    return res
      .status(200)
      .send({ message: "Inventory successfully updated", inventory });
  },

  // --- DELETE --- //

  async delete(req, res) {
    const inventory = await Inventory.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .send({ message: "Inventory successfully deleted!", inventory });
  }
};
