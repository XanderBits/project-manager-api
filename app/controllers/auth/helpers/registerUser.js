const User = require('../../../models/users');
const { buildErrorObject } = require('../../../middlewares/utils');

/**  
* Register a new user in database
* @param {Object} req = request object 
*/ 

const registerUser = (req = {}) => {
    return new Promise((resolve,reject) => {
        const user = new User({
            name:       req.name,
            lastname:   req.lastname,
            email:      req.email,
            password:   req.password,
            role:       req.role
        })
        user.save((err, item) => {
            if(err){
                reject(buildErrorObject(422, err.message))
            }
            resolve(item)
        })
    })
}

module.exports = { registerUser }