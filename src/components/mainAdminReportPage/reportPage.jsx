import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import DeleteIcon from '@material-ui/icons/Delete';

import Container from '@material-ui/core/Container';

import useStyles from './reportPageStyles'

import DataInput from './dataInput'

import Char from './char'

export default function Report() {
    const classes = useStyles();

    const [fromDate, setFromDate] = useState(new Date('2014-08-18T21:11:54'));
    const [toDate, setToDate] = useState(new Date());
    const [charVisibility, setCharVisibility] = useState(false);


    function handleCharChange() {
        console.log(charVisibility)
        setCharVisibility(!charVisibility);
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Container  component="main" className={classes.heroContent}>
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
               />
            </Container>
        </React.Fragment>
    );
}