let getRegisterPage = (req, res) => {
    return res.render('register.ejs')
}
// export the registercontroller functions here below
module.exports = {
    getRegisterPage: getRegisterPage
}