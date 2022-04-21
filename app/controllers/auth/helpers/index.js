const { emailExists } = require('./emailExists'); 
const { findUser } = require('./findUser'); 
const { generateToken } = require('./generateToken'); 
const { registerUser } = require('./registerUser'); 
const { returnToken } = require('./returnToken');
const { setUserInfo } = require('./setUserInfo');

module.exports = {
    emailExists,
    findUser,
    generateToken,
    registerUser,
    returnToken,
    setUserInfo
}