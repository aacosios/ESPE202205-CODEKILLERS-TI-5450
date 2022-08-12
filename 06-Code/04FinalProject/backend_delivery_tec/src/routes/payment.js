const payController = require('../controller/payment')
const express = require('express')

const router = express.Router()

router.post("/addedPay",payController.addPay)
router.get("/allPayments", payController.getPayments)
router.delete("/deletedPay/:id", payController.deletePayment)
router.put("/updatedPay/:id", payController.updatePayment)

module.exports = router