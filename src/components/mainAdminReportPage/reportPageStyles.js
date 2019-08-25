import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
        ul: {
            margin: 0,
            padding: 0,
        },
        li: {
            listStyle: 'none',
        },
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6)
    },
    time:{
        padding: theme.spacing(3, 0, 6),
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
    button: {
        margin: theme.spacing(3),
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
}));

export default useStyles