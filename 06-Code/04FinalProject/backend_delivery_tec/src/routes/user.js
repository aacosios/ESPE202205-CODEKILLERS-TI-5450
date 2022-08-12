const UserController = require('../controller/user')
const express = require('express')

const router = express.Router()

router.post("/addedUser",UserController.addUser)
router.get("/allUsers", UserController.getUsers)
router.delete("/deletedUser/:id", UserController.deleteUser)
router.put("/updatedUser/:id", UserController.updateUser)

module.exports = router