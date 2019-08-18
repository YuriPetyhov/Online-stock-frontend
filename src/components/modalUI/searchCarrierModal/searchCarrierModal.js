import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom'
export default function AlertDialog() {
    const [open, setOpen] = React.useState(true);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                         К сожелению такого перевозчика нет, хотите добавить
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Link onClick={handleClose} color="primary">
                        Нет, спасибо
                    </Link>
                    <Link to="/driveRegistration" onClick={handleClose} color="primary" autoFocus>
                        Да, хочу
                    </Link>
                </DialogActions>
            </Dialog>
        </div>
    );
}