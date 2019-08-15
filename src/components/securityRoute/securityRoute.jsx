import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import AdminRegister from "../registerAdmin/registerAdmin";
import Header from '../header';

const SecurityRoute = (props) => {

    if (props.auth.user.role==='manager') {
        return (
            <div><Header auth={props.auth.user.role}/>
            <Route exact path="/newAdminRegistration" component={AdminRegister}/>
            </div>
        )
    } else {
        return <Redirect to={{pathname: '/'}}/>
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(SecurityRoute)