import React  from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {uid} from 'react-uid';
import { connect } from 'react-redux';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

const rootAdminLink =  [
    {label: "admin 1", href: "/smthcompanyAdmin1", pageInx: 0 },
    {label: "admin 2", href: "/smthcompanyAdmin2", pageInx: 1 },
    {label: "admin 3", href: "/smthcompanyAdmin3", pageInx: 2 },

];

const companyAdminLink = [
    {label: "companyAdmin 1", href: "/companyAdmin", pageInx: 3 },
    {label: "companyAdmin 2", href: "/companyAdmin", pageInx: 4 },
    {label: "companyAdmin 3", href: "/companyAdmin", pageInx: 5 },

];

const usersLink =  [
    {label: "users 1", href: "/users1", pageInx: 6 },
    {label: "users 2", href: "/users2", pageInx: 7 },
    {label: "users 3", href: "/users3", pageInx: 8 },

];

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={event => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

 function NavTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const{role} = props;
    let current = null;
    if(role === "manager" || role === "operator" || role === "controller"){
        current = usersLink
    } else if(role === "mainAdmin") {
        current = rootAdminLink;
    } else if(role === "companyAdmin"){
        current = companyAdminLink;
    }
    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                >
                    {
                        current.map((item) => {
                            return <LinkTab label={item.label} key={uid(item)} href={item.href} {...a11yProps(item.pageInx)} />
                        })
                    }

                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                Page One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Page Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Page Three
            </TabPanel>

            <TabPanel value={value} index={3}>
                companyAdmin One
            </TabPanel>
            <TabPanel value={value} index={4}>
                companyAdmin Two
            </TabPanel>
            <TabPanel value={value} index={5}>
                companyAdmin Three
            </TabPanel>
        </div>
    );
}

NavTabs.propTypes = {
    role: PropTypes.string.isRequired
};
const mapStateToProps = (state) => ({
    role: state.auth.user.role
});
export default connect( mapStateToProps,{})(NavTabs)