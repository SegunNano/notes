import Note from "../models/noteModel.js";



const addNotes = async (req, res) => {
    const { title, content, tags } = req.body;
    const { _id } = req.user;

    if (!(title && content)) {
        throw new Error('Note must have title and content');
    }
    const newNote = new Note({
        title,
        content,
        tags: tags || [],
        userId: _id
    });


    try {
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        res.status(400);
        throw new Error('Note not created.');
    }
};

const updateNote = async (req, res) => {
    const { noteId } = req.params;
    const { title, content, tags, isPinned } = req.body;
    const { _id } = req.user;

    if (!(title && content)) {
        throw new Error('Note must have title and content');
    }

    const editedNote = await Note.findOne({ _id: noteId, userId: _id });

    if (editedNote) {
        editedNote.title = title || editedNote.title;
        editedNote.content = content || editedNote.content;
        editedNote.tags = tags || editedNote.tags;
        editedNote.isPinned = isPinned || editedNote.isPinned;

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
    const { _id } = req.user;


    try {
        const allNotes = await Note.find({ userId: _id }).sort({ isPinned: -1 });
        res.status(201).json(allNotes);
    } catch (error) {
        res.status(400);
        throw new Error('Internal Server Error.');
    }
};

const deleteNote = async (req, res) => {
    const { noteId } = req.params;
    const { _id } = req.user;

    const deletedNote = await Note.findOne({ _id: noteId, userId: _id });

    try {
        if (deletedNote) {
            await Note.deleteOne({ _id: noteId, userId: _id });
            res.status(201).send('Note deleted successfully');

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