import React, { useState } from 'react'
import Typography from "@material-ui/core/Typography";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {registerDeliver} from "../../servies/registerDeliver";
import {
    Grid, Button, Container, Input,Select, Box, 
    TextField, InputLabel, MenuItem, FormControl,
} from '@material-ui/core';


const DeliveryFromStockForm = () => {

    // *** Hooks ***

    const initialState = {
        ttnNumber: '',
        ttnDate: '',
        recCompany: '',
        transporter: '',
        transportNumber: '',
        carDriverData: '',
        consignmentDescription: '',
        goodsAmount: '',
        goodsTypesAmount: '',
        managerName: '',
        registerDate: '',
        consignmentLabeling: '',
    }

    const [state, setState] = useState(initialState);

    // *** Functions ***

    const handleChange = e => {
        setState({...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        registerDeliver(state)
    }

    // *** View ***

    return (
        <Container component="main" maxWidth="xs">
            <Box my={12}>
                <Box my={3}>
                    <Typography component="h1" variant="h5">
                        Register the delivery from stock
                    </Typography>
                </Box>
                <ValidatorForm onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box my={1.5}>
                                <TextValidator
                                    required
                                    fullWidth
                                    id="ttnNumber"
                                    label="TTN number"
                                    name="ttnNumber"
                                    autoComplete="ttnNumber"
                                    onChange={handleChange}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box my={1.5}>
                                <TextValidator
                                    required
                                    fullWidth
                                    id="ttnDate"
                                    label="TTN date"
                                    name="ttnNumber"
                                    autoComplete="ttnNumber"
                                    disabled
                                    onChange={handleChange}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box my={1.5}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="age-helper">Recipient company*</InputLabel>
                                    <Select
                                        value={'poc'}
                                        onChange={handleChange}
                                        input={<Input name="recCompany" id="age-helper" />}
                                        name="recCompany"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box my={1.5}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="age-helper">Transporter*</InputLabel>
                                    <Select
                                        value={'poc'}
                                        onChange={handleChange}
                                        input={<Input name="transporter" id="age-helper" />}
                                        name="transporter"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box my={1.5}>
                                <TextValidator
                                    required
                                    fullWidth
                                    id="ttnNumber"
                                    label="Transport number"
                                    name="transportNumber"
                                    autoComplete="ttnNumber"
                                    onChange={handleChange}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    {/* ========== If transport type is a car =========== */}
                    <Grid container>
                        <Grid item xs={12}>
                            <Box my={1}>
                                <TextField
                                    required
                                    id="outlined-multiline-static"
                                    label="Car driver data"
                                    multiline
                                    rows="5"
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleChange}
                                    name="carDriverData"
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    {/* ==========****************************=========== */}
                    <Grid container>
                        <Grid item xs={12}>
                            <Box my={0}>
                                <TextField
                                    required
                                    id="outlined-multiline-static"
                                    label="Description of the consignment"
                                    multiline
                                    rows="5"
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleChange}
                                    name="consignmentDescription"
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box my={1}>
                                <TextValidator
                                    required
                                    fullWidth
                                    id="ttnNumber"
                                    label="The amount of goods on TTN"
                                    name="goodsAmount"
                                    autoComplete="ttnNumber"
                                    onChange={handleChange}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} >
                            <Box my={1.5}>
                                <TextValidator
                                    required
                                    fullWidth
                                    id="ttnNumber"
                                    label="The number of good's types on TTN"
                                    name="goodsTypesAmount"
                                    autoComplete="ttnNumber"
                                    onChange={handleChange}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} >
                            <Box my={1.5}>
                                <TextValidator
                                    required
                                    fullWidth
                                    id="ttnNumber"
                                    label="Manager name"
                                    name="managerName"
                                    autoComplete="ttnNumber"
                                    onChange={handleChange}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} >
                            <Box my={1.5}>
                                <TextValidator
                                    required
                                    fullWidth
                                    id="ttnNumber"
                                    label="Registration date and time  of TTN"
                                    name="registerDate"
                                    autoComplete="ttnNumber"
                                    onChange={handleChange}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box my={1}>
                                <TextField
                                    required
                                    id="outlined-multiline-static"
                                    label="Description and labeling of the consignment"
                                    multiline
                                    rows="10"
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleChange}
                                    name="consignmentLabeling"
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Box mt={3}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Register delivery
                        </Button>
                    </Box>
                </ValidatorForm>
            </Box>
        </Container>
    )
}

export default DeliveryFromStockForm