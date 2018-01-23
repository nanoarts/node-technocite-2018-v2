const express = require('express')  // besoin du module node express ( apres installation npm install )
const app = express()


app.get('/', (req,res)=>{
    res.sendFile(`${process.cwd()}/views/home.html`)
}) 

app.get('/about', (req,res)=>{
    res.sendFile(`${process.cwd()}/views/about.html`)
}) 

app.get('/api/json', (req,res)=>{
    res.sendFile(`${process.cwd()}/views/data.json`)
}) 

//----------------------------
// creer un serveur local sur port 8000 :
//----------------------------

// NORMAL : ----
// http.createServer(router).listen(8000, (err)=> {
//     if (err) throw err
//     console.log('server running and listening port 8000')
// })


// EXPRESS : ----
app.listen(8000)