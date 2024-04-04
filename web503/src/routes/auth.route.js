import express from 'express';
import {singup, singin} from "../controllers/user";
const router = express.Router();
router.post("/singup",singup);
router.post("/singin",singin);
export default router;