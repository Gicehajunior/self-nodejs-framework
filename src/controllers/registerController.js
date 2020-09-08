import register_service from '../services/register_service'

// renders the register page
let getRegisterPage = (req, res) => {
    return res.render('register.ejs')
}



/**********
 * get submitted data by the user.
 * register a new service 
 */
let createNewUser = async(req, res) => {
    try {
        
        let data = {
          // get all requests sent by the user
            username: req.body.userUid,
            email: req.body.emailUid,
            password: req.body.password,
        }
        
        await register_service.createNewUser(data)

        return res.status(200).json({
            message: 'User registered successfully',
        })
    } catch (error) {
        return res.status(500).json(error)
    }
}






// export the registercontroller functions here below
module.exports = {
    getRegisterPage: getRegisterPage,
    createNewUser: createNewUser
}