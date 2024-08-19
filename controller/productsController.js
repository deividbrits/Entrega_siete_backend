const  Manga  = require ('../models /products');
const mongoose = require('mongoose');


exports.addManga = async (req, res) => {
    const {nombre , autor, editorial,foto, precio} = req.body;
    try { const newManga = await Manga.create({
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
        msj: 'error al obtener cafes',
        error
    })
}
} 

exports.getMangaById = async (req,res) => {
 try {
    const mangaID =req.params.id;
    console.log(mangaID)
    const manga = await Manga.findById(cafeID)
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
    const {id,nombre, autor,editorial,precio} = req.body;
    try {
        const actualizarManga = await Manga.findByIdAndUpdate (id,{nombre,autor,editorial,precio})
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
        const MangaID = req.params.id;
        const borrarManga = await Manga.findByIdAndDelete (cafeID)
        if(borrarCafe) {
        res.json(borrarCafe)
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