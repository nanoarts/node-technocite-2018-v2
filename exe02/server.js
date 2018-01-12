

// const fs = require('fs')
// fs.readFile(`${process.cwd()}/liste.txt`,{encoding:'utf8'}, (err,data)=>{
//     if (err) throw err  //throw arrete l'execution de node 
//     console.log(data)
// })

const fs = require('fs')

function readFile(url, cb){
    fs.readFile(url,{encoding:'utf-8'},(err,data)=>{
        if(err) throw err
        cb(data)
    })
}

function showMsg(data) {
    console.log(data)
}

readFile('liste.txt', showMsg)

// console.log (__dirname)  // donne moi le repertoire dans lequel ce fichier est
// console.log (process.cwd()) // donne moi le repertoire ou node s'execute command working directory




//----------------------------------------
// je rajoute dans le terminal, par exemple :  node server.js add TEST

const [action, value] = [process.argv[2],process.argv[3]]  // donc si j'ai mis add test  add remplace action et test = value

const possibleActions = ['add', 'remove']  // on crée une var en disant : on peut avoir que "add" ou "remove"
const fileMger = require ('./tpk/fileManager')
const checkActions = (action) => { 
    return possibleActions.filter(item => item === action).length > 0  // on compare dans possible actions ( add remove) si c'est === a dans la var action à add et donc que c'est 1
}

const checkValue = (value) => (value) ? true : false  // ici c'est value la function dit si il y a une value if(value) ici y a test tu me return true sinon tu me retourn false

// version longue de la fonction precedente :
// const checkValue(value){
//     let returnValue = false
//     if ( vaue !== null || value !== undefined || value !== 0 || value !== Nan) {
//         returnValue = true 
//     }

// }


const init = () => {
    if (!checkActions(action)) {  // si check ACTION est false donc on as pas mis add ou remove
        console.log(`Error : the possible actions are :
                                    -add
                                    -remove`)
    } else if (!checkValue(value)) { // si check VALUE est false on as rien mis apres le add dans le terminal
        console.log('Error : You need give value for insertion !!!')        
    } else {
        fileMger.init('liste.txt', action, value)  //
    }
}
init()
