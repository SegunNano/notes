import { IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import './Tags.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';


const Tags = ({ tags, setTags }) => {
    const [tagsValue, setTagsValue] = useState('');
    const addNewTags = () => {
        if (tagsValue.trim()) {
            setTags(oldtags => [...oldtags, { id: uuid(), text: tagsValue.trim() }]);
            setTagsValue('');
        }
    };
    const handleTagDelete = (id) => {
        setTags(oldtags => {
            return oldtags.filter(oldtag => oldtag.id !== id);
        });
    };

    return (
        <>
            <div className='Tags'>
                <TextField onKeyDown={(e) => { e.key === 'Enter' && addNewTags(); }} label='Add Tags' value={tagsValue} onChange={(e) => { setTagsValue(e.target.value); }} type="text" required />
                <Button onClick={addNewTags}><IconButton><AddIcon /></IconButton></Button>
            </div>
            <div>
                {tags.map((tag) => {
                    return <Button key={tag.id} size="small">#{tag.text}<IconButton><DeleteOutlinedIcon onClick={() => { handleTagDelete(tag.id); }} /></IconButton></Button>;
                })}
            </div>
        </>
    );
};

export default Tags;
