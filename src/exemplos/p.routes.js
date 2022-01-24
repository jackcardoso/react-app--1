module.exports = (app) => {
  const products = require("./p-controller.js");

  var router = require("express").Router();

  router.get("/", products.getProducts);

  app.use("/products", router);
};