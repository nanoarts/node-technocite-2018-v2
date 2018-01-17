const http = require('http')  // vu qu'on fait un serveur

const routes = [
    { url: '/', controller: 'home'},                // "/" = home et controller home = home/js                
    { url: '/api/books', controller: 'books' }      // vers le json                      
  
]


const router = (req,res) => {
    let routeIndex = routes.findIndex((item)=> item.url === req.url)   // la var routeIndex = 0 1 si il y a une requete d'adresse qui est = a / ( pour home ) ou /api/books
    if (routeIndex !== -1) {  // donc si y a une requet differente de -1 donc qui contient 0 ou 1 ( ligne au dessus)
        require(`${process.cwd()}/controllers/${routes[routeIndex].controller}`) (req,res)  // alors on prend le chemin qui correspond (0 ou 1) et son controller correspondant donc "home ou "books" et on envoi 
    }
}







//----------------------------
// creer un serveur local sur port 8000 :
//----------------------------

http.createServer(router).listen(8000, (err)=> {
    if (err) throw err
    console.log('server running and listening port 8000')
})

