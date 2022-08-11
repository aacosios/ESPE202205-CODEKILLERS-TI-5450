//Controller

const mongoose = require('mongoose')
const Dealer = require('../models/dealer')

const addDealer = (req, res) => {
    let dealer = new Dealer({
        dealerName: req.body.dealerName,
        dealerID: req.body.dealerID,
        dealerPhone: req.body.dealerPhone,
        dealerEmail: req.body.dealerEmail,
        dealerVehicle : req.body.dealerVehicle
    })
    dealer.save((err,dlr) => {
        err && res.status(500).send(err.message)
        res.status(200).json(dlr)
        console.log(dlr)
    })
}

const getDealers = (req, res) => {
    Dealer.find((err, dealers) => {
        err && res.status(500).send(err.message)
        res.status(200).json(dealers)
    })
}

const deleteDealer = (req,res) => {
    const{id} = req.params;
    Dealer.findOneAndDelete({_id: id},(err,dealer)=>{
        err && res.status(500).send(err.message)
        res.status(200).send(dealer)
    })
}

const updateDealer = (req,res) => {
    const{id} = req.params;
    const{dealerName, dealerID, dealerPhone, dealerEmail, dealerVehicle} = req.body;
    Dealer
    .findOneAndUpdate({_id: id} , {dealerName, dealerID, dealerPhone, dealerEmail, dealerVehicle}, (err,deler)=>{
        err && res.status(500).send(err.message)
        res.status(200).send(deler)
    })
}

module.exports = {addDealer, getDealers, deleteDealer, updateDealer}