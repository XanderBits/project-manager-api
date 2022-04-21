const { handleError } = require('../../middlewares/utils');
const { matchedData } = require('express-validator');
const { findUser } = require('../auth/helpers/findUser');
const { checkPassword } = require('../../middlewares/auth/checkPassword');
const { returnToken } = require('../../controllers/auth/helpers');
/**
 * Login function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */

const login = async (req, res) => {
    try{ 
        const data = matchedData(req)
        const user = await findUser(data.email)
        const isPasswordMatch = await checkPassword(data.password, user)
        if (!isPasswordMatch){
            return handleError(res, buildErrObject(409, 'WRONG_PASSWORD'))
        }else{
            res.status(200).json(await returnToken(user))
        }
    }catch (error) {
        handleError(res, error)
    }
}

module.exports = { login }


