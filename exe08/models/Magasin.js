const mongoose = require('mongoose');


const schema = new mongoose.Schema({   //mongoose nous donne une classe qui s'appelle schema 
    name: {
        type: String,
        required: 'thank to introduce a name'
    },
    slug: {
        type: String,
        trim: true
    },
    description: {
        type: String
    },
    photo: {
        type: String
    },
    location: {

        type: {
            type: String,
            default: 'Point'
        },

        coordinates: [
            {
                type: Number,
                required: 'Coordinates are required'
            }
        ],

        address: {
            type: String,
            required: 'adress are required'
        }

    }
})

module.exports = mongoose.model('Magasin', schema)  // export classique en node js