import connection from '../config/databaseConnection'
import bcrypt from  'bcryptjs'

/***********
 * Registration of users happens here in this service.
 * 
 * hashing the password using bcrypt
 * querying the database by insertion query
 */
let createNewUser = (user) => {
    return new Promise((resolve, reject) => {
        try {
            let salt = bcrypt.genSaltSync(10)
            let data = {
                username: user.username,
                email: user.email,
                password: bcrypt.hashSync(user.password, salt),
            };
            connection.query("INSERT INTO users set ?", data, (error, rows) => {
                if(error) reject(error)
                resolve(value, 'Registered a new user successfully')
            })
        } catch (error) {
            reject(e)
        }
    })
}


// export the modules
module.exports = {
    createNewUser: createNewUser
}




























