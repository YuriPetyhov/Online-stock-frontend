import React, {useEffect} from 'react';
import {logoutUser} from '../../actions/authenticationAction';

import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Container from '@material-ui/core/Container';
import DraftsIcon from "@material-ui/icons/Drafts";
import {Link} from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

import {connect} from "react-redux";

const Header = (props) => {

console.log(props)
    const [selectedIndex, setSelectedIndex] = React.useState();

    function handleListItemClick(event, index) {
        setSelectedIndex(index);
    }

    const logout=(e)=>{
        e.preventDefault();
        props.logoutUser()
    }

    const useStyles = makeStyles(theme => ({
        list: {
            display: "flex",
            flexDirection: "row"
        },
        button: {
            margin: theme.spacing(1),
        },
        input: {
            display: 'none',
        },
    }));
    const classes = useStyles();
    const mainAdmin = (
        <List
            component="nav"
            aria-label="main mailbox folders"
            className={classes.list}
        >
            <ListItem
                button
                selected={selectedIndex === 0}
                onClick={event => handleListItemClick(event, 0)}
            >
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <Link to='/rootAdmin1'>admin 1</Link>
            </ListItem>
            <ListItem
                button
                selected={selectedIndex === 1}
                onClick={event => handleListItemClick(event, 1)}
            >
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <Link to='/rootAdmin1'>admin 2</Link>
            </ListItem>
            <ListItem
                button
                selected={selectedIndex === 2}
                onClick={event => handleListItemClick(event, 2)}
            >
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <Link to='/rootAdmin1'>admin 3</Link>
            </ListItem>
            <ListItem
                button
                selected={selectedIndex === 3}
                onClick={event => handleListItemClick(event, 3)}
            >
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <Link to='/rootAdmin1'>admin4</Link>
            </ListItem>
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
            >
                <AccountCircle/>
            </IconButton>
            <Button variant="contained" color="secondary" className={classes.button} onClick={logout}>
                Logout
            </Button>
        </List>
    )

    const companyAdmin = (
        <List
            component="nav"
            aria-label="main mailbox folders"
            className={classes.list}
        >
            <ListItem
                button
                selected={selectedIndex === 0}
                onClick={event => handleListItemClick(event, 0)}
            >
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <Link to='/companyAdmin1'>companyAdmin 1</Link>
            </ListItem>
            <ListItem
                button
                selected={selectedIndex === 1}
                onClick={event => handleListItemClick(event, 1)}
            >
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <Link to='/companyAdmin2'>companyAdmin 2</Link>
            </ListItem>
            <ListItem
                button
                selected={selectedIndex === 2}
                onClick={event => handleListItemClick(event, 2)}
            >
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <Link to='/companyAdmin3'>companyAdmin 3</Link>
            </ListItem>
            <ListItem
                button
                selected={selectedIndex === 3}
                onClick={event => handleListItemClick(event, 3)}
            >
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <Link to='/companyAdmin4'>companyAdmin 4</Link>
            </ListItem>
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
            >
                <AccountCircle/>
            </IconButton>
            <Button variant="contained" color="secondary" className={classes.button} onClick={logout}>
                Logout
            </Button>
        </List>
    )

    const controller = (
        <List
            component="nav"
            aria-label="main mailbox folders"
            className={classes.list}
        >
            <ListItem
                button
                selected={selectedIndex === 0}
                onClick={event => handleListItemClick(event, 0)}
            >
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <Link to='/controller1'>controller 1</Link>
            </ListItem>
            <ListItem
                button
                selected={selectedIndex === 1}
                onClick={event => handleListItemClick(event, 1)}
            >
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <Link to='/controller2'>controller 2</Link>
            </ListItem>
            <ListItem
                button
                selected={selectedIndex === 2}
                onClick={event => handleListItemClick(event, 2)}
            >
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <Link to='/controller3'>controller 3</Link>
            </ListItem>
            <ListItem
                button
                selected={selectedIndex === 3}
                onClick={event => handleListItemClick(event, 3)}
            >
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <Link to='/controller4'>controller 4</Link>
            </ListItem>
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
            >
                <AccountCircle/>
            </IconButton>
            <Button variant="contained" color="secondary" className={classes.button} onClick={logout}>
                Logout
            </Button>
        </List>
    )

    const operator = (
        <List
            component="nav"
            aria-label="main mailbox folders"
            className={classes.list}
        >
            <ListItem
                button
                selected={selectedIndex === 0}
                onClick={event => handleListItemClick(event, 0)}
            >
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <Link to='/operator1'>operator 1</Link>
            </ListItem>
            <ListItem
                button
                selected={selectedIndex === 1}
                onClick={event => handleListItemClick(event, 1)}
            >
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <Link to='/operator2'>operator 2</Link>
            </ListItem>
            <ListItem
                button
                selected={selectedIndex === 2}
                onClick={event => handleListItemClick(event, 2)}
            >
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <Link to='/operator3'>operator 3</Link>
            </ListItem>
            <ListItem
                button
                selected={selectedIndex === 3}
                onClick={event => handleListItemClick(event, 3)}
            >
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <Link to='/controller4'>operator 4</Link>
            </ListItem>
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
            >
                <AccountCircle/>
            </IconButton>
            <Button variant="contained" color="secondary" className={classes.button} onClick={logout}>
                Logout
            </Button>
        </List>
    )

    const manager = (
        <List
            component="nav"
            aria-label="main mailbox folders"
            className={classes.list}
        >
            <ListItem
                button
                selected={selectedIndex === 0}
                onClick={event => handleListItemClick(event, 0)}
            >
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <Link to='/manager1'>manager 1</Link>
            </ListItem>
            <ListItem
                button
                selected={selectedIndex === 1}
                onClick={event => handleListItemClick(event, 1)}
            >
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <Link to='/manager2'>manager 2</Link>
            </ListItem>
            <ListItem
                button
                selected={selectedIndex === 2}
                onClick={event => handleListItemClick(event, 2)}
            >
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <Link to='/manager3'>manager 3</Link>
            </ListItem>
            <ListItem
                button
                selected={selectedIndex === 3}
                onClick={event => handleListItemClick(event, 3)}
            >
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <Link to='/manager4'>manager 4</Link>
            </ListItem>
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
            >
                <AccountCircle/>
            </IconButton>
            <Button variant="contained" color="secondary" className={classes.button} onClick={logout}>
                Logout
            </Button>
        </List>
    )

    let current = null;
    if (props.auth.user.role === 'mainAdmin') {
        current = mainAdmin
    } else if (props.auth.user.role === 'companyAdmin') {
        current = companyAdmin
    } else if (props.auth.user.role === 'controller') {
        current = controller
    } else if (props.auth.user.role === 'operator') {
        current = operator
    } else if (props.auth.user.role === 'manager') {
        current = manager
    }

    return (
        <Container>
            {current}
        </Container>
    );
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {logoutUser})(Header)