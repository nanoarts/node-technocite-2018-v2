const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const validator = require('validator')



const schema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true,
        validate:[validator.isEmail,'Adress email is wrong'],
        required:'wrong email or no email adress'
    },
    name : {
        type:String,
        trim:true,
        required:true
    }
})

schema.plugin(passportLocalMongoose,{usernameField:'email'})


module.exports = mongoose.model('User', schema)  