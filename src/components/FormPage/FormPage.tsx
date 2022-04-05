import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { styled } from '@mui/system';

import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import Battery6BarIcon from '@mui/icons-material/Battery6Bar';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';

const MainContainer = styled('div')({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
});

const Header = styled('div')({
    color: 'darkslategray',
    backgroundColor: 'red',
    padding: '0.5rem',
    display: 'flex',
});

const IconsContainer = styled('div')({
    color: 'darkslategray',
    backgroundColor: 'green',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '0.2rem',
    width: '100%',
});

const Date = styled(Typography)({
    whiteSpace: 'nowrap',
    fontWeight: 'bold',
});

const LogoContainer = styled('div')({
    color: 'darkslategray',
    backgroundColor: 'red',
    padding: '0.5rem',
    display: 'flex',
});

const FormInput = styled(TextField)({
    backgroundColor: '#fff',

    '& label.Mui-focused': {
        color: 'grey',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'grey',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'grey',
        },
        '&:hover fieldset': {
            borderColor: 'grey',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'grey',
        },
    },

})

export default function FormPage() {
    return (

        <MainContainer>

            <Header>
                <Date>
                    9:41 AM
                </Date>
                <IconsContainer>
                    <SignalCellularAltIcon />
                    <NetworkWifiIcon />
                    <Battery6BarIcon />
                </IconsContainer>
            </Header>

             <LogoContainer>
                <svg className="IconUpet__IconUpet3XLarge-oe4aye-1 cjFEeh" cursor="pointer" width="127" height="40" viewBox="0 0 127 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clipIconUpet3X)"><path d="M38.3295 11.4994H41.4338V24.3176C41.4338 27.6058 41.9773 29.9364 43.0642 31.3094C44.1512 32.6734 45.9475 33.36 48.4346 33.36C49.8532 33.36 51.0967 33.0799 52.1745 32.5199C53.2523 31.9508 54.1181 31.1378 54.7722 30.0718C55.1406 29.4395 55.417 28.6988 55.5736 27.8406C55.7394 26.9825 55.8223 25.492 55.8223 23.3782V11.4994H58.9727V35.6364H55.8223V33.0257C54.8643 34.173 53.8049 34.995 52.6259 35.5009C51.4468 36.0158 50.019 36.2687 48.3517 36.2687C44.8052 36.2687 42.2444 35.3292 40.6784 33.4503C39.1125 31.5714 38.3295 28.4549 38.3295 24.0918V11.4994Z" fill="#5D5D5D"></path><path d="M62.3625 4.37208H65.4761V8.32866C66.3696 6.97367 67.65 5.88064 69.3173 5.06764C70.9754 4.25464 72.7532 3.84814 74.6324 3.84814C78.3446 3.84814 81.4213 5.05861 83.8624 7.47953C86.3034 9.90046 87.5194 12.9266 87.5194 16.549C87.5194 20.09 86.3127 23.071 83.9084 25.501C81.495 27.9309 78.492 29.1414 74.8719 29.1414C72.873 29.1414 71.0767 28.762 69.4647 27.9942C67.8619 27.2354 66.5354 26.1333 65.4761 24.6789V26.3411V29.9363V36.3048H62.3625V4.37208ZM65.4761 16.296C65.4761 19.0512 66.3972 21.3999 68.2488 23.351C70.1003 25.3022 72.2834 26.2869 74.789 26.2869C77.3682 26.2869 79.5882 25.3655 81.4305 23.5136C83.282 21.6618 84.2032 19.3945 84.2032 16.7025C84.2032 13.8841 83.2728 11.5084 81.4121 9.60236C79.5514 7.69633 77.3129 6.7388 74.6692 6.7388C72.2374 6.7388 70.1003 7.69633 68.2488 9.61139C66.3972 11.5174 65.4761 13.7486 65.4761 16.296Z" fill="#5D5D5D"></path><path d="M114.251 24.5525H92.0331C92.2266 27.1812 93.1938 29.304 94.944 30.921C96.6942 32.538 98.8681 33.351 101.475 33.351C103.327 33.351 104.985 32.8812 106.468 31.9418C107.942 31.0023 109.084 29.6925 109.894 28.0213H113.478C112.345 30.6952 110.751 32.7457 108.697 34.173C106.643 35.6003 104.266 36.3139 101.567 36.3139C97.9838 36.3139 94.9532 35.0673 92.4845 32.5651C90.0066 30.0628 88.7722 27.0548 88.7722 23.5498C88.7722 19.8733 89.9789 16.8381 92.4108 14.4443C94.8334 12.0504 97.9285 10.849 101.705 10.849C105.408 10.849 108.421 12.0956 110.76 14.5888C113.091 17.082 114.261 20.334 114.261 24.3267V24.5525H114.251ZM110.769 21.8516C110.171 19.1687 109.075 17.1452 107.481 15.7902C105.878 14.4352 103.796 13.7577 101.235 13.7577C98.8497 13.7577 96.8231 14.4804 95.1743 15.9438C93.5162 17.3981 92.5029 19.3674 92.1344 21.8516H110.769Z" fill="#5D5D5D"></path><path d="M119.115 35.6363V14.6158H114.436V11.4994H119.115V3.68555H122.266V11.4994H126.945V14.6158H122.266V35.6363H119.115Z" fill="#5D5D5D"></path><path d="M17.8705 39.06C8.01409 39.06 0 31.0475 0 21.1921C0 17.3259 1.21593 13.6493 3.50962 10.5599C5.74804 7.54281 8.80628 5.34772 12.362 4.20049L12.408 4.18242C12.4357 4.17339 13.2094 3.85722 13.6976 2.77322L13.7161 2.73709C13.7345 2.69192 13.7621 2.63772 13.7805 2.59256L14.4161 1.59889C15.2636 0.596198 16.5164 0 17.8705 0C19.2522 0 20.5234 0.623298 21.3617 1.65309L22.0526 2.77322C22.5408 3.85722 23.3238 4.17339 23.3514 4.18242L23.6185 4.28179C27.0729 5.45612 30.039 7.62411 32.2314 10.569C34.5251 13.6584 35.741 17.3349 35.741 21.1921C35.7502 31.0475 27.7269 39.06 17.8705 39.06ZM13.7253 5.09478L12.8318 5.38385C9.50637 6.44074 6.65077 8.4913 4.55053 11.3007C2.41344 14.1823 1.28962 17.5969 1.28962 21.1921C1.28962 30.3429 8.73259 37.7953 17.8705 37.7953C27.0176 37.7953 34.4514 30.3519 34.4514 21.1921C34.4514 17.5969 33.3276 14.1823 31.1905 11.3097C29.1086 8.4913 26.2438 6.44074 22.9277 5.38385L21.9973 5.08575L21.4354 4.71538L20.8551 3.28812C20.3668 2.05959 19.1878 1.26466 17.8705 1.26466C16.5624 1.26466 15.3926 2.05056 14.8859 3.26102L14.278 4.74248L13.7253 5.09478Z" fill="#5D5D5D"></path><path d="M23.8304 12.0595C25.0832 12.5563 25.9952 14.9682 25.203 16.8561C24.4108 18.7441 21.7394 20.4153 20.4866 19.9094C19.2338 19.4035 18.6627 16.2961 19.4549 14.3991C20.2379 12.5111 22.5777 11.5536 23.8304 12.0595Z" fill="#5D5D5D"></path><path d="M13.6884 11.5987C14.9873 11.2194 17.2165 12.3846 17.8152 14.3449C18.4232 16.2961 17.5481 19.3493 16.2585 19.7287C14.9596 20.1081 12.4633 17.8588 11.8553 15.9076C11.2566 13.9474 12.3988 11.9872 13.6884 11.5987Z" fill="#5D5D5D"></path><path d="M8.25361 22.1858C6.71528 21.3006 6.05204 19.2861 6.63237 18.3105C7.2127 17.3349 9.44191 16.9917 10.971 17.8769C12.5094 18.7532 13.6332 20.9573 13.0529 21.9329C12.4633 22.9085 9.78274 23.062 8.25361 22.1858Z" fill="#5D5D5D"></path><path d="M21.8683 30.0899C19.9247 30.6229 19.4273 29.5028 17.6771 29.4124C15.9269 29.3131 15.1347 31.2191 13.1358 30.6771C11.1368 30.1351 11.7909 27.2986 11.7909 27.2986C13.4305 20.7043 17.1428 20.3069 17.1428 20.3069C20.2103 20.0178 22.4395 23.6311 22.4395 23.6311C25.8754 28.6446 21.8683 30.0899 21.8683 30.0899Z" fill="#5D5D5D"></path><path d="M27.6072 23.2607C26.2531 24.0557 23.8212 24.1189 23.2501 23.1433C22.679 22.1587 23.9225 20.072 25.2767 19.2771C26.6308 18.4821 28.3533 18.8977 28.9244 19.8732C29.4956 20.8579 28.9613 22.4658 27.6072 23.2607Z" fill="#5D5D5D"></path></g><defs><clipPath id="clipIconUpet3X"><rect width="126.945" height="39.06" fill="white"></rect></clipPath></defs></svg>
            </LogoContainer>

            <form>
                <Grid container spacing={2} style={{backgroundColor: "green"}}>

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
