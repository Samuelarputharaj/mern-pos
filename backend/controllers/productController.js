const Product = require('../models/productModel');

// @desc Get all products
// @route GET /api/products
// @access Public
const getProducts = async (req, res) => {
    const products = await Product.find({});
    res.json(products);
};

// @desc Add a product
// @route POST /api/products
// @access Private
const addProduct = async (req, res) => {
    const { name, price, stock } = req.body;

    const product = new Product({
        name,
        price,
        stock,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
};

module.exports = { getProducts, addProduct };
