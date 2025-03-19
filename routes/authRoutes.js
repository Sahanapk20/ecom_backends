const express = require('express');
const { signup, login } = require('../controllers/authController');

const cartrouter=express.Router()

cartrouter.post("/signup",signup)
cartrouter.post("/login",login)

module.exports=cartrouter 