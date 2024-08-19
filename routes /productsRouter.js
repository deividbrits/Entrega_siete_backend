const express = require ('express');
const producController = require ('../controller/productsController')

const productRouter = express.Router ()

productRouter.post('/create', producController.addManga)
productRouter.get('/readall',producController.getAllManga )
productRouter.get('/readone/:id',producController.getMangaById)
productRouter.put('/update/:id',producController.updateMangaById)
productRouter.delete('/delete/:id',producController.deleteMangaById)

module.exports = productRouter ;