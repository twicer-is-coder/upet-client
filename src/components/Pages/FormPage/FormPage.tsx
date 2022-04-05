import React from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Header from '../../Header/Header';

const MainContainer = styled('div')({
    // backgroundColor: 'aliceblue',
    padding: '0.5rem 1rem',
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

const SubmitButton = styled(Button)({
    marginTop: '1rem',
    backgroundColor: '#31E6C0',
    color: '#ffffff',
    height: '4rem',
    boxShadow: 'none',
    '&:hover': {
        backgroundColor: '#31E6A0',
        borderColor: '#0062cc',
        boxShadow: 'none',
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
                                    <img style={{ height: "25px", width: "25px", marginRight: "10px" }} src="https://svgshare.com/i/fzr.svg" alt="US FLAG" />
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

                    <Grid item xs={12}>
                        <SubmitButton fullWidth variant="contained">Next</SubmitButton>
                    </Grid>

                </Grid>
            </form>

        </MainContainer>
    )
}
