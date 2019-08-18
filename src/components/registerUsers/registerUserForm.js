import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid/index'
import TextField from '@material-ui/core/TextField/index'
import {Select} from '@material-ui/core/index'
import InputLabel from '@material-ui/core/InputLabel/index'
import Button from '@material-ui/core/Button/index'
import MenuItem from '@material-ui/core/MenuItem/index'


export default ({onSubmit, roles}) => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        patronymic: '',
        dateOfBirth: '',
        email: '',
        city: '',
        street: '',
        house: '',
        apartment: '',
        role: [],
        login: '',
        password: ''
    })

    const handleInputChange = (e) => setForm({...form, [e.target.name]: e.target.value})

    const handleSubmit = () => onSubmit(form)


    return <Grid container spacing={3}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    name='lastName'
                    label='Last name'
                    value={form.lastName}
                    onChange={handleInputChange}
                    inputProps={{'data-testid': 'last_name'}}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label='First name'
                    name='firstName'
                    value={form.name}
                    onChange={handleInputChange}
                    inputProps={{'data-testid': 'name'}}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    label='Patronymic'
                    name='patronymic'
                    value={form.patronymic}
                    onChange={handleInputChange}
                    inputProps={{'data-testid': 'patronymic'}}
                />
            </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    type='date'
                    name='dateOfBirth'
                    label='Date of birth'
                    value={form.dateOfBirth}
                    onChange={handleInputChange}
                    InputLabelProps={{shrink: true}}
                    inputProps={{'data-testid': 'date-of-birth'}}
                />
            </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    name='email'
                    label='E-mail'
                    value={form.email}
                    onChange={handleInputChange}
                    inputProps={{'data-testid': 'email'}}
                />
            </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    name='city'
                    label='City'
                    value={form.city}
                    onChange={handleInputChange}
                    inputProps={{'data-testid': 'city'}}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    name='street'
                    label='Street'
                    value={form.street}
                    onChange={handleInputChange}
                    inputProps={{'data-testid': 'street'}}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    name='house'
                    value={form.house}
                    label='Street number'
                    onChange={handleInputChange}
                    inputProps={{'data-testid': 'house'}}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    name='apartment'
                    value={form.apartment}
                    label='Apartment number'
                    onChange={handleInputChange}
                    inputProps={{'data-testid': 'apartment'}}
                />
            </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <InputLabel htmlFor='role'>Роль</InputLabel>
                <Select
                    required
                    multiple
                    fullWidth
                    onChange={handleInputChange}
                    inputProps={{
                        name: 'role',
                        value: form.role
                    }}
                >
                    {roles.map(({value, title}) => <MenuItem
                            key={value}
                            value={value}
                            children={title}
                            data-testid={title}
                        />
                    )}
                </Select>
            </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    name='login'
                    label='Login'
                    value={form.login}
                    onChange={handleInputChange}
                    inputProps={{'data-testid': 'login'}}
                />
            </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    name='password'
                    type='password'
                    label='Password'
                    value={form.password}
                    onChange={handleInputChange}
                    inputProps={{'data-testid': 'password'}}
                />
            </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Button
                type='submit'
                color='primary'
                children='Submit'
                variant='contained'
                data-testid='submit'
                onClick={handleSubmit}
            />
        </Grid>
    </Grid>
}