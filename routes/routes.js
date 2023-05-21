import express from 'express';
import { getProducto, createProducto, deleteProducto, updateProducto, getAllProductos } from '../Controllers/StockController.js';

const router = express.Router()

router.get('/',getAllProductos)
router.get('/:id',getProducto)
router.post('/',createProducto)
router.put('/:id',updateProducto)
router.delete('/:id',deleteProducto)

export default router;