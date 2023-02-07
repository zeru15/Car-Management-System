import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

function Login() {

    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "80px auto", }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    return (
        <div  className='heroBg h-screen fixed w-full'>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2> Login </h2>
                    </Grid>
                    <TextField label='Username' placeholder='Enter username' fullWidth required />
                    <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                    <Typography style={{ textAlign: 'center' }}>
                        <Link href="#" >
                            Forgot password ?
                        </Link>
                    </Typography>
                    <Typography style={{ textAlign: 'center' }}>
                        Don't have an account ?<br />
                        <Link href="/signup" >
                            Sign Up
                        </Link>
                    </Typography>
                    <Typography style={{ textAlign: 'center', margin:"50px" }}>
                        <Link href="/" >
                            Back to home &gt;&gt;
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>
    )
}

export default Login