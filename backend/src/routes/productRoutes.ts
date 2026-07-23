import express from 'express';
import { getProducts, getProductBySlug, createProduct, updateProduct, deleteProduct } from '../controllers/productController';

const router = express.Router();

router.route('/').get(getProducts).post(createProduct);
router.route('/:id').put(updateProduct).delete(deleteProduct);
router.route('/slug/:slug').get(getProductBySlug); // Use separate path to avoid conflict with /:id

export default router;
