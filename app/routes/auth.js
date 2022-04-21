const express = require('express');
const router = express.Router();
const trimRequest = require('trim-request');
const { validateRegister } = require('./../controllers/auth/validators');
const { validateLogin } = require('./../controllers/auth/validators');
const { register } = require('../../app/controllers/auth');
const { login } = require('../../app/controllers/auth');

/*
*Auth Routes 
*/

//Register route
router.post('/register', trimRequest.all, validateRegister, register);

//Login route
router.post('/login', trimRequest.all, validateLogin, login);

module.exports = router;