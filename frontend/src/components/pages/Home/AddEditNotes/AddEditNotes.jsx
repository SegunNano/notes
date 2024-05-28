import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Tags from './Tags/Tags';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';

import './AddEditNotes.css';
import { useState } from 'react';
import { Typography } from '@mui/material';



const AddEditNotes = ({ modal, handleCloseModal }) => {
    const [tags, setTags] = useState([]);
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    const handleAdd = (e) => {
        // e.preventDefault();
        console.log([tags, title, contents]);
        setTags([]);
        setTitle('');
        setContents('');
        handleCloseModal();
    };

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
                <TextField value={contents} onChange={(e) => { setContents(e.target.value); }} label='CONTENT' fullWidth multiline minRows={10} type="text" placeholder='Write Your Note Description Here' required />
                <Tags tags={tags} setTags={setTags} />
                <Button type='submit' fullWidth size='large' variant='contained' onClick={handleAdd}>Add</Button>

            </div >
        </Modal>
    );
};

export default AddEditNotes;
