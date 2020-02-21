const express = require('express')
const Router = express.Router()

// controller 
const UserController = require('../Controller/UserController')

Router.get('/',UserController.test)
Router.post('/create',UserController.saveData)
Router.get('/user',UserController.getData)

module.exports = Router