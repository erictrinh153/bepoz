const router = require("express").Router();
const verify = require("../verifyToken");
const Categories = require("../models/Categories");
const Products = require("../models/Products");
const { response } = require("express");

//Get Categories
router.get("/categories", verify , async(req, res) => {
        const categoriesData = await Categories.find();
        res.status(200).json(categoriesData);
})

module.exports = router;

//Get Products by Category ID 
router.get("/categories/:id/products", verify , async(req, res) => {
        const ObjectId = require('mongoose').Types.ObjectId;
        const query = { category: new ObjectId(req.params.id) };
        const productsData = await Products.find(query);
        res.status(200).json(productsData);
})
