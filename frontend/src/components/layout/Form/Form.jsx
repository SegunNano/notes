import { Card, CardContent, InputAdornment, TextField, Typography, IconButton, Button } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";
import { Link } from 'react-router-dom';


import './Form.css';


const Form = ({ page, onChange, value }) => {
    const [visible, setVisible] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    };


    return (
        <div className="form-container">
            <Card>
                <CardContent>
                    <form onSubmit={handleSubmit} >
                        <Typography variant="h4">
                            {page === 'login' ? 'Login' : 'Sign - Up'}
                        </Typography>
                        {page === 'signup' && <TextField label='Name' type="text" size="small" value={value[2]} onChange={onChange[2]} variant="filled" required />}
                        <TextField label='Email' type="email" size="small" variant="filled" value={value[0]} onChange={onChange[0]} required />
                        <TextField label='Password' size="small" variant="filled" required type={visible ? 'text' : 'password'} value={value[1]} onChange={onChange[1]} InputProps={visible ? {
                            endAdornment: (
                                <InputAdornment position="end" >
                                    <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2 }} >
                                        <VisibilityOffIcon onClick={() => { setVisible(!visible); }} />
                                    </IconButton></InputAdornment>
                            )
                        } : {
                            endAdornment: (
                                <InputAdornment position="end" >
                                    <IconButton size="large" edge="start" color="primary" aria-label="menu" sx={{ mr: 2 }} >
                                        <VisibilityIcon onClick={() => { setVisible(!visible); }} />
                                    </IconButton></InputAdornment>
                            )
                        }} />
                        <Button type="submit" variant="contained" size="large">{page === 'login' ? 'Login' : 'Create Account'}</Button>
                        {page === 'login' ? <Typography>Not registered yet?
                            <Link to='/signup'>
                                Create an account
                            </Link>
                        </Typography> : <Typography>Already have an account?
                            <Link to='/login'>
                                Login
                            </Link>
                        </Typography>}
                    </form>
                </CardContent>
            </Card>

        </div >
    );
};

export default Form;
