import express from "express";
const router = express.Router();
import { asyncHandler } from "../middlewares/middlewares.js";
import { register, login } from "../controllers/userController.js";


router.route('/')
    .post(asyncHandler(register));


router.route('/auth')
    .post(asyncHandler(login));

export default router;