const  Manga  = require ('../models /products');
const mongoose = require('mongoose');


exports.addManga = async (req, res) => {
    const {nombre , autor, editorial,foto, precio} = req.body;
    try { 
        const newManga = await Manga.create({
        nombre,
        autor,
        editorial,
        foto,
        precio
    });
    res.json(newManga)
    } catch (error) {
        res.status(500).json({
            msj:"Hubo un error en la solicitud",
            error
        }) 
        console.log(error)
    }  

};

exports.getAllManga = async (req,res) => {
   try{
    const manga = await Manga.find({})
    res.json({manga})
   } catch (error) {
    res.status(500).json ({
        msj: 'error al obtener mangas',
        error
    })
}
} 

exports.getMangaById = async (req,res) => {
 try {
    const mangaID =req.params.id;
    console.log(mangaID)
    const manga = await Manga.findById(mangaID)
    if (manga) {
    res.json(manga)
    console.log(manga)
}else {
    res.status(404).json ({msj: 'Manga no encontrado'})
}
} catch(error) {
    res.status(500).json({
        msj: 'error al obtener Manga',
        error
    })
}    

};

exports.updateMangaById = async (req,res) => {
    const {nombre, autor,editorial,foto,precio} = req.body;
    const mangaID = req.params.id;
    try {
        const actualizarManga = await Manga.findByIdAndUpdate (mangaID,{nombre,autor,editorial,foto,precio})
        res.json(actualizarManga)
    } catch(error) {
        res.status(500).json({
            msj: 'error al actualizar Manga',
            error
        })    
    }

};

exports.deleteMangaById = async (req,res) => {
     try {
        const mangaID = req.params.id;
        const borrarManga = await Manga.findByIdAndDelete (mangaID)
        if(borrarManga) {
        res.json(borrarManga)
    }else {
        res.status(404).json ({msj: 'Manga no encontrado'})
    }
    } catch(error) {
        res.status(500).json({
            msj: 'error al borrar Manga',
            error
        })    
    }
} 