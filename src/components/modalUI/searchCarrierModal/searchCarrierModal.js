import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Link } from 'react-router-dom';
import styles from './searchCarrierModal.css';

export default function AlertDialog(props) {
    const [open, setOpen] = React.useState(true);
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
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                         К сожелению такого перевозчика нет, хотите добавить
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Link className = 'link' to="/searchCarrier" onClick={props.closeModal} color="primary">
                        Нет, спасибо
                    </Link>
                    <Link className = 'link' to="/driveRegistration" onClick={handleClose} color="primary">
                        Да, хочу
                    </Link>
                </DialogActions>
            </Dialog>
        </div>
    );
}