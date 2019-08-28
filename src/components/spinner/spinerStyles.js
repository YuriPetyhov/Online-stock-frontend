import { makeStyles } from '@material-ui/core/styles';
const SpinnerStyles = makeStyles(theme => ({
    progress: {
        position: "absolute",
        top: "50%",
        left: "50%",
       // transform: "translate(-50%, -50%)"
    },
}));

export default  SpinnerStyles;