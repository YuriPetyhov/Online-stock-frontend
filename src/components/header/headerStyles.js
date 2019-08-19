import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({

    appBar: {
        borderBottom: `5px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 2,
    },

    link: {
        margin: theme.spacing(3, 2),
    },

    icon: {
        height: 48,
        margin: theme.spacing(1),
    }
}));

export default useStyles