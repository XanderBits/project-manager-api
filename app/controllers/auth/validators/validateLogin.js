const { validateResult } = require('../../../middlewares/utils');
const { check } = require('express-validator');

/**
 * Validates login request
 */
const validateLogin = [
    check('email')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .isEmail()
    .withMessage('EMAIL_IS_NOT_VALID'),
    check('password')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .isLength({
        min: 8
    })
    .withMessage('PASSWORD_TOO_SHORT_MIN_8'),
    (req, res, next) => {
    validateResult(req, res, next)
    }
]

module.exports = { validateLogin }