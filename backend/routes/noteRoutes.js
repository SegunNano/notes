import express from "express";
const router = express.Router();
import { asyncHandler, isLoggedIn } from "../middlewares/middlewares.js";
import { addNotes, updateNote, getAllNotes, deleteNote } from "../controllers/noteController.js";


router.route('/')
    .get(isLoggedIn, asyncHandler(getAllNotes))
    .post(isLoggedIn, asyncHandler(addNotes));

router.route('/:noteId')
    .put(isLoggedIn, asyncHandler(updateNote))
    .delete(isLoggedIn, asyncHandler(deleteNote));


export default router;