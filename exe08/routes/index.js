const express = require('express')  // Import du module node express ( apres installation npm install )
const router = express.Router()     // je crée un routeur avec la method d'express Router() ( si j'ai about affiche moi about.html, il fait les chemins)
const pageController = require(`${process.cwd()}/controllers/pageController`)
const magasinsController = require(`${process.cwd()}/controllers/magasinsController`)



// router.get('/', (req,res)=>{        // si tu vois une requete de type '/' ( donc une adresse web vu qu'il y a tjrs des /) tu réponds
//     res.send('hello world')         // La reponse que tu envois est Hello world
// })

router.get('/', pageController.home)
router.get('/about', pageController.about)
router.get('/error', pageController.error)

router.get('/magasins/add', magasinsController.addMagasin)

router.get('/magasins/:id/edit', magasinsController.editMagasin)

router.get('/magasins/:slug', magasinsController.getMagasinBySlug)  // :slug partie dynamique pour prendre le {{magasin.slug}}

router.post('/magasins/add',
    magasinsController.upload,
    magasinsController.resize,
    magasinsController.createMagasin)

router.post('/magasins/add/:id',
    magasinsController.upload,
    magasinsController.resize,
    magasinsController.updateMagasin)

module.exports = router             // export tjrs obligatoire pour renvoyer vers le start.js ou le server.js