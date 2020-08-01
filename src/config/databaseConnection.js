require('dotenv').config()
import mysql from 'mysql2'

/*** 
 * setting up the database credentials
 * ********/
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
})

//connecting to the database by just calling .connect()
connection.connect((error) => {
    //condition for handling connection errors
    if(error) throw error;
    console.log("Database connection active!")
})

// export our connection 
module.exports = connection