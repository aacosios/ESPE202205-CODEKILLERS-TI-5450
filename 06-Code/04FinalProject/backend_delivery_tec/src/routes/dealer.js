const dealerController = require('../controller/dealer')
const express = require('express')

const router = express.Router()

router.post("/addedDealer", dealerController.addDealer)
router.get("/allDealers", dealerController.getDealers)
router.delete("/deletedDealer/:id", dealerController.deleteDealer)
router.put("/updatedDealer/:id", dealerController.updateDealer)

module.exports = router