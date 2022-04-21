const User = require('../../../models/users');
const { itemNotFound  } = require('./itemNotFound');

const findUser = (email = '') => {
    return new Promise((resolve, reject) => {
        User.findOne(
            {
                email
            },async (err, item) => {
                try {
                    await itemNotFound(err, item, 'USER_DOES_NOT_EXIST')
                    resolve(item)
                }catch(error){
                    reject(error)
                }
            }
        )
    })
}

module.exports = { findUser }