/**
 * Handles error and sends an error response to user
 * @param {Object} res - response object
 * @param {Object} err - error object
 */

const handleError = (res, err) => {
    res.status(err.code).json({
        errors: {
        msg: err.message
        }
    })
}

module.exports = { handleError }