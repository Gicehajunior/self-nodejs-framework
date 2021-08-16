require('dotenv').config()
import express from 'express'
import viewEngine from './config/viewEngine'
import initWebRoutes from './routes/web'
import bodyParser from 'body-parser'

// initialize express object
let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// function call viewEngine(), exported
viewEngine(app)

// routing function call initWebRoutes(), exported
initWebRoutes(app)

/*** 
 * config our app to run on a port 
 * The port is set in the .env folder
 * *********/
let port = (process.env.PORT) ? process.env.PORT : 5000;

app.listen(port, (req, res) => {
    console.log(`The application is running on port ${port}`)
})