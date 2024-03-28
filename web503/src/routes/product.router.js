import express from 'express';
import {
    getProducts,
    getProduct,
    postProduct,
    putProduct,
    deleteProduct
} from '../controllers/product';
const router = express.Router();
router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", postProduct);
router.put("/products/:id", putProduct);
router.delete("/products/:id", deleteProduct);
export default router;