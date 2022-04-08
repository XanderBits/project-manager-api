/** culo teta*/
const express = require('express')
const router = express.Router()
const fs = require('fs')
const routesPath = `${__dirname}`
const { removeExtensionFromFile } = require('../middlewares/utils/removeExtensionFromFile')

// Loop routes path and loads every file as a route except this file and Auth route 
fs.readdirSync(routesPath).filter( (file) => {
    // Take filename and remove last part (extension)
    const routeFile = removeExtensionFromFile(file)

    return routeFile !== 'index' && routeFile !== 'auth'
        ? router.use(`${routeFile}`, require('./${routeFile}'))
        : ''
})

/*
 * Handle 404 error
 */
router.use('*', (req, res) => {
    res.status(404).json({
        errors: {
            msg: 'URL_NOT_FOUND'
        }
    })
})


module.exports = router 