
import { Avatar, TextField, Typography, Toolbar, InputAdornment, Box, AppBar, Button, IconButton } from '@mui/material';
import { Navigate } from 'react-router-dom';

import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

import './Navbar.css';
import { useState } from 'react';

export default function NavBar({ login, searchValue, cancel, setOnChange }) {
    const [user, setUser] = useState(true);
    if (!user) {
        return <Navigate to='/login' replace={true} />;
    }

    return (
        <div className='Navbar'>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} >
                            <AutoStoriesIcon />
                        </IconButton>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 2 }}>
                            Notes
                        </Typography>

                        {login === 'login' && <TextField type='text' size='small' value={searchValue} onChange={setOnChange} variant='outlined' placeholder='Search Notes' InputProps={{
                            endAdornment: (
                                <InputAdornment position="end" >
                                    {searchValue && <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2 }} >
                                        <CloseIcon onClick={cancel} />
                                    </IconButton>}<IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2 }} >
                                        <SearchIcon onClick={() => { setVisible(!visible); }} />
                                    </IconButton></InputAdornment>
                            )
                        }} />}
                        <div className='personal-info'>
                            {login === 'login' && <Avatar>FS</Avatar>}
                            {login === 'login' && <Button color="inherit" onClick={() => {
                                setUser(false);
                            }}  >Logout</Button>}
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}
