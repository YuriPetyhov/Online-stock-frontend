import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    footer: {
        padding: theme.spacing(2),
        marginTop: 'auto',
        backgroundColor: 'white',
    },
    card: {
        marginTop: theme.spacing(5)
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 20,
    },
    pos: {
        marginBottom: 12,
    },
}));

export default useStyles