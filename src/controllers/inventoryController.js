const Inventory = require("../models/Inventory");

module.exports = {
  // --- CREATE --- //

  async store(req, res) {
    const { name, costPrice, sellingPrice, quantity } = req.body;

    const Inventory = await Inventory.create({
      name,
      costPrice,
      sellingPrice,
      quantity
    });

    return res.json(Inventory);
  },

  // --- READ --- //

  async index(req, res) {
    const Inventory = await Inventory.find().sort("-createdAt");
    return res.json(Inventory);
  },

  // --- READ BY ID --- //

  async findById(req, res) {
    const Inventory = await Inventory.findById(req.params.id);
    return res.status(200).send(Inventory);
  },

  // --- UPDATE --- //

  async update(req, res) {
    const Inventory = await Inventory.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    return res
      .status(200)
      .send({ message: "Inventory successfully updated", Inventory });
  },

  // --- DELETE --- //

  async delete(req, res) {
    const Inventory = await Inventory.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .send({ message: "Inventory successfully deleted!", Inventory });
  }
};
