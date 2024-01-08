const express = require('express');
const { Product } = require('../models');

const index = async (req, res) => {
    try {
        let allProducts = await Product.find();
        res.json(allProducts);
    } catch (err) {
        console.error(err);
    }
}

const indexByCategory = async (req, res) => {
    try {
        let foundCategory = await Product.find({ category: { $eq: req.params.category } });
        res.json(foundCategory);
    } catch (err) {
        console.error(err);
    }
}

const show = async (req, res) => {
    try {
        let foundProduct = await Product.findById(req.params.id);
        res.json(foundProduct);
    } catch (err) {
        console.error(err);
    }
}

const create = async (req, res) => {
    try {
        let newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (err) {
        console.error(err);
    }
}

const update = async (req, res) => {
    try {
        let updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedProduct);
    } catch (err) {
        console.error(err);
    }
}

const destroy = async (req, res) => {
    try {
        let deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.json(deletedProduct);
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    index,
    indexByCategory,
    show,
    create,
    update,
    destroy
}