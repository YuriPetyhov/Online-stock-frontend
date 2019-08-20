import React, {useState } from 'react';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useStyles from "../searchCarrier/searchCarrierStyles";
import {searchCarrier} from "../../servies/searchCarrier";
import SearchIcon from '@material-ui/icons/Search';

const SearchCarrier = (props) => {
    const [passport, setPassport] = useState('');
    const handleInputChange = (e) => {
        setPassport(e.target.value)
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const  findCarrier = {
            passport: passport,
        };

        searchCarrier(findCarrier)
            .then((res) => {
                if(res.data._id ) {
                    props.history.push('/addTtn')
                }
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

export default SearchCarrier