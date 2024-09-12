import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { useState } from 'react';

import './NoteCard.css';





const NoteCard = ({ notes, handleDelete, handleOpenModal, handlePin, handleEditModal }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            {notes.length ? (
                notes.map((note) =>
                    <Card key={note._id} sx={{ maxWidth: 345 }}>
                        <div className='NoteCardHeader'>
                            <CardHeader title={note.title} subheader={note.createdAt.substring(0, 10)} />
                            <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2 }} >
                                {note.isPinned ? <PushPinIcon color='primary' onClick={() => { handlePin(note._id, note.isPinned); }} /> : <PushPinOutlinedIcon onClick={() => { handlePin(note._id, note.isPinned); }} />}
                            </IconButton>
                        </div>

                        <CardContent>
                            <Typography variant="body2" color="text.secondary">{note.content}</Typography>
                        </CardContent>
                        <CardActions>
                            {note.tags.map((tag) => {
                                return <Button key={tag.id} size="small">#{tag.text}</Button>;
                            })}
                        </CardActions>
                        <CardActions disableSpacing>
                            <IconButton aria-label="edit notes">
                                <EditIcon onClick={() => handleEditModal(note)} />
                            </IconButton>
                            <IconButton aria-label="delete notes">
                                <DeleteIcon onClick={() => handleDelete(note._id)} />
                            </IconButton>
                        </CardActions>
                    </Card>
                )
            ) : (
                <div className="">You dont have any note.</div>
            )}
            <SpeedDial
                ariaLabel="SpeedDial controlled open example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >

                <SpeedDialAction
                    key='hello'
                    icon={<EditNoteIcon />}
                    tooltipTitle='Add New Note'
                    onClick={() => handleOpenModal()}
                />

            </SpeedDial>
        </>
    );
};

export default NoteCard;









