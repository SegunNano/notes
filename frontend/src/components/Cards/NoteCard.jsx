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





const NoteCard = ({ data, handleOpenModal }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <div className='NoteCardHeader'>
                    <CardHeader

                        title={data.title}
                        subheader={data.date}
                    />
                    <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2 }} >
                        {data.isPinned ? <PushPinIcon color='primary' onClick={() => { setVisible(!visible); }} /> : <PushPinOutlinedIcon onClick={() => { setVisible(!visible); }} />}
                    </IconButton>
                </div>

                <CardContent>
                    <Typography variant="body2" color="text.secondary">{data.content}</Typography>
                </CardContent>
                <CardActions>
                    {data.tags.map((tag, idx) => {
                        return <Button key={idx} size="small">#{tag}</Button>;
                    })}
                </CardActions>
                <CardActions disableSpacing>
                    <IconButton aria-label="edit notes">
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete notes">
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
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
                    onClick={handleOpenModal}
                />

            </SpeedDial>
        </>
    );
};

export default NoteCard;









