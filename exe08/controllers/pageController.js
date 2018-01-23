const mongoose = require('mongoose')
const Magasin = mongoose.model('Magasin')


exports.home = async (req,res) => {   // module.exports n'export qu'un module , exports export plusieurs choses 
    const magasins = await Magasin.find() //si c'est une promise tu peux faire un await pas si cest un callback -  l'await rend le resultat de la promise : const x = await m.find() = m.find().then(data)=>{console.log(data)} 
    console.log(magasins)
    res.render('home', {title :'Ma home page', magasins:magasins})
}

exports.about = (req,res)=> {   // module.exports n'export qu'un module , exports export plusieurs choses 
    res.render('about', {title :'Ma about page', test:'ceci est un testB'})
}

exports.error = (req,res)=> {   // module.exports n'export qu'un module , exports export plusieurs choses 
    res.render('error', {title :'Ma error page', test:'ceci est un testC'})
}

