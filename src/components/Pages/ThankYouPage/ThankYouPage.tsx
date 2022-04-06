import React from 'react'
import { styled } from '@mui/system';
import { useNavigate } from "react-router-dom"

import DraftIcon from '@mui/icons-material/Drafts';
import Typography from '@mui/material/Typography';

import Header from '../../Header/Header';
import { useUser } from '../../contexts/UserContext'

export default function ThankYouPage() {

    const { formFields } = useUser();
    const navigate = useNavigate()

    React.useEffect(() => {
        if (formFields.firstName === "" || formFields.phoneNo === "" || formFields.email === "" || formFields.lastName === "" || formFields.password === "")
            navigate("/")

        //eslint-disable-next-line
    }, [])

    const MainContainer = styled('div')({
        padding: '0.5rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    });

    const MessageLogoContainer = styled('div')({
        color: 'darkslategray',
        display: 'flex',
        gap: '1rem',
    });

    const Letter = styled(DraftIcon)({
        height: "80px",
        width: "80px",
        color: '#31E6C0',
    });

    const Message = styled(Typography)({
        color: '#000000',
        fontSize: '1.5rem',
    });

    const Notice = styled(Typography)({
        color: '#BABABA',
        fontSize: '1rem',
    });

    return (
        <MainContainer>

            <Header />

            <MessageLogoContainer>
                <Letter />
                <div>
                    <Message>Thanks, {formFields.firstName}!</Message>
                    <Message>We've received your application</Message>
                </div>
            </MessageLogoContainer>

            <Notice>
                We'll process your application as soon as possible
                and send you a decision within 30 days to {formFields.phoneNo} or {formFields.email}. We will
                contact you in case more information is needed.
            </Notice>

            <Notice>
                While were reviewing your application, please don’t
                submit another application for the uPet’s breeder
                program.
            </Notice>

        </MainContainer>
    )
}
