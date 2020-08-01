import express from "express"

/************************** 
Express looks up the files in the order in which you set the static directories with the express.static middleware
function.
the express sets the engine to use, in this case the view engine used here is ejs
the express sets the views src path
******************************************/
let configViewEngine = (app) => {
    app.use(express.static("./src/public")) 
    app.set("view engine", "ejs") 
    app.set("views", "./src/views") 

}

// export our module configViewEngine
module.exports = configViewEngine