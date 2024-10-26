const express = require('express');
const { GetProductsController, CreateProductController, UpdateProductController, DeleteProductController } = require('../controllers/ProductController');

const router = express.Router();

router.get("/", GetProductsController);
router.post("/", CreateProductController);
router.put("/:id", UpdateProductController);
router.delete("/:id", DeleteProductController);

module.exports = router;