import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/app/components/Link';
import ProTip from '@/app/components/ProTip';

export default function Learnmorementees() {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    my: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Learn More - Mentees
                </Typography>
                <Typography variant={"body1"} component="p" gutterBottom sx={{my: 10}}>
                    Are you eager to learn, grow, and reach new heights in your career? Our Mentee program offers you the unique opportunity to be guided by experienced professionals who have walked the path you aspire to. Get ready to accelerate your personal and professional development as you receive personalized insights and valuable advice.
                    <br/>
                    <br/>
                    <br/>
                    What can you gain as a Mentee?
                    <br/>
                    <br/>
                    Guidance: Receive one-on-one support and direction from accomplished mentors.<br/>
                    Knowledge: Tap into the wisdom and experience of experts in your desired field.<br/>
                    Networking: Expand your network through meaningful connections with mentors and peers.<br/>
                    Confidence: Gain the confidence to tackle challenges and achieve your goals.<br/>
                    Skill Development: Acquire new skills and expertise through mentorship.<br/>
                    <br/>
                    <br/>
                    Don&apos;t miss out on this chance to supercharge your growth and unlock your full potential. Become a Mentee and embark on an empowering journey toward success.
                    <br/>
                </Typography>
                <Box maxWidth="sm" sx={{mt: 10}}>
                    <Link noLinkStyle href="/">
                        Go to the home page
                    </Link>
                </Box>
                <ProTip />
            </Box>
        </Container>
    );
}
