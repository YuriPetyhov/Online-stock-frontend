 import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import AdminRegister from "../registerAdmin/registerAdmin";
import DriverRegistrer from '../registerDrive';
import Home from '../homePage/homePage';
import Login from '../loginPage/login';
import Report from '../mainAdminReportPage/reportPage'
import Header from '../header/header';
import Footer from '../footer/footer';
import Companies from '../companiesListPage/companiesList'
import Carrier from '../searchCarrier';
import Landing from '../landingPage/landing'
import AllCarrier from '../allCarrier';
import TtnForm from '../ttnForm';
import AddCarrier from "../carrierForm";

const SecurityRoute = (props) => {
    if (props.auth.isAuthenticated) {
        switch (props.auth.user.role) {
            case 'manager':
                return (
                    <div>
                        <Header/>
                        <Switch>
                            <Route path="/manager1" exact component={AdminRegister}/>
                            <Route path="/manager2" exact component={AdminRegister}/>
                            <Route path="/manager3" exact component={AdminRegister}/>
                            <Route path="/manager4" exact component={AdminRegister}/>
                            <Route component={Home}/>
                        </Switch>
                        <Footer/>
                    </div>
                );
            case 'operator':
                return (
                    <div>
                        <Header/>
                        <Switch>
                            <Route exact path="/searchCarrier" component={Carrier}/>
                            <Route exact path="/driveRegistration" component={DriverRegistrer}/>
                            <Route exact path="/allCarrier" component={AllCarrier} />
                            <Route exact path="/addCarrier" component={AddCarrier} />
                            <Route exact path="/addTtn" component={TtnForm} />
                            <Route component={Home}/>
                        </Switch>
                        <Footer/>
                    </div>
                );
            case 'controller':
                return (
                    <div>
                        <Header/>
                        <Switch>
                            <Route exact path="/controller1" component={AdminRegister}/>
                            <Route exact path="/controller2" component={AdminRegister}/>
                            <Route exact path="/controller3" component={AdminRegister}/>
                            <Route exact path="/controller4" component={AdminRegister}/>
                            <Route component={Home}/>
                        </Switch>
                        <Footer/>
                    </div>
                );
            case 'mainAdmin':
                return (
                    <div>
                        <Header/>
                        <Switch>
                            <Route exact path="/newCompanyAdmin" component={AdminRegister}/>
                            <Route exact path="/reports" component={Report}/>
                            <Route exact path="/companiesList" component={Companies}/>
                            <Route component={Home}/>
                        </Switch>
                        <Footer/>
                    </div>
                );
            case 'companyAdmin':
                return (
                    <div>
                        <Header/>
                        <Switch>
                            <Route exact path="/myWarehouses" component={AdminRegister}/>
                            <Route exact path="/companyAdmin2" component={AdminRegister}/>
                            <Route exact path="/companyAdmin3" component={AdminRegister}/>
                            <Route component={Home}/>
                        </Switch>
                        <Footer/>
                    </div>
                );
            default:
                return <Redirect to={{pathname: '/'}}/>
        }

    } else {
        return (

            <div>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route component={Landing}/>
                </Switch>
                <Footer/>
            </div>
        )

    }
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(SecurityRoute)