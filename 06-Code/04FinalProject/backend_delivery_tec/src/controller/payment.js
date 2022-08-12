//Controller

const mongoose = require('mongoose')
const Pay = require('../models/payment')

const addPay = (req, res) => {
    let pay = new Pay({
        creditCard: req.body.creditCard,
        payEmail: req.body.payEmail,
    })
    pay.save((err,pay) => {
        err && res.status(500).send(err.message)
        res.status(200).json(pay)
        console.log(pay)
    })
}

const getPayments = (req, res) => {
    Pay.find((err, pays) => {
        err && res.status(500).send(err.message)
        res.status(200).json(pays)
    })
}

const updatePayment = (req, res) => {
    const{id} = req.params;
    const {creditCard, payEmail} = req.body;
    Pay.findOneAndUpdate({_id: id}, {creditCard, payEmail},(err,pay)=>{
        err && res.status(500).send(err.message)
        res.status(200).send(pay)
    })


}
const deletePayment = (req,res) => {
    const{id} = req.params;
    Pay.findOneAndDelete({_id: id},(err,pay)=>{
        err && res.status(500).send(err.message)
        res.status(200).send(pay)
    })
}

module.exports = {addPay, getPayments, deletePayment, updatePayment}