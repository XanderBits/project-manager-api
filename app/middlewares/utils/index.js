const { buildErrorObject } = require('./buildErrorObject')
const { handleError } = require('./handleError')
const { removeExtensionFromFile } = require('./removeExtensionFromFile')
const { validateResult } = require('./validateResult')

module.exports = { 
    buildErrorObject,
    handleError,
    removeExtensionFromFile,
    validateResult
}