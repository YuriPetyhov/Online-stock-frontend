import React, {useEffect, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Select from 'react-select';
import useStyles from './companiesListStyles'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import Moment from 'react-moment';

import 'sweetalert2/src/sweetalert2.scss'
import {getCompaniesList, getCompany, changeStatus} from '../../actions/companyUserAction';

const Companies = (props) => {
    const classes = useStyles();

    useEffect(() => {
        props.getCompaniesList()
    }, []);


    const [companyName, setCompanyName] = useState(false);

    const handleChangeCompanyName = (e) => {
        props.getCompany({company: e.value});
        setCompanyName(e.value)
    };

    const handleChangeStatus = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to change company status?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Accept',
            allowOutsideClick: false
        }).then((result) => {
            if (result.value) {
                changeStatus({
                    id: props.currentCompany._id,
                }, props.getCompaniesList);
                Swal.fire({
                    type: 'success',
                    title: 'Congratulations!',
                    text: 'Data successfully changed !',
                    allowOutsideClick: false,
                    timer: 3000
                }).then(() => {
                    window.location.reload()
                })
            }
        })

    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Container component="main" className={classes.main} maxWidth="sm">
                <Typography variant="h5" align="center" color="textSecondary" component="p" className={classes.main}>
                    Find company by email or name
                </Typography>
                <Select
                    onChange={handleChangeCompanyName}
                    options={props.companiesList}
                />
                {companyName ? (<Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Company name: <span className={classes.bullet}>{props.currentCompany.company}</span>
                        </Typography>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Company admin email: <span className={classes.bullet}>{props.currentCompany.email}</span>
                        </Typography>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Creation date: <span className={classes.bullet}><Moment format="D MMM YYYY" withTitle>{props.currentCompany.date}</Moment></span>
                        </Typography>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Status: <span
                            className={classes.bullet}>{props.currentCompany.active ? ('Active') : ('Not active')}</span>
                        </Typography>

                    </CardContent>
                    <CardActions>
                        {props.currentCompany.active ? (
                                <Button size="small" variant="contained" color="secondary"
                                        onClick={handleChangeStatus}>Deactivate</Button>)
                            : (<Button size="small" variant="contained" color="primary"
                                       onClick={handleChangeStatus}>Activate</Button>)}
                    </CardActions>
                </Card>) : null}

            </Container>
        </div>
    );
};

Companies.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    companiesList: state.companiesList,
    currentCompany: state.currentCompany
});

export default connect(mapStateToProps, {getCompaniesList, getCompany, changeStatus})(Companies)