const { validateResult } = require('../../../middlewares/utils/validateResult');
const { check } = require('express-validator');

/**
 * Validates register request
 */

const validateRegister = [
    check('name')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
    check('lastname')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
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

module.exports = { validateRegister }