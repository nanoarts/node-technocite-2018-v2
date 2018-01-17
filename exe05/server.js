
const fs = require('fs')

// fs.readFile(`${process.cwd()}/datas/file1.txt`, (err, data) => {   // process cwd = 
//     let allData = ''
//     allData += data
//     fs.readFile(`${process.cwd()}/datas/file2.txt`, (err, data) => {
//         allData += data
//         console.log(allData)
//     })
// })


// une var qui instance une fonction  :  LES PROMISE :
const readFile = (file) => {
    return new Promise((resolve, reject) => {   // ECRITURE D'UNE PROMISE
        fs.readFile(file, { encoding: 'utf-8' }, (err, data) => {
            if (err) reject(err)
            resolve(data)  // .then  le reject est le catch
        })


    })

}

// readFile(`${process.cwd()}/datas/file1.txt`)
//     .then(data => {
//         console.log(data)
//         readFile(`${process.cwd()}/datas/file2.txt`)
//             .then(data => {
//                 console.log(data)
//             }).catch(err => {
//                 console.log(err)
//             })
//     })



// let promise1 = readFile(`${process.cwd()}/datas/file1.txt`)

// let promise2 = readFile(`${process.cwd()}/datas/file2.txt`)

// let promisesArr = [promise1,promise2]

// Promise.all(promisesArr).then(results=>{
//     console.log(results)

// }).catch(err =>{
//     console.log(err)
// })



Promise.all([readFile(`${process.cwd()}/datas/file1.txt`), readFile(`${process.cwd()}/datas/file2.txt`)])
    .then(results => {
        console.log(results[0] + results[1])
        console.log(results)

    }).catch(err => {
        console.log(err)

    })


