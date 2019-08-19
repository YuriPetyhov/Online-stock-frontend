import React, {useState } from 'react';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useStyles from "../searchCarrier/searchCarrierStyles";
import {connect} from "react-redux";
import {searchCarrier} from "../../servies/searchCarrier";
import SearchCarrierModal from '../modalUI/searchCarrierModal';
import SearchIcon from '@material-ui/icons/Search';
import CarrierTable from './carrierTable';

const SearchCarrier = (props) => {
    const [company, setCompany] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const[carrier, setCarrier] = React.useState([]);
    const[Info, setInfo] = React.useState(false);
    const handleInputChange = (e) => {
        setCompany(e.target.value)
    };

    const handleModalOpen = () => {
        setModalOpen(true)
    }
    const handleModalClose = () => {
        setModalOpen(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const  findCarrier = {
            company: company,
        };

        searchCarrier(findCarrier)
            .then((res) => {
                if(res.data.length < 1) {
                    handleModalOpen();
                } else {
                    setInfo(true);
                    setCarrier(res.data);
                }
            })
};

    const classes = useStyles();

    return (
    <React.Fragment>
        <Container component="main" maxWidth="xs">
            {modalOpen ? <SearchCarrierModal  closeModal = {handleModalClose}/> : null}
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
        {Info
            ? (  <CarrierTable rows = { [{"company": carrier.company, "email": carrier.email, "tel": carrier.tel}] } /> )
            : null
        }
    </React.Fragment>

    )

}

export default connect(null, null)(SearchCarrier)