import React, {useState } from 'react';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useStyles from "../registerDrive/registerDriverStyles";
import {connect} from "react-redux";
import {searchCarrier} from "../../actions/searchCarrier";
import SearchCarrierModal from '../modalUI/searchCarrierModal';
import SearchIcon from '@material-ui/icons/Search';

const SearchCarrier = (props) => {
    const [company, setCompany] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const handleInputChange = (e) => {
        setCompany(e.target.value)
    };

    const handleModal = () => {
        setModalOpen(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const carrier = {
            company: company,
        };

        searchCarrier(carrier)
            .then((res) => {
                if(res.data.length < 1) {
                    handleModal()
                }
            })

    //TODO вот сюда для модалки
};

    const classes = useStyles();

    return (

        <Container component="main" maxWidth="xs">
            {modalOpen ? <SearchCarrierModal/> : null}
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
                                label="Search Carrier"
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
    )

}

export default connect(null, {})(SearchCarrier)