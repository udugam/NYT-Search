const router = require('express').Router()
const apiRoutes = require('./api')

//Use imported routes that have been exported from the ./api folder
//router.use('/api', apiRoutes) //Preprends '/api' to each exported route

router.use(function(req,res) {
    res.sendFile('../client/build/index.html')
})

module.exports = router