import React from 'react'
import { Container } from '@mui/material'
import Typography from '@mui/material/Typography';

import { styled } from '@mui/system';

const MainContainer = styled(Container)({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: '0.5rem',
});

export default function FormPage() {
    return (
        <MainContainer>
            <Typography>
                9:41 AM
            </Typography>
        </MainContainer>
    )
}
