import express from 'express';
import {singup} from "../controllers/user";
const router = express.Router();
router.post("/singup",singup);
export default router;