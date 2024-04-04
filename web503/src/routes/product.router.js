import express from 'express';
import {
    getProducts,
    getProduct,
    postProduct,
    putProduct,
    deleteProduct
} from '../controllers/product';
import { checkAuth } from '../middlewares/auth';
const router = express.Router();
// yêu cầu tất cả đều phải đăng nhập
router.use(checkAuth);
// Chỉ từng route
// router.get("/products",checkAuth, getProducts);
router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", postProduct);
router.put("/products/:id", putProduct);
router.delete("/products/:id", deleteProduct);
export default router;