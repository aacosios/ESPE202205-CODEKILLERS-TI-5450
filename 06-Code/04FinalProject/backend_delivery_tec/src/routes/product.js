const ProductController = require('../controller/product')
const express = require('express')

const router = express.Router()

router.post("/addedProduct",ProductController.addProduct)
router.get("/allProducts", ProductController.getAll)
router.delete("/deletedProduct/:id", ProductController.deleteProduct)
router.post("/productSold", ProductController.findProduct)
router.get("/productSold", ProductController.findProduct)
router.put("/updatedProducts/:id", ProductController.updateProduct)

module.exports = router