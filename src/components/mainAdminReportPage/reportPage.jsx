import React, {useEffect, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';

import useStyles from './reportPageStyles'

import DataInput from './dataInput'

import Char from './char'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getStatistic} from "../../actions/companyUserAction";

const Report = (props) => {
    const classes = useStyles();

    const [fromDate, setFromDate] = useState(new Date('2014-08-18T21:11:54'));
    const [toDate, setToDate] = useState(new Date());
    const [charVisibility, setCharVisibility] = useState(false);
    const [statistic, setStatistic] = useState(props.adminCompanyStatistic);

    function handleCharChange() {
        props.getStatistic({
            from: fromDate,
            to: toDate
        });

        setCharVisibility(true)
    }

    useEffect(() => {
        setStatistic(props.adminCompanyStatistic)
    });


    return (
        <React.Fragment>
            <CssBaseline/>
            <Container component="main" className={classes.heroContent}>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    Show report about companies
                </Typography>
                <Container maxWidth="sm" className={classes.time}>
                    <DataInput
                        fromDate={fromDate}
                        handleFromDateChange={setFromDate}
                        toDate={toDate}
                        handleToDateChange={setToDate}
                    />
                    <Button variant="contained" color="primary" className={classes.button} onClick={handleCharChange}>
                        Show statistic
                    </Button>
                </Container>
                <Char
                    charVisibility={charVisibility}
                    fromDate={fromDate}
                    toDate={toDate}
                    statistic={statistic}
                />
            </Container>
        </React.Fragment>
    );
};

Report.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    adminCompanyStatistic: state.adminCompanyStatistic
});

export default connect(mapStateToProps, {getStatistic})(Report)