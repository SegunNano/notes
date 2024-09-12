import { useState, useEffect } from "react";
import NoteCard from "../../Cards/NoteCard";
import AddEditNotes from "./AddEditNotes/AddEditNotes";

import { useCreateNoteMutation, useGetNotesQuery, useUpdateNoteMutation, useDeleteNoteMutation } from "../../../redux/api/notesApiSlice";

import './Home.css';


const Dashboard = () => {
    const [searchValue, setSearchValue] = useState('');
    const cancel = () => {
        setSearchValue('');
    };
    const setOnChange = (e) => {
        setSearchValue(e.target.value);
    };


    const [createNote] = useCreateNoteMutation();
    const [updateNote] = useUpdateNoteMutation();
    const [deleteNote] = useDeleteNoteMutation();
    const { data: notes, refetch, isLoading, error } = useGetNotesQuery();

    useEffect(() => {
        if (notes) refetch();
    }, [notes, refetch]);


    const [tags, setTags] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');



    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [selectedNote, setSelectedNote] = useState(null);

    const handleAdd = async () => {
        if (title, tags.length, content) {
            try {
                const res = await createNote({ title, tags, content }).unwrap();
                refetch();
                if (res.error) {
                    console.log(res.error);
                    return;
                }
                setTags([]);
                setTitle('');
                setContent('');
                handleCloseModal();
            } catch (err) {
                console.log(err);
            }

        } else {
            console.error('Fill in all credentials.');
        }


    };

    const handleDelete = async (id) => {
        try {
            const res = await deleteNote(id).unwrap();
            if (res.error) {
                console.log(res.error);
            } else {
                refetch();
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handlePin = async (id, isPinned) => {
        try {
            const res = await updateNote({ noteId: id, updatedNote: { isPinned: !isPinned } }).unwrap();
            if (res.error) {
                console.log(res.error);
            } else {
                console.log(res);
                refetch();
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdate = async () => {
        try {
            const res = await updateNote({ noteId: selectedNote._id, updatedNote: { title, content, tags } }).unwrap();
            if (res.error) {
                console.log(res.error);
            } else {
                console.log(res);
                refetch();
                setTags([]);
                setTitle('');
                setSelectedNote({});
                setContent('');
                handleCloseModal();
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleEditModal = (note) => {
        setModal2(true);
        setSelectedNote(note);
        setTitle(note.title);
        setTags(note.tags);
        setContent(note.content);
    };

    function handleOpenModal(e) {
        // e.stopPropagation();
        setModal1(true);
    };
    function handleCloseModal() {
        setModal1(false);
        setModal2(false);
    };

    return (
        <div >
            <div className="NoteCardContainer">
                {isLoading ? (
                    <div>
                        Loading...
                    </div>
                ) : error ? (
                    console.log(error)
                ) : (
                    <>
                        <NoteCard notes={notes} handleOpenModal={handleOpenModal} handleDelete={handleDelete} handlePin={handlePin} handleEditModal={handleEditModal} />
                        <AddEditNotes tags={tags} setTags={setTags} title={title} setTitle={setTitle} content={content} setContent={setContent} handleAdd={handleAdd} modal={modal1} handleCloseModal={handleCloseModal} />
                        <AddEditNotes tags={tags} setTags={setTags} title={title} setTitle={setTitle} content={content} setContent={setContent} handleUpdate={handleUpdate} modal={modal2} handleCloseModal={handleCloseModal} />
                    </>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
