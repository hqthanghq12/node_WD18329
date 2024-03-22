import express from 'express';
import {
    getProducts,
    getProduct,
    postProduct
} from '../controllers/product';
const router = express.Router();
router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", postProduct);
export default router;