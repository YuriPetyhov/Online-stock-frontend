import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        width:'40%',
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
    },
    paperList: {
        marginLeft:'15%',
        backgroundColor:'red',
        width:'40%',
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
    },
    formControl: {
        width: '100%'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    card: {
        marginTop: theme.spacing(7),
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

export default useStyles