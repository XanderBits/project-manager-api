const { matchedData } = require('express-validator')
const { handleError } = require('../../middlewares/utils/handleError')
const { registerUser } = require('../../../app/controllers/auth/helpers/registerUser')
const { emailExists } = require('../../../app/controllers/auth/helpers/emailExists')

/**
 * Register function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */

const register = async (req, res) => {
    try {
        req = matchedData(req)
        const doesEmailExists = await emailExists(req.email)
        if (!doesEmailExists) {
        const item = await registerUser(req)
        res.status(201).json(item)
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { register }