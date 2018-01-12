const http = require('http')                                // require de la biblio node js
const fs = require('fs')

const routes = [
    { url: '/', controller: 'home'},                        // quand il a rien dans url tu vas sur le home
    { url: '/about', controller: 'about' },                        // quand il a rien dans url tu vas sur le home
    { url: '/amis', controller: 'amis' }                        // quand il a rien dans url tu vas sur le home
    
]


const router = (req, res) => {
    let indexRoute = routes.findIndex(item => item.url === req.url)

    if (indexRoute !== -1) {
        require(`./routes/${routes[indexRoute].controller}`)(req,res)  // vers home.js dans routes/home.js avec la requete et la reponse
    } else {
        require('./routes/error')(req,res)
    }

}

//----------------------------
// creer un serveur local sur port 8000 :
//----------------------------

http.createServer(router).listen(8000, ()=> {
    console.log('server running and listening port 8000')
})


//END SERVER


// http.createServer((req, res) => {                              // create un serveur :  avec requete et reponse
//     console.log('we have received a request!!!!')
//     // res.end("hello")                                     // reponse qui s'arrete a la fin de la requete 

//     fs.readFile('templates/index.html', { encoding: 'utf-8' }, (err, data) => {  // tu lis le fichier
//         res.end(data)                                       //reponse qui s'arrete apres l'envoi de data
//     })

// }).listen(8000, () => {                                        // ecouter le port 8000
//     console.log('server running and listening port 8000')
// })