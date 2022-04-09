const User = require('../../../models/users');
const { buildErrObject } = require('../../../middlewares/utils/buildErrorObject');

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
                reject(buildErrObject(422, err.message))
            }
            resolve(item)
        })
    })
}

module.exports = { registerUser }