import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function Signup() {

    const paperStyle = { padding: 20, height: '85vh', width: 280, margin: "80px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    return (
        <div className='heroBg h-screen fixed w-full' >
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2>Create Account</h2>
                    </Grid>
                    <TextField label='First Name' placeholder='Enter First Name' fullWidth required />
                    <TextField label='Last Name' placeholder='Enter Last Name' fullWidth required />
                    <TextField label='Staff Id' placeholder='Enter Staff Id' fullWidth required />
                    <TextField label='Email' placeholder='Enter Email or Username' fullWidth required />
                    <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />
                    <TextField label='Re-Enter Password' placeholder='Enter password' type='password' fullWidth required />

                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign Up</Button>

                    <Typography style={{ textAlign: 'center' }}>
                        Already have an account ?<br />
                        <Link href="/login" >
                            Sign In
                        </Link>
                    </Typography>
                    <Typography style={{ textAlign: 'center', margin:"20px" }}>
                        <Link href="/" >
                            Back to home &gt;&gt;
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>
    )
}

export default Signup