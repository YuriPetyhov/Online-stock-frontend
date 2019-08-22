import React, {useState } from 'react';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useStyles from "../searchCarrier/searchCarrierStyles";
import {searchCarrier} from "../../servies/carrierServies";
import {findDriver} from "../../servies/driverServies";
import SearchIcon from '@material-ui/icons/Search';
import {connect} from 'react-redux';
import {GET_ERRORS} from "../../actions/types";

const SearchCarrier = (props) => {
    const [passport, setPassport] = useState('');
    const [driver, setDriver] = useState('');

    const handleInputChange = (e) => {
        setPassport(e.target.value);
    };
    const handleDriverInputChange = (e) => {
        setDriver(e.target.value)
    };
    const handleSubmitCarrier = (e) => {
        e.preventDefault();

        const  findCarrier = {
            passport: passport,
        };
        searchCarrier(findCarrier)
            .then((res) => {
                props.dispatch({
                    type:GET_ERRORS,
                    payload: {}
                })
                if(res.data._id ) {
                    props.history.push('/addTtn')
                } else {
                    props.history.push('/addCarrier')
                }
            })
            .catch((err) => {
                props.dispatch({
                    type:GET_ERRORS,
                    payload: {carrier:`This field musn't be empty`}
                })
            })

};
    const handleSubmitDriver = (e) => {
        e.preventDefault();

            const driverLicense = {
                license: driver,
            };
            findDriver(driverLicense)
                .then((res) => {
                    props.dispatch({
                        type:GET_ERRORS,
                        payload: {}
                    })
                    if(!res.data._id ) {
                        props.history.push('/driveRegistration')
                    } else {
                        props.history.push('/addTtn')
                    }
                })
                .catch((err) => {
                    props.dispatch({
                        type:GET_ERRORS,
                        payload: {driver:"This field musn't be empty"}
                    })

                })

    };

    const classes = useStyles();

    return (
    <React.Fragment>
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <SearchIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Search Carrier
                </Typography>
                <ValidatorForm className={classes.form} noValidate onSubmit={handleSubmitCarrier}>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextValidator
                            type="number"
                            variant="outlined"
                            required
                            fullWidth
                            id="company"
                            label="Passport number"
                            name="company"
                            autoComplete="company"
                            onChange={handleInputChange}
                        />
                    </Grid>
                        {props.carrierErr}
                </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Search
                    </Button>
                </ValidatorForm>
                <Avatar className={classes.avatar}>
                     <SearchIcon />
                 </Avatar>
                <Typography component="h1" variant="h5">
                    Search Driver
                </Typography>
                <ValidatorForm className={classes.form} noValidate onSubmit={handleSubmitDriver}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                required
                                fullWidth
                                id="driver"
                                label="Driver name"
                                name="driver"
                                autoComplete="driver"
                                onChange={handleDriverInputChange}
                            />
                        </Grid>
                        {props.driverErr}
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Search
                    </Button>
                </ValidatorForm>
            </div>
        </Container>

    </React.Fragment>

    )

}

const mapStateToProps = state => ({
    driverErr: state.errors.driver,
    carrierErr: state.errors.carrier,
    store: state
})

export default connect(mapStateToProps, null)(SearchCarrier)