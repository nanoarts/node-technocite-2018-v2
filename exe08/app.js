const express = require('express')  // besoin du module node express ( apres installation npm install )
const app = express()

const routes = require (`${process.cwd()}/routes`)  //index.js est comme index.html il est lu automatiquement tt fichier qui commence par index est lu auto

const hbs = require('express-hbs')

const bodyParser = require('body-parser')
const helpers = require(`${process.cwd()}/helpers`)

const expressValidator = require('express-validator')

// for password : 
const cookieParser = require('cookie-parser')
const session = require('express-session')
const sessionStore = new session.MemoryStore
const passport = require('passport')
const mongoose = require('mongoose')

const User = mongoose.model('User')




//VIEWS ENGINE SETUP
app.engine('hbs', hbs.express4({
    partialsDir : [`${__dirname}/views/partials`],
    defaultLayout : `${__dirname}/views/layouts/main.hbs`
}))

app.set('view engine', 'hbs')
app.set('views',`${__dirname}/views`)



helpers.registerHelpers(hbs)

app.use(express.static(`${__dirname}/public`))  // les ele statics

//setup express to manage the raw request and turn them into usable prop of req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(expressValidator())
app.use(cookieParser('secret'))

app.use(session({
    cookie:{maxAge:60000},
    store:sessionStore,
    saveUninitialized:true,
    resave:true,
    secret:'secret'
}))

// init passport
passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
app.use(passport.initialize())
app.use(passport.session())
//validator



app.use(expressValidator())


app.use('/', routes)  // quand tu as une url ( ttes les url : si une url commence ar /) vas dans routes

module.exports = app