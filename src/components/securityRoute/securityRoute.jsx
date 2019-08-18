import React from 'react';
import {Router, Route} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import AdminRegister from "../registerAdmin/registerAdmin";
import DriverRegistrer from '../registerDrive';
import Home from '../homePage/homePage';
import Login from '../loginPage/login';
import Report from '../mainAdminReportPage/reportPage'
import Header from '../header/header';
import Companies from '../companiesListPage/companiesList'
import Carrier from '../searchCarrier';

const SecurityRoute = (props) => {
    if (props.auth.isAuthenticated) {
        switch (props.auth.user.role) {
            case 'manager':
                return (
                    <div>
                        <Header/>
                        <Route path="/manager1" exact component={AdminRegister}/>
                        <Route path="/manager2" exact component={AdminRegister}/>
                        <Route path="/manager3" exact component={AdminRegister}/>
                        <Route path="/manager4" exact component={AdminRegister}/>
                        <Route exact path="/home" component={Home}/>

                    </div>
                );
            case 'operator':
                return (
                    <div>
                        <Header/>
                        <Route from='/' to="/"/>
                        <Route exact path="/searchCarrier" component={Carrier}/>
                        <Route exact path="/driveRegistration" component={DriverRegistrer}/>
                        <Route exact path="/operator" component={AdminRegister}/>
                        <Route exact path="/operator3" component={AdminRegister}/>
                        <Route exact path="/operator4" component={AdminRegister}/>
                        <Route exact path="/home" component={Home}/>
                    </div>
                );
            case 'controller':
                return (
                    <div>
                        <Header/>
                        <Route from='/' to="/home"/>
                        <Route exact path="/controller1" component={AdminRegister}/>
                        <Route exact path="/controller2" component={AdminRegister}/>
                        <Route exact path="/controller3" component={AdminRegister}/>
                        <Route exact path="/controller4" component={AdminRegister}/>
                        <Route exact path="/home" component={Home}/>
                    </div>
                );
            case 'mainAdmin':
                return (
                    <div>
                        <Header/>
                        <Route exact path="/newCompanyAdmin" component={AdminRegister}/>
                        <Route exact path="/reports" component={Report}/>
                        <Route exact path="/companiesList" component={Companies}/>
                        <Route exact path="/" component={Home}/>
                    </div>
                );
            case 'companyAdmin':
                return (
                    <div>
                        <Header/>
                        <Route exact path="/companyAdmin1" component={AdminRegister}/>
                        <Route exact path="/companyAdmin2" component={AdminRegister}/>
                        <Route exact path="/companyAdmin3" component={AdminRegister}/>
                        <Route exact path="/companyAdmin4" component={AdminRegister}/>
                        <Route exact path="/home" component={Home}/>
                    </div>
                );
            default:
                return <Redirect to={{pathname: '/'}}/>
        }

    } else {
        return (

            <div>
                <Route exact path="/" component={Login}/>
                <Redirect from='*' to="/"/>
            </div>
        )

    }
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(SecurityRoute)