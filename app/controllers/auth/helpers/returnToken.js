const { setUserInfo } = require('./setUserInfo');
const { generateToken } = require('./generateToken');

/**
 * Return token with user object info
 * @param {Object} req - request object
 * @param {Object} user - user object
 */

const returnToken = (user = {}) => {
    return new Promise((resolve,reject) => {
        try{
            const userInfo = await setUserInfo(user)
            resolve({
                token : generateToken(user._id),
                user : userInfo
            })
        }catch (error){
            reject(error)
        }
    })
}

module.exports = { returnToken }