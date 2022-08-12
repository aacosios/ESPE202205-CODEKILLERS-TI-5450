//Controller

const mongoose = require('mongoose')
const User = require('../models/user')

const addUser = (req, res) => {
    let user = new User({
        userName: req.body.userName,
        userAddress: req.body.userAddress,
        userPhone: req.body.userPhone,
        userEmail: req.body.userEmail,
    })
    user.save((err,usr) => {
        err && res.status(500).send(err.message)
        res.status(200).json(usr)
        console.log(usr)
    })
}

const getUsers = (req, res) => {
    User.find((err, users) => {
        err && res.status(500).send(err.message)
        res.status(200).json(users)
    })
}

const updateUser = (req, res) => {
    const {id} = req.params;
    const { userName, userAddress, userPhone, userEmail} = req.body;
    User.findByIdAndUpdate({_id: id}, {userName, userAddress, userPhone, userEmail}, (err, user) => {
        err & res.status(500).send(err.message)
        res.status(200).send(user)
    })
}

const deleteUser = (req,res) => {
    const{id} = req.params;
    User.findOneAndDelete({_id: id},(err,user)=>{
        err && res.status(500).send(err.message)
        res.status(200).send(user)
    })
}

module.exports = {addUser, getUsers, deleteUser, updateUser}
