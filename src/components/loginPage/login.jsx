import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {loginUser} from '../../actions/authenticationAction';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import useStyles from './loginStyles'

const Login = (props) => {


    const [values, setValues] = useState({
        email: '',
        password: '',
        errors: {}
    });

    const validateRules = () => {
        ValidatorForm.addValidationRule('isUser', () => {
            return !props.errors.email;
        });
        ValidatorForm.addValidationRule('isPassword', () => {
            return !props.errors.password;
        });
    };


    useEffect(() => {
        validateRules()
    });

    const handleInputChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

    const reset = () => {
        props.history.push('/')
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: values.email,
            password: values.password,
        };

        props.loginUser(user, reset);

    };


    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box className={classes.paper}>
                <Fab variant="extended" aria-label="delete" color="primary" className={classes.fab} href='/'>
                    <NavigationIcon className={classes.extendedIcon}/>
                    Go to main page
                </Fab>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h4">
                    Sign in
                </Typography>
                <ValidatorForm className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextValidator
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleInputChange}
                        value={values.email}
                        validators={['required', 'isEmail', 'isUser']}
                        errorMessages={['this field is required', 'email is not valid', props.errors.email]}
                    />
                    <TextValidator
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={values.password}
                        autoComplete="current-password"
                        validators={['required', 'isPassword']}
                        errorMessages={['this field is required', props.errors.password]}
                        onChange={handleInputChange}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"
                    />
                    <span style={{color: 'red'}}>{props.errors.email}</span>
                    <span style={{color: 'red'}}>{props.errors.password}</span>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </Box>
            <Box mt={9}>
            </Box>
        </Container>
    );
};

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {loginUser})(Login)