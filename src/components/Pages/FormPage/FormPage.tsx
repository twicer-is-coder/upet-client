import React from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Header from '../../Header/Header';

const MainContainer = styled('div')({
    padding: '0.5rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
});

const FormInput = styled(TextField)({

    '& label.Mui-focused': {
        color: '#31E6C0',
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

const getFormattedPhoneNum = (input: string) => {
    let output = "(";
    input.replace(/^\D*(\d{0,3})\D*(\d{0,3})\D*(\d{0,4})/, function (match, g1, g2, g3): any {
        if (g1.length) {
            output += g1;
            if (g1.length === 3) {
                output += ")";
                if (g2.length) {
                    output += " " + g2;
                    if (g2.length === 3) {
                        output += " - ";
                        if (g3.length) {
                            output += g3;
                        }
                    }
                }
            }
        }
    }
    );
    return output;
}

const validateEmail: (emailAdress: string) => boolean = emailAdress => {
    let regexEmail = /^\w+(.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail))
        return true;
    else
        return false;
}

const validatePassword: (password: string) => boolean = password => /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/.test(password)


export default function FormPage() {

    interface IFormErrors {
        email: boolean,
        password: boolean,
    }

    interface IFormFields {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        phoneNo: string,
    }

    const [formFields, setFormFields] = React.useState<IFormFields>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNo: '',
    } as IFormFields);

    const [formErrors, setFormErrors] = React.useState<IFormErrors>({
        email: false,
        password: false,
    } as IFormErrors);

    const [validForm, setValidForm] = React.useState<boolean>(false)

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormFields({ ...formFields, [e.target.id]: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1) });
    }

    const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormFields({ ...formFields, [e.target.id]: getFormattedPhoneNum(e.target.value) });
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormFields({ ...formFields, [e.target.id]: e.target.value });
        if (e.target.value.charAt(0) === e.target.value.charAt(0).toUpperCase() || !validateEmail(e.target.value))
            setFormErrors({ ...formErrors, email: true });
        else
            setFormErrors({ ...formErrors, email: false });
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormFields({ ...formFields, [e.target.id]: e.target.value });
        if (!validatePassword(e.target.value))
            setFormErrors({ ...formErrors, password: true });
        else
            setFormErrors({ ...formErrors, password: false });

        console.log("RGEX", validatePassword(e.target.value))
    }

    const validateForm = () => {
        const { email: emailError, password: passwordError } = formErrors;
        const { firstName, lastName, email, password, phoneNo} = formFields;

        if (!emailError && !passwordError && firstName !== "" && lastName !== "" && email !== "" && password !== "" && phoneNo !== "")
            setValidForm(true);
        else setValidForm(false);
    }

    React.useEffect(validateForm, [formFields,formErrors])

    return (
        <MainContainer>

            <Header />

            <form>
                <Grid container spacing={2}
                >

                    <Grid item xs={6}>
                        <FormInput
                            value={formFields.firstName}
                            onChange={handleName}
                            id="firstName"
                            label="First Name"
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <FormInput
                            value={formFields.lastName}
                            onChange={handleName}
                            id="lastName"
                            label="Last Name"
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <FormInput
                            value={formFields.phoneNo}
                            id="phoneNo"
                            onChange={handlePhoneNumber}
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
                            value={formFields.email}
                            onChange={handleEmail}
                            type="email"
                            id="email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            helperText={formErrors.email === true && "Invalid email address"}
                            error={formErrors.email === true}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <FormInput
                            value={formFields.password}
                            onChange={handlePassword}
                            type="password"
                            id="password"
                            label="Password"
                            variant="outlined"
                            fullWidth
                            helperText={formErrors.password === true && "Oops! you need a password longer than 8 characters with one uppercase and one lowercase character."}
                            error={formErrors.password === true}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <SubmitButton type="submit" fullWidth variant="contained" disabled={!validForm}>Next</SubmitButton>
                    </Grid>

                </Grid>
            </form>

        </MainContainer>
    )
}
