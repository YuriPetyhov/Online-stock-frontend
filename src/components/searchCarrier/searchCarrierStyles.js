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

}));

export default useStyles