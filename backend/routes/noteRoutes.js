import express from "express";
const router = express.Router();
import { asyncHandler, isLoggedIn } from "../middlewares/middlewares.js";
import { addNotes, updateNote, getAllNotes, deleteNote } from "../controllers/noteController.js";


router.route('/')
    .get(isLoggedIn, asyncHandler(getAllNotes));


router.route('/add')
    .post(isLoggedIn, asyncHandler(addNotes));

router.route('/edit/:noteId')
    .put(isLoggedIn, asyncHandler(updateNote));


router.route('/delete/:noteId')
    .delete(isLoggedIn, asyncHandler(deleteNote));


export default router;