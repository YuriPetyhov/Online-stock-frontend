import React, {useState } from 'react';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useStyles from "./addCarrierStyles";
import {addCarrier} from "../../servies/carrierServies";
import SearchIcon from '@material-ui/icons/Search';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/dist/style.css'

const AddCarrier = (props) => {
    const [carrier, setCarrier] = useState({});
    const[phone, setPhone] = useState("")
    const handleInputChange = (e) => {
        setCarrier({...carrier, [e.target.name]:e.target.value })
    };

    function handleOnChange(value) {
        setPhone( value )
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const  carrierInfo = {
            carrier: carrier,
        };

        console.log(carrierInfo)
        addCarrier(carrierInfo)
            .then((res) => {
                console.log(res)
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
                       Add Carrier
                    </Typography>
                    <ValidatorForm className={classes.form} noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextValidator
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
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextValidator
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="company"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <ReactPhoneInput
                                    inputClass={classes.tel}
                                    buttonClass={classes.drop}
                                    defaultCountry={'by'}
                                     value={carrier.tel}
                                    inputExtraProps={{
                                        name: 'tel',
                                        onChange: handleInputChange
                                    }}
                                    />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextValidator
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="company"
                                    label="Company"
                                    name="company"
                                    autoComplete="company"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextValidator
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="company"
                                    label="Country code"
                                    name="country"
                                    autoComplete="country"
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

        </React.Fragment>

    )

}

export default AddCarrier