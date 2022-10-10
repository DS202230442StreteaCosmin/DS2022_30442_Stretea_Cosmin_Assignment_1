import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
    Avatar,
    Box,
    Button,
    CssBaseline,
    Grid,
    Link,
    TextField,
    Typography,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';
import { Link as RouteLink, useNavigate } from 'react-router-dom';

const LoginScreen = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    // const navigate = useNavigate();

    return (
        <Grid container component='main' sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#ec43ec',
                    filter: 'grayscale(80%)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
            >
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Sign in
                    </Typography>
                    <Box component='form' noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Email Address'
                            name='email'
                            autoComplete='email'
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            label='Password'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            sx={{ mt: 3, mb: 2 }}
                            onClick={(e) => {
                                e.preventDefault();
                                // dispatch(loginAction(email, password));
                            }}
                        >
                            Sign In
                        </Button>
                        {/* {user.isInputError && (
                            <Alert severity='error'>Invalid credentials!</Alert>
                        )} */}
                        <Grid container>
                            <Grid item>
                                <RouteLink to='/register'>
                                    {"Don't have an account? Sign Up"}
                                </RouteLink>
                            </Grid>
                        </Grid>
                        <Typography
                            variant='body2'
                            color='text.secondary'
                            align='center'
                        >
                            {'Copyright © '}
                            <Link color='inherit' href='https://mui.com/'>
                                Your Website
                            </Link>{' '}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default LoginScreen;
