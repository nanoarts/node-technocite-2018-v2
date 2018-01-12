const fs = require('fs')
let values = []  //creation d'un array

module.exports = {   //methode pour exporter vers server.js
    init : (file, action, value) => {   // les trois valeurs venant de server.js : liste.txt add TEST
        fs.readFile(file, (err, data) => {  // je lis le fichier liste.txt ( les prenoms , je check les erreurs et je prend les datas : tout les prénoms)
            values = (data.toString().split('\n'))  // je stock les valeurs dans l'array , tostring = je les mets en string et je split( je met a la ligne avec \n chaque prénom)
            
            if (action === 'add') {   // si action est égale a add
                add(value, file)            // je lance ma const add
            } else { remove(value, file)}  // ou si action est egale a remove
        })
    }

}


const add = (value, file) => {  // je crée une var add dans laquel je push la value 'TEST'

    if(!checkValueInlist(value)){  // si la value ( dans 'TEST' ) n'existe pas alors ...
        values.push(value)          // ...je rajoute la value TEST dans mon array values
        save(file)                  // je lance ma const save (28)
    } else {
        console.log('erreur dans const add')
    }


}


const remove = (value,file) => {

    if(checkValueInlist(value)){  
        values.splice(values.findIndex(item => item === value),1)   // splice : on enleve l'element dont l'index est = la value ( si value est gilles trouve l'element prend son index en chiffre et supprime le )
        save(file)                                                  // tu lance la const save
    } else {
        console.log('erreur dans la const remove')
    }


    
}


const checkValueInlist = (value) => {
    return values.filter(item=>item===value).length >0
}


const save = (file) => {        // le fichier .txt      const save = function(file){}

    let tempStr = values.reduce((prev, current)=> {     // dans mon array values, avec deja tt mes prenoms prendre tout les prénoms un a un et...
        return ` ${prev}\n${current}`                   // retourne moi une chaine de caractere avec tout les prénoms, a la ligne, pour pouvoir ecrire correctement dans le liste.txt
    })
    fs.writeFile(file, tempStr, (err)=> {               // le file est "liste.txt" dans lequel je met mes prenoms en string de tempStr : mes prénoms en string, check erreur
        if (err) console.log(err)           
        console.log('file saved')
    })
}