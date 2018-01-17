const fs = require('fs')

module.exports = (req, res) => {
    fs.readFile(`${process.cwd()}/public/friends.json`,{encoding:'utf-8'}, (err,json) => {
        if(err) {
            // console.log(json)
            res.writeHead(500,{'Content-Type': 'text/html'})
            res.end('The server has a problem please try later')
        } else {
            fs.readFile(`${process.cwd()}/templates/amis.html`,{encoding:'utf-8'}, (err,data) => {
                if(err) {
                    res.writeHead(404,{'Content-Type': 'text/html'})
                    res.end('No found')
                } else {
                    res.end(generateHtml(data,json))
                }
                
            })
        }
        
        
    })  
}

const generateHtml = (tpl,json) => {
    // console.log(json)               // il l'import comme du string 
    // let values = JSON.parse(json)   // JSON.parse prend le texte et le converti en array
    // console.log(values)
    // let tempArr = values.map(item => item.name)  // je recupere que les noms de l'array values generer au dessus
    // console.log(tempArr)
    // let tempStr = tempArr.join('</li><li>')
    // console.log(tempStr)
    // let htmlStr = tpl.replace('%friends%',tempStr)
    // console.log(htmlStr)
    // return htmlStr
    
    // la meme chose mais en raccourcis
    return tpl.replace('%friends%', JSON.parse(json).map(item => item.name).join('</li><li>'))  // la meme chose qu'au dessus en raccourcis 
}