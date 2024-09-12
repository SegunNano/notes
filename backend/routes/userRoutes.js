import express from "express";
const router = express.Router();
import { asyncHandler } from "../middlewares/middlewares.js";
import { register, login, logout } from "../controllers/userController.js";


router.route('/')
    .post(asyncHandler(register));

router.route('/auth')
    .post(asyncHandler(login));

router.route('/logout')
    .post(asyncHandler(logout));

export default router;