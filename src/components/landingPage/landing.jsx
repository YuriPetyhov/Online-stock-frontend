import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {SocialIcon} from 'react-social-icons';

import useStyles from './landingStyles'

import image from '../../resources/images/our-product.jpg'
import slide1 from '../../resources/images/slide1.jpg'
import slide2 from '../../resources/images/slide2.jpg'
import slide3 from '../../resources/images/slide3.jpg'
import slide4 from '../../resources/images/slide4.jpg'
import slide5 from '../../resources/images/slide5.jpg'

export default function Landing() {
    const classes = useStyles();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        Company name
                    </Typography>
                    <Button href="/login" color="primary" variant="outlined" className={classes.link}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <Box maxWidth="xl">
                <img src={image} style={{width: '100%'}}/>
            </Box>
            <Container component="main" className={classes.heroContent}>

                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Industrial and Commercial Warehousing
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    Lighting can be the single largest energy cost for commercial and industrial buildings.
                    LED lighting systems deliver better, sharper, higher-quality lighting and light levels at
                    a fraction of the energy cost. Performing site inspection audits with follow-up
                    photometrics to support lighting recommendations is key to proper foot-candles.
                    When possible, incorporating lighting controls is ideal for improving energy efficiency.
                </Typography>
            </Container>
            <Container maxWidth="md" component="main" className={classes.heroContent}>
                <Box>
                    <Slider {...settings}>
                        <div>
                            <img src={slide1} style={{width: '100%'}}/>
                        </div>
                        <div>
                            <img src={slide2} style={{width: '100%'}}/>
                        </div>
                        <div>
                            <img src={slide3} style={{width: '100%'}}/>
                        </div>
                        <div>
                            <img src={slide4} style={{width: '100%'}}/>
                        </div>
                        <div>
                            <img src={slide5} style={{width: '100%'}}/>
                        </div>
                    </Slider>
                </Box>
            </Container>
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

        </React.Fragment>
    );
}