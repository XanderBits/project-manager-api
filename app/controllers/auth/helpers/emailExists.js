const User = require('../../../models/users');
const { buildErrorObject } = require('../../../middlewares/utils');

/**
 * Checks User model if user with an specific email exists
 * @param {string} email - user email
 */
const emailExists = (email = '') => {
    return new Promise((resolve, reject) => {
        User.findOne(
            {
                email
            },
            (err, item) => {
                if (err) {
                    return reject(buildErrorObject(422, err.message))
                }

                if (item) {
                    return reject(buildErrorObject(422, 'EMAIL_ALREADY_EXISTS'))
                }
                resolve(false)
            }
        )
    });
}

module.exports = { emailExists }