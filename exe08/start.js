


// check if version of node installed is more then 7.5 else return an error --------------------------
const [major, minor] = process.versions.node.split('.').map(parseFloat)   //  split = tu split a chaque '.' et tu fais un array  avec major et minor je prend juste les deux prem valeurs (7.5.2) : 7 et 5
if (major < 7 || major === 7 && minor <= 5) {
    console.log('the node version of the server is too low for modern browser')
    throw ('the node version of the server is too low for modern browser')
}


//init dotenv var
require('dotenv').config({path:'.variables.env'})


//Launch Mongo connection ---------------------------
const mongoose = require('mongoose');
mongoose.Promise = global.Promise                                                       // mongo utilise des promise et pas des callback 
mongoose.connect(process.env.DB_HOST,(err)=>{                    //connexion avec la db portail via le fichier caché .variables.env ( pas envoye en github et caché)
    if(err) console.log('There is a problem with the db')
    console.log('Now connected with db : portail')
});    

// import all models ---------------------
require(`${process.cwd()}/models/Magasin`)
require(`${process.cwd()}/models/User`)


// Start our app if everything is allright and initialized  ----------------------
const app = require('./app')
app.set('port', process.env.PORT || 8000) //
const server = app.listen(app.get('port'), () => {
    // console.log(server)
    console.log(`express running - PORT ${server.address().port}`)
})

