const mongoose = require('mongoose')
const mangaSchema = mongoose.Schema({
        nombre: {
            type: String, 
            required: true
            },
         autor :{
            type: String,
            required: true
         },
         editorial: {
            type: String
         },
         foto: {
            type: String

         },   
        precio: {
            type: Number
        },
    },
    {
        timestamps: true
    }
)
const Manga = mongoose.model('Manga', mangaSchema)

module.exports = Manga