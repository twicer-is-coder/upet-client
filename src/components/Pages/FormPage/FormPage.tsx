import React from 'react'
import Grid from '@mui/material/Grid';

import { styled } from '@mui/system';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';

import Header from '../../Header/Header';

const MainContainer = styled('div')({
    color: 'darkslategray',
    // backgroundColor: 'aliceblue',
    padding: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
});

const FormInput = styled(TextField)({
    // backgroundColor: '#fff',

    '& label.Mui-focused': {
        color: 'grey',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#DFDFDF',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#DFDFDF',
            borderWidth: '1px',
        },
        '&:hover fieldset': {
            borderColor: '#DFDFDF',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#DFDFDF',
            // border: "solid 1px red",
        },
    },

})

export default function FormPage() {
    return (

        <MainContainer>

            <Header />
            
            <form>
                <Grid container spacing={2}
                // style={{backgroundColor: "green"}}
                >

                    <Grid item xs={6}>
                        <FormInput
                            id="outlined-basic"
                            label="First Name"
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <FormInput
                            id="outlined-basic"
                            label="Last Name"
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <FormInput id="outlined-basic"
                            label="Phone Number"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <FormInput
                            type="email"
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <FormInput
                            type="password"
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>

                </Grid>
            </form>

        </MainContainer>
    )
}
