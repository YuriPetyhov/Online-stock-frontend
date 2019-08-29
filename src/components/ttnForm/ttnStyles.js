import {makeStyles} from '@material-ui/core/styles';
import {bool} from "prop-types";

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            background: 'linear-gradient(45deg, #b7bde8 30%, #5f1d66 90%)',
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    dateInput: {
        width: "100%"
    },
    description: {
        width: "100%",
        resize: "none",
        fontSize: "1rem",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        fontWeight: "400",
        lineHeight: "1",
        letterSpacing: "0.01071em",
        color: "rgba(0, 0, 0, 0.54)"
    },
    select: {
        '&  .css-yk16xz-control' : {
            background: 'none',
            borderColor: "rgba(0, 0, 0, 0.23)"
        },
        '&  .css-1wa3eu0-placeholder' : {
            background: 'none',
            fontSize: "1rem",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            fontWeight: "400",
            lineHeight: "1",
            letterSpacing: "0.01071em",
            color: "rgba(0, 0, 0, 0.54)",
            borderColor: "rgba(0, 0, 0, 0.23)"
        },
        '& .css-26l3qy-menu': {
            zIndex: "99999999"
        }


    }
}));

export default useStyles