import React, {useState} from 'react'
import RegisterUserForm from './registerUserForm'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useStyles from './registerUserStyles'
import {registerUser} from '../../actions/companyUsersAction'
import PropTypes from "prop-types";
import {connect} from "react-redux";

const RegisterUser = (props) => {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <div className={classes.paper}>
            <Typography component="h1" variant="h5" className={classes.formName}>
                New user information
            </Typography>
        <RegisterUserForm
            props={props}
        />
            </div>
        </Container>
    )
};

RegisterUser.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {registerUser})(RegisterUser)