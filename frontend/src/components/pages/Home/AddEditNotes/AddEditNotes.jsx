import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Tags from './Tags/Tags';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';

import './AddEditNotes.css';
import { useState } from 'react';
// import { Typography } from '@mui/material';
import { useCreateNoteMutation } from '../../../../redux/api/notesApiSlice';


const AddEditNotes = ({ tags, setTags, title, setTitle, content, setContent, handleAdd, handleUpdate, modal, handleCloseModal }) => {


    return (
        <Modal open={modal} onClose={handleCloseModal}  >
            <div className='AddEditNotes'>
                <Button className='btn' onClick={(e) => {
                    e.stopPropagation();
                    handleCloseModal();
                }} >
                    <IconButton>
                        <CancelIcon color='primary' />
                    </IconButton>
                </Button>

                <TextField value={title} onChange={(e) => { setTitle(e.target.value); }} fullWidth label='TITLE' type="text" placeholder='Example: Go To Gym At 5' required />
                <TextField value={content} onChange={(e) => { setContent(e.target.value); }} label='CONTENT' fullWidth multiline minRows={10} type="text" placeholder='Write Your Note Description Here' required />
                <Tags tags={tags} setTags={setTags} />

                {handleUpdate ? (
                    <Button type='button' fullWidth size='large' variant='contained' onClick={handleUpdate}>Update Note</Button>
                ) : (
                    <Button type='button' fullWidth size='large' variant='contained' onClick={handleAdd}>Add</Button>
                )}

            </div >
        </Modal>
    );
};

export default AddEditNotes;
