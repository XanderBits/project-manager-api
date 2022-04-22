/**
 * Handles error and sends an error response to user
 * @param {Object} res - response object
 * @param {Object} err - error object
 */

const handleError = (res, err) => {
    const status = err.status || 500;

    res.status(status).json({   
        errors: {
        msg: err.message
        }
    })
}

module.exports = { handleError }