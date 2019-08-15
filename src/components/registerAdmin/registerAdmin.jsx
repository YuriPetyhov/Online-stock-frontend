import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {registerAdmin} from '../../actions/companyUserAction';

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

import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
import useStyles from './registerAdminStyles'

const AdminRegister = (props) => {
    const [values, setValues] = useState({
        role:'companyAdmin',
        company:'',
        email: '',
        password: '',
        password_confirm:'',
        errors: {}
    });

    const handleInputChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

    const reset = () => {
        setValues({...values, role:'companyAdmin',
            company:'',
            email: '',
            password: '',
            password_confirm:'',
            errors: {}})

        Swal.fire({
            type: 'success',
            title: 'Congratulations!',
            text: 'Нou have successfully logged !',
            allowOutsideClick: false
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const admin = {
            company:values.company,
            email: values.email,
            password: values.password,
            password_confirm: values.password_confirm,
            role:values.role
        };

        props.registerAdmin(admin,reset);

    };

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    New company admin form
                </Typography>
                <ValidatorForm className={classes.form} noValidate onSubmit={handleSubmit} >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                required
                                fullWidth
                                id="company"
                                label="Company name"
                                name="company"
                                autoComplete="Company name"
                                value={values.company}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={values.email}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={values.password}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                required
                                fullWidth
                                name="password_confirm"
                                label="Confirm password"
                                type="password"
                                id="password_confirm"
                                autoComplete="confirm password"
                                value={values.password_confirm}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </div>
        </Container>
    );
}

AdminRegister.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {registerAdmin})(AdminRegister)