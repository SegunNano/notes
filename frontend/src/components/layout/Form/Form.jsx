import { Card, CardContent, InputAdornment, TextField, Typography, IconButton, Button } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";
import { Link } from 'react-router-dom';


import './Form.css';


const Form = ({ onChange, value, handleSubmit }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="form-container">
            <Card>
                <CardContent>
                    <form onSubmit={handleSubmit} >
                        <Typography variant="h4">
                            {value.length < 3 ? 'Login' : 'Sign - Up'}
                        </Typography>
                        {value.length > 2 && (
                            <TextField label='Name' type="text" size="small" value={value[2]} onChange={onChange[2]} variant="filled" required />
                        )}
                        <TextField label='Email' type="email" size="small" variant="filled" value={value[0]} onChange={onChange[0]} required />
                        <TextField label='Password' size="small" variant="filled" required type={visible ? 'text' : 'password'} value={value[1]} onChange={onChange[1]} InputProps={visible ? {
                            endAdornment: (
                                <InputAdornment position="end" >
                                    <IconButton onClick={() => { setVisible(!visible); }} size="large" edge="start" aria-label="menu" sx={{ mr: 2 }} >
                                        <VisibilityOffIcon />
                                    </IconButton></InputAdornment>
                            )
                        } : {
                            endAdornment: (
                                <InputAdornment position="end" >
                                    <IconButton onClick={() => { setVisible(!visible); }} size="large" edge="start" color="primary" aria-label="menu" sx={{ mr: 2 }} >
                                        <VisibilityIcon />
                                    </IconButton></InputAdornment>
                            )
                        }} />
                        <Button type="submit" variant="contained" size="large">{value.length < 3 ? 'Login' : 'Create Account'}</Button>
                        {value.length < 3 ? (
                            <Typography>Not registered yet?
                                <Link to='/signup'>
                                    Create an account
                                </Link>
                            </Typography>
                        ) : (
                            <Typography>Already have an account?
                                <Link to='/login'>
                                    Login
                                </Link>
                            </Typography>
                        )}
                    </form>
                </CardContent>
            </Card>

        </div >
    );
};

export default Form;
