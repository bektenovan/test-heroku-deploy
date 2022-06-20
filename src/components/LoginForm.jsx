import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../contexts/authContext';

const LoginForm = () => {
    const { login, error } = useContext(authContext)
    const navigate = useNavigate()
    // console.log(login);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function handleValues() {
        if (!email || !password) {
            alert("заполните поля!")
            return
        }
        login(email, password, navigate)


    }

    return (
        <Box display={"flex"} flexDirection={'column'} alignItems={'center'} justifyContent={"center"} height={"70vh"} >
            <Typography variant="h3" component="h2">
                Login form
            </Typography>

            {error ? <Alert severity="error">{error}</Alert> : null}
            <TextField value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "30%", margin: "15px" }} id="outlined-basic" label="Email" variant="outlined" />
            <TextField value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "30%", margin: "15px" }} id="outlined-basic" label="Password" variant="outlined" />
            <Button onClick={handleValues} variant="contained" href="#contained-buttons" style={{ width: "30%", margin: "15px" }}>
                Login
            </Button>
            <Typography variant="p" component="h2">
                Don't have an account?
            </Typography>
            <Typography
                onClick={() => navigate('/register')}
                variant="h7" color={"primary"} style={{ cursor: "pointer" }} component="h2">
                Sign Up
            </Typography>

        </Box>
    );
};

export default LoginForm;