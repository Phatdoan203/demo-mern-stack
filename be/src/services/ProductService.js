const Product = require('../model/product');

const GetProducts = async () => {
    try {
        const response = await Product.find({});
        return response;
    } catch (error) {
        console.log(error);
    }
};

const CreateProduct = async (data) => {
    try {
        const response = new Product(data);
        await response.save();
        
    } catch (error) {
        console.log(error);
    }
};

const UpdateProduct = async (id, product) =>  {
    try {
        const response = await Product.findByIdAndUpdate(id, product, { new: true });
        return response;
    } catch (error) {
        console.log(error);
    }
};

const DeleteProduct = async (id) => {
    try {
        const response = await Product.findByIdAndDelete(id);
        return response;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    GetProducts,
    CreateProduct,
    UpdateProduct,
    DeleteProduct
}