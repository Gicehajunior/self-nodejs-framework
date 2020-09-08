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
            let resultCheck = EmailCheck(user.email)
            console.log(resultCheck)
            
            if(!resultCheck){
                let salt = bcrypt.genSaltSync(10)
                let data = {
                    // username: user.username,
                    userEmail: user.email,
                    accPassword: bcrypt.hashSync(user.password, salt), 
                    avatar: "",
                    address: "",
                    county: "",
                    residence: "",
                    TelephoneNumber: "",
                    confirmation_number: "",
                    contact_confirmation_status: "",
                    created_at: "",
                    updated_at: ""
                }
                let sql = "INSERT INTO users set ?";
                connection.query(sql, data, (err, result) => {
                    if (err) throw err
                    console.log("1 record inserted")
                    resolve("1 record inserted")
                });
            }
            else{
                console.log("No record inserted")
                // alert(`${user.email} already exists on our database, please use another email!`)
                reject(`${user.email} already exists on our database, please use another email!`)
            }
        } catch (error) {
            reject(e)
        }
    })
}

/***********
 * checking whether the email being registered already exists on the system database.
 * if the email exists return true, else return false.
 */
let EmailCheck = (email) => {
    return new Promise((resolve, reject) => {
        try {
            let sql = "SELECT * FROM users WHERE userEmail=?";
            
            connection.query(sql, email, (err, rows) => {
                if (err) throw err
                
                if(rows.length > 0){
                    reject(true)
                }
                else{
                    reject(false)
                }
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




























