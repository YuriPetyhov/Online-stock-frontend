import React from 'react';
import {logoutUser} from '../../actions/authenticationAction';

import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

import {connect} from "react-redux";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import useStyles from './headerStyles'

const Header = (props) => {

    const logout = (e) => {
        e.preventDefault();
        props.logoutUser()
    };

    const classes = useStyles();

    const navigation = (linkArr) => {

        const navList = linkArr.map((elem) => {
            return (
                <Link key={elem.name} variant="button" color="textPrimary" href={elem.link} className={classes.link}>
                    {elem.name}
                </Link>)
        });
        return (
            <nav>
                {navList}
            </nav>
        )
    };

    const NavigationBar = () => {
        switch (props.auth.user.role) {
            case 'mainAdmin':
                return navigation([
                    {name: 'Home', link: '/'},
                    {name: 'Registration new company ', link: '/newCompanyAdmin'},
                    {name: 'Reports', link: '/reports'},
                    {name: 'Companies', link: '/companiesList'}]);
            case 'companyAdmin':
                return navigation([
                    {name: 'companyAdmin1', link: '/companyAdmin1'},
                    {name: 'companyAdmin2', link: '/companyAdmin2'},
                    {name: 'companyAdmin3', link: '/companyAdmin3'},
                    {name: 'companyAdmin4', link: '/companyAdmin4'}]);
            case 'manager':
                return navigation([
                    {name: 'manager1', link: '/manager1'},
                    {name: 'manager2', link: '/manager2'},
                    {name: 'manager3', link: '/manager3'},
                    {name: 'manager4', link: '/manager4'}]);
            case 'operator':
                return navigation([
                    {name: 'Search carrier', link: '/searchCarrier'},
                    {name: 'Add driver', link: '/driveRegistration'},
                    {name: 'operator3', link: '/operator3'},
                    {name: 'operator4', link: '/operator4'}]);
            case 'controller':
                return navigation([
                    {name: 'controller1', link: '/controller1'},
                    {name: 'controller2', link: '/controller2'},
                    {name: 'controller3', link: '/controller3'},
                    {name: 'controller4', link: '/controller4'}]);

            default:
                return null
        }
    };

    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                    Company name
                </Typography>
                <NavigationBar
                />
                <Button color="primary" variant="outlined" className={classes.link} onClick={logout}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {logoutUser})(Header)