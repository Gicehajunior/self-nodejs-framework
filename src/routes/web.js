import express from 'express'
import registerController from '../controllers/registerController'
import loginController from '../controllers/loginController'

// initialize router object
let router = express.Router()


/*************************
 * Sets the routing methods of our application
 */
let initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        return res.render('home.ejs')
    })

    // register user page routes
    router.get('/register', registerController.getRegisterPage)
    router.post('/register-new-user', registerController.createNewUser)

    // login user page routes
    router.get('/login', loginController.getLoginPage)

    // home page routes
    return app.use('/', router)
}

// we need to export our routes by:
module.exports = initWebRoutes