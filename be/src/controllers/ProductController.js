const { GetProducts, CreateProduct, UpdateProduct, DeleteProduct } = require('../services/ProductService')
const mongoose = require('mongoose');

const GetProductsController = async (req, res) => {
    try {
        const response = await GetProducts();
        return res.status(200).json({success: true, data: response});
    } catch (error) {
        console.log("error in fetching products:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
    }
}

const CreateProductController = async (req, res) => {
    try {
        const product = req.body;
        if (!product.name || !product.price || !product.image) {
            return res.status(400).json({ success: false, message: "Please provide all fields" });
        }
        const response = await CreateProduct(product)
        return res.status(201).json({success: true, data: response});
    } catch (error) {
        console.error("Error in Create product:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
    }
}

const UpdateProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const product = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ success: false, message: "Invalid Product Id" });
        }
        const response = await UpdateProduct(id, product, { new: true });
        return res.status(200).json({ success: true, data: response });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

const DeleteProductController = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ success: false, message: "Invalid Product Id" });
        }
        const response = await DeleteProduct(id);
        return res.status(204).json({ success: true, message: "Product deleted" });
    } catch (error) {
        console.log("error in deleting product:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
    }
}

module.exports = {
    GetProductsController,
    CreateProductController,
    UpdateProductController,
    DeleteProductController
}