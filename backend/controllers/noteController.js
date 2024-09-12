import Note from "../models/noteModel.js";



const addNotes = async (req, res) => {
    const { title, content, tags } = req.body;
    const user = req.user._id;

    if (!(title && content)) {
        throw new Error('Note must have title and content');
    }
    const newNote = new Note({
        title,
        content,
        tags: tags || [],
        user
    });


    try {
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        res.status(400);
        console.log(error);
        throw new Error('Note not created.');
    }
};

const updateNote = async (req, res) => {
    const { noteId } = req.params;
    const { title, content, tags, isPinned } = req.body;
    const editedNote = await Note.findOne({ _id: noteId, user: req.user._id });

    if (editedNote) {
        editedNote.title = title || editedNote.title;
        editedNote.content = content || editedNote.content;
        editedNote.tags = tags || editedNote.tags;
        if (!title) {
            editedNote.isPinned = isPinned;
        } else {
            editedNote.isPinned = editedNote.isPinned;
        }

        try {
            await editedNote.save();
            res.status(201).json(editedNote);
        } catch (error) {
            res.status(400);
            throw new Error('Note not updated.');
        }
    } else {
        res.status(404);
        throw new Error('Note not found.');

    }

};


const getAllNotes = async (req, res) => {
    try {
        const allNotes = await Note.find({ user: req.user._id }).sort({ isPinned: -1 });
        res.status(201).json(allNotes);
    } catch (error) {
        res.status(400);
        throw new Error('Internal Server Error.');
    }
};

const deleteNote = async (req, res) => {
    const { noteId } = req.params;

    const deletedNote = await Note.findOne({ _id: noteId, user: req.user._id });
    console.log(deletedNote);
    try {
        if (deletedNote) {
            await Note.deleteOne({ _id: noteId, user: req.user._id });
            res.status(201).json('Note deleted successfully');
        } else {
            res.status(404);
            throw new Error('Note not found.');
        }
    } catch (error) {
        res.status(400);
        throw new Error('Internal Server Error.');
    }
};




export { addNotes, updateNote, getAllNotes, deleteNote };