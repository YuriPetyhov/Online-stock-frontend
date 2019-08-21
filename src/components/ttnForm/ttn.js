import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import useStyles from './ttnStyles';
import Assignment from "@material-ui/icons/Assignment";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {addTtn} from "../../servies/addTtn";

const TtnForm = (props) => {
    const[ttn, setTtn] = useState({
        TTNNumber: '',
        date: '',
        driver: '',
        products: ''
    });
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    function handleDateChange(date) {
        setSelectedDate(date);

    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const ttnInfo = {
           "date": selectedDate,
           "TTNNumber": ttn.TTNNumber,
            "driver": ttn.driver,
            "carrier": ttn.carrier,
           "products": ttn.products,
            "registrar": props.user
        };
        addTtn(ttnInfo)
            .then((res) => console.log(res))
            .catch((err) => { console.error(err) } )
    }

    const handleInputChange = (e) => {
        setTtn({...ttn, [e.target.name]: e.target.value});
    }

    const classes = useStyles();
    return (
        <React.Fragment>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <Assignment />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Add TTN
                    </Typography>
                    <ValidatorForm className={classes.form} noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextValidator
                                    type="number"
                                    className={classes.input_ttn}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="number"
                                    label="TTN number"
                                    name="TTNNumber"
                                    autoComplete="TTNNumber"
                                    onChange={handleInputChange}
                                    value={ttn.TTNNumber}
                                />
                            </Grid>

                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        className={classes.dateInput}
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Date"
                                        name='date'
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}

                                    />
                                </MuiPickersUtilsProvider>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextValidator
                                className=""
                                variant="outlined"
                                required
                                fullWidth
                                id="info_about_carrier"
                                label="Carrier"
                                name="carrier"
                                autoComplete="carrier"
                                onChange={handleInputChange}
                            />
                        </Grid>

                    </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextValidator
                                    className=""
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="info_about_carrier"
                                    label="Driver"
                                    name="driver"
                                    autoComplete="driver"
                                    onChange={handleInputChange}
                                />
                            </Grid>

                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextValidator
                                    className=""
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="info_about_carrier"
                                    label="Products"
                                    name="products"
                                    autoComplete="carrier"
                                    onChange={handleInputChange}
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
                            Add
                        </Button>
                    </ValidatorForm>
                </div>
            </Container>
            }
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    user: state.auth.user.name
});
export default connect(mapStateToProps, null)(TtnForm);