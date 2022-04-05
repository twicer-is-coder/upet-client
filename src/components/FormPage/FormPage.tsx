import React from 'react'
import { Container } from '@mui/material'
import Typography from '@mui/material/Typography';

import { styled } from '@mui/system';

import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import Battery6BarIcon from '@mui/icons-material/Battery6Bar';

const MainContainer = styled(Container)({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: '0.5rem',
    display: 'flex',
});

const Header = styled(Container)({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: '0.5rem',
    display: 'flex',
});

const IconsContainer = styled(Container)({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    display: 'flex',
    justifyContent: 'end',
    gap: '0.2rem',
    width: '100%',
});

const Date = styled(Typography)({
    whiteSpace: 'nowrap',
    fontWeight: 'bold',
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
        </MainContainer>
    )
}
