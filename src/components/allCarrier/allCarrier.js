import React, {useState, useEffect } from 'react';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import useStyles from "../searchCarrier/searchCarrierStyles";
import {allCarriers} from "../../servies/allCarrier";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AllCarrierTable from '../../asssets/carrierTable';

const AllCarrier = () => {
    const classes = useStyles();
    const[carriers, setCarriers] = useState([]);
    useEffect(() => {
        allCarriers()
            .then((res) => {
                setCarriers(res.data)

            })
            .catch((err) => {
                console.error(err)
            })
    },[])
    return (
        <React.Fragment>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LocalShippingIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      All Carriers
                    </Typography>
                </div>
            </Container>
            <AllCarrierTable rows = {carriers} />
        </React.Fragment>
        )
};
export default AllCarrier;
