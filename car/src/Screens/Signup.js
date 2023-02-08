import React, { Component } from 'react'
import { Grid, Paper, Avatar, Typography, Link } from '@material-ui/core'
import Alert from '@mui/material/Alert';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from './../Actions/authActions'
import { clearErrors } from './../Actions/errorActions'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigation } from "react-router-dom";
import { Navigate } from "react-router-dom";



class Signup extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            //Check for Register error
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }
        // if (this.state.modal) {
        //     if (isAuthenticated) {
        //         this.toggle();
        //         this.props.navigation.navigate('/availablecars')
        //     }
        // }
        
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const { name, email, password } = this.state;

        //Create User Object
        const newUser = {
            name,
            email,
            password
        }

        //Atempt to register
        this.props.register(newUser);

        // <Navigate to="http://localhost:3000/availablecars" replace={true} />
    }

    render() {

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
                        {this.state.msg ? <Alert severity="error"> {this.state.msg} </Alert> : null}
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='name'> Name </Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />

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
                                    Register
                                </Button>
                            </FormGroup>
                        </Form>

                        <Typography style={{ textAlign: 'center' }}>
                            Already have an account ?<br />
                            <Link href="/login" >
                                Sign In
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
    error: state.error
});

export default connect(mapStateToProps, { register, clearErrors })(Signup); 