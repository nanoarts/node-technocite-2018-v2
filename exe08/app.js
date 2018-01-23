const express = require('express')  // besoin du module node express ( apres installation npm install )
const app = express()

const routes = require (`${process.cwd()}/routes`)  //index.js est comme index.html il est lu automatiquement tt fichier qui commence par index est lu auto

const hbs = require('express-hbs')

const bodyParser = require('body-parser')
const helpers = require('./helpers')

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

app.use('/', routes)  // quand tu as une url ( ttes les url : si une url commence ar /) vas dans routes

module.exports = app