import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Slider from '@material-ui/core/Slider';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import useStyles from './warehousePageStyles'

export default function SignUp() {
    const classes = useStyles();

    const [values, setValues] = useState({
        name: '',
        license: '',
        type: false,
        totalArea: '',
    });

    const [totalArea, setTotalArea] = useState(10);
    const [list, setList] = useState([]);

    const handleInputChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

    const handleChangeArea = (value) => {
        setTotalArea(value);
    };

    const handleAddArea = () => {

        const AreaCard =
            <Card className={classes.card} key={totalArea}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>

        setList(list.push(AreaCard),
        console.log(list))

    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <Container component="main" maxWidth="xl">
            <CssBaseline/>
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Create new warehouse
                </Typography>
                <ValidatorForm className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextValidator
                                required
                                fullWidth
                                label="Warehouse name"
                                name="name"
                                value={values.name}
                                onChange={handleInputChange}
                                validators={['required', 'minStringLength:2', 'maxStringLength:30']}
                                errorMessages={['this field is required', 'the value must be at least 2 characters', 'the value must be no more than 30 characters']}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                required
                                fullWidth
                                label="Warehouse license number"
                                name="license"
                                type='number'
                                value={values.license}
                                onChange={handleInputChange}
                                validators={['required', 'minStringLength:15', 'maxStringLength:15']}
                                errorMessages={['this field is required', 'the value must be 15 characters', 'the value must be 15 characters']}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography gutterBottom>
                                Warehouse total area
                            </Typography>
                            <Slider
                                defaultValue={0}
                                getAriaValueText={handleChangeArea}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={10}
                                marks
                                min={10}
                                max={1000}
                            />
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </div>

            <div className={classes.paper}>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography component="h1" variant="h5">
                                    Create warehouse area
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl className={classes.formControl} required>
                                    <InputLabel>Type</InputLabel>
                                    <Select
                                        value={values.type}
                                        onChange={handleInputChange}
                                        inputProps={{
                                            name: 'type',
                                        }}
                                    >
                                        <MenuItem value='heated'>Heated</MenuItem>
                                        <MenuItem value='unheated'>Unheated</MenuItem>
                                        <MenuItem value='cooling'>Cooling chamber</MenuItem>
                                        <MenuItem value='outdoor'>Outdoor</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography id="discrete-slider" gutterBottom>
                                    Area (m<sup>2</sup>)
                                </Typography>
                                <Slider
                                    defaultValue={0}
                                    valueLabelDisplay="auto"
                                    step={10}
                                    marks
                                    min={10}
                                    max={totalArea}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>

                    <CardActions>
                        <Button variant="contained" color="primary" disabled={!values.type}
                                onClick={handleAddArea}>Add </Button>
                    </CardActions>
                </Card>
            </div>
            <div className={classes.paper}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Create warehouse
                </Button>
            </div>
            <div className={classes.paperList}>
                {list}
            </div>
        </Container>
    );
}