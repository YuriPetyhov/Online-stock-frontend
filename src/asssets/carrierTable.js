import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {uid} from 'react-uid';
const useStyles = makeStyles(theme => ({
    root: {
        width: '25%',
        margin:"25px auto",
        overflowX: 'auto',
    },
    table: {
        minWidth: 150,
    },
}));

export default function SimpleTable(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Carrier</TableCell>
                        <TableCell align="right">Email&nbsp;</TableCell>
                        <TableCell align="right">Phone&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map(row => (
                        <TableRow key={uid(row)}>
                            <TableCell component="th" scope="row">
                                {row.company}
                            </TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.tel}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}