import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import React from "react";
import Grid from "@material-ui/core/Grid";
import {SocialIcon} from "react-social-icons";
import Container from "@material-ui/core/Container";

import useStyles from '../landingPage/landingStyles'

const Footer = () => {

    const classes = useStyles();

    return (

        <Container maxWidth="sm" component="footer" className={classes.footer}>

            <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
                Social links
            </Typography>
            <Box mt={5}>
                <Grid container spacing={2} justify="space-evenly">
                    <SocialIcon url="http://facebook.com" target='_blank'/>
                    <SocialIcon url="http://twitter.com" target='_blank'/>
                    <SocialIcon url="https://www.instagram.com" target='_blank'/>
                </Grid>
            </Box>
            <Box mt={5}>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://github.com/Kvinto1986/Online-stock-frontend/">
                        Dream Team
                    </Link>{' '}
                    {new Date().getFullYear()}
                </Typography>
            </Box>
        </Container>
    )
}

export default Footer