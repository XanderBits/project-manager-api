const express = require('express');
const router = express.Router();
const { register } = require('../../app/controllers/auth/register');
const { validateRegister } = require('./../controllers/auth/validators/validateRegister');
const trimRequest = require('trim-request');

/*
*Auth Routes 
*/

//Register route
router.post('/register', trimRequest.all, validateRegister, register);

module.exports = router;