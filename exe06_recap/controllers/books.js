const fs = require('fs')
const promisify = require('es6-promisify')

const read = promisify(fs.readFile)

module.exports = (req, res) => {
    let templatePromise = read(`${process.cwd()}/models/books.json`)   // lire le json dans models ( et le chemin relatif avec process.cwd)
    templatePromise.then(json=>{
        res.setHeader('Content-type', 'application/json')
        res.end(json)  
    }).catch(e =>{
        console.log(e)
    })
}


