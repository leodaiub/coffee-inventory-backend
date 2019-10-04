// --- IMPORTS --- //
const express = require("express");
const inventoryController = require("./controllers/inventoryController.js");
const salesController = require("./controllers/salesController.js");
//const moneyController = require("./controllers/moneyController.js");

const routes = new express.Router();

// ---- INVENTORY --- //
//CREATE NEW PRODUCT
routes.post("/products", inventoryController.store);
//GET ALL PRODUCTS ON INVENTORY
routes.get("/products", inventoryController.index);
//GET 1 PRODUCTS ON INVENTORY
routes.get("/products/:id", inventoryController.findById);
//EDIT PRODUCT
routes.put("/products/:id", inventoryController.update);
//DELETE PRODUCT
routes.delete("/products/:id", inventoryController.delete);
//DELETE ALL PRODUCT
routes.delete("/products", inventoryController.deleteAll);

// ---- SALES ---- //
//CREATE NEW SALE
routes.post("/sales", salesController.store);
//GET ALL SALES
routes.get("/sales", salesController.index);
//GET 1 SALE
routes.get("/sales/:id", salesController.findById);
//EDIT SALE
routes.put("/sales/:id", salesController.update);
//DELETE SALE
routes.delete("/sales/:id", salesController.delete);
//DELETE ALL SALES
routes.delete("/sales", salesController.deleteAll);

// // ---- MONEY ---- //
// //CREATE NEW MONEY
// routes.post("/money", moneyController.store);
// //GET ALL MONEY
// routes.get("/money", moneyController.index);
// //EDIT MONEY
// routes.put("/money", moneyController.update);
// //DELETE MONEY
// routes.delete("/money", moneyController.delete);

// --- EXPORT --- //
module.exports = routes;
