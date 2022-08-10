//Controller

const { json } = require('express')
const mongoose = require('mongoose')
const Product = require('../models/product')

const addProduct = (req, res) => {
    let product = new Product({
        productName: req.body.productName,
        productBrand: req.body.productBrand,
        productPrice: req.body.productPrice,
        productQuantity: req.body.productQuantity,
        productDescription: req.body.productDescription,
    })
    product.save((err,pc) => {
        err && res.status(500).send(err.message)
        res.status(200).json(pc)
        console.log(pc)
    })
}



const getAll = (req, res) => {
    Product.find((err, products) => {
        res.status(200).json(products)
        err && res.status(500).send(err.message)
    })
}

const findProduct = (req, res) => {
    Product.find((err, products) => {
        err && res.status(500).send(err.message)
        const newProductArray= convert(products)
        res.status(200).json(newProductArray)
    })
   
}

const updateProduct = (req,res) => {
    const {id} = req.params;
    const {productName, productBrand, productPrice, productQuantity, productDescription} = req.body;

    Product.findOneAndUpdate({_id:id}, {productName, productBrand, productPrice, productQuantity, productDescription}, (err,product)=>{
        err && res.status(500).send(err.message)
        res.status(200).send(product)
    })

}


const deleteProduct = (req,res) => {
    const{id} = req.params;
    Product.findOneAndDelete({_id: id},(err,product)=>{
        err && res.status(500).send(err.message)
        res.status(200).send(product)
    })
}


const convert = (array) => {
    const newArray = []
    array.map(a =>
        newArray.push({productName:a.productName, productQuantity: a.productQuantity, productPrice: a.productPrice, subtotal: a.productPrice, iva: calculateIva(a.productPrice), total: calculateTotal(a.productPrice), totalQuantity: calculateQ(a.productPrice, a.productQuantity)})
    )
    return newArray
}

const getSold = (req, res) => {
    Product.find({productName: req.body.productName}, (err, products) => {
        err && res.status(500).send(err.message)
        const newProductArray= convert(products)
        res.status(200).json(newProductArray)
    })
   
}


const calculateIva = (mount) => {
    return mount*0.12
}


const calculateTotal = (mount) => {

    return calculateIva(mount) + mount
}

const calculateQ = (mount, cant) => {
    return calculateTotal(mount) * cant
}


module.exports = {addProduct, findProduct, deleteProduct, getAll, getSold, updateProduct}