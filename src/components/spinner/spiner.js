import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import SpinnerStyles from "./spinerStyles";

export default function CircularIndeterminate() {
    const classes = SpinnerStyles();

    return (
        <CircularProgress className={classes.progress} />
    );
}