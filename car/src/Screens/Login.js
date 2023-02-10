import React, { Component } from 'react'
import { Grid, Paper, Avatar, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from './../Actions/authActions'
import { clearErrors } from './../Actions/errorActions'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Navigate } from "react-router-dom";

class Login extends Component {

    state = {
        modal: false,
        email: '',
        password: '',
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            //Check for Register error
            if (error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }
        if (this.state.modal) {
            if (isAuthenticated) {
                this.toggle();
            }
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const { email, password } = this.state;

        const user = {
            email,
            password
        }

        //Attempt to login
        this.props.login(user);
    };


    render() {

        const { token } = this.props.auth

        const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "80px auto", }
        const avatarStyle = { backgroundColor: '#1bbd7e' }
        const btnstyle = { margin: '8px 0' }
        return (
            <div className='heroBg h-screen fixed w-full'>
                { token? <Navigate to="/availablecars" replace={true} /> : null}
                <Grid>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align='center'>
                            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                            <h2> Login </h2>
                        </Grid>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='email'> Email </Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />

                                <Label for='password'> Password </Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
                                <Button color="dark" style={{ marginTop: '2rem' }} block>
                                    Login
                                </Button>
                            </FormGroup>
                        </Form>

                        <Typography style={{ textAlign: 'center' }}>
                            Don't have an account ?<br />
                            <Link href="/signup" >
                                Sign Up
                            </Link>
                        </Typography>
                        <Typography style={{ textAlign: 'center', margin: "20px" }}>
                            <Link href="/" >
                                Back to home &gt;&gt;
                            </Link>
                        </Typography>
                    </Paper>
                </Grid>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    auth: state.auth
});

export default connect(mapStateToProps, { login, clearErrors })(Login);