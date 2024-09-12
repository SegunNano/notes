
import { Avatar, TextField, Typography, Toolbar, InputAdornment, Box, AppBar, Button, IconButton } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../../../redux/api/usersApiSlice';
import { useSelector, useDispatch } from 'react-redux';

import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { logout } from '../../../redux/features/auth/authSlice';

import './Navbar.css';

export default function NavBar({ searchValue, cancel, setOnChange }) {
    const [logoutApiCall] = useLogoutMutation();
    const { userInfo } = useSelector(state => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

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

                        {userInfo && <TextField type='text' size='small' value={searchValue} onChange={setOnChange} variant='outlined' placeholder='Search Notes' InputProps={{
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
                            {userInfo && (
                                <Avatar>{userInfo.username.substring(0, 2)}</Avatar>
                            )}
                            {userInfo && (
                                <Button color="inherit" onClick={async () => {
                                    try {
                                        await logoutApiCall().unwrap();
                                        dispatch(logout());
                                        navigate('/login');
                                    } catch (error) {
                                        console.error(error);
                                    }
                                }}  >Logout</Button>
                            )}
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}
