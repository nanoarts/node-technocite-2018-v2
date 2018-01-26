const mongoose = require('mongoose')
const User = mongoose.model('User')
const promisify = require('es6-promisify')


exports.login = (req, res, next) => {
    res.render('login')
}


exports.registerForm = (req, res, next) => {
    res.render('register')
}


exports.validateRegister = (req, res, next) => {
    req.sanitizeBody('name')
    req.checkBody('name', 'Vous devez entrez un nom').notEmpty()
    req.checkBody('email', 'Vous devez entrez un email').isEmail()
    req.checkBody('password', 'Vous devez entrez un password').notEmpty()
    req.checkBody('password-confirm', 'Vous devez entrez un password').notEmpty()
    req.checkBody('password-confirm', 'Vous devez entrez le même password').equals(req.body.password)
    const errors = req.validationErrors()

    if (errors) {
        res.render('register', { 'error': errors })
    } else {
        next()
    }


}



exports.register = async (req, res, next) => {
    console.log('register')

    const user = await new User({
        email : req.body.email, 
        name:req.body.name
    })

    const register = promisify(User.register, User)
    await register(user,req.body.password)
    next()

}