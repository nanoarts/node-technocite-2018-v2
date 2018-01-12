

const http = require('http')
const fs = require('fs')


http.get ('http://www.mons.be', res => {
    res.setEncoding('utf-8')
    let body =''
    res.on('data',donnee=>{
        body += donnee
    })
    res.on('end',()=>{
        console.log('end')
        fs.writeFile('index.html',body,(err)=>{
            if (err) console.log(err)
            console.log('file generated')
        })
    })

})