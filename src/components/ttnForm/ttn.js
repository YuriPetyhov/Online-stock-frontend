import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import useStyles from './ttnStyles';
import SearchIcon from "@material-ui/core/SvgIcon/SvgIcon";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';


const TtnForm = () => {
    const[ttn, setTtn] = useState({});
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    function handleDateChange(date) {
        setSelectedDate(date);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

    };

    const handleInputChange = (e) => setTtn({...ttn, [e.target.name]: e.target.value})

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
                        Add TTN
                    </Typography>
                    <ValidatorForm className={classes.form} noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextValidator
                                    className="dateInput"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="number"
                                    label="TTN number"
                                    name="TTNNumber"
                                    autoComplete="TTNNumber"
                                    onChange={handleInputChange}
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
                                        label="Date picker inline"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
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

export default TtnForm;