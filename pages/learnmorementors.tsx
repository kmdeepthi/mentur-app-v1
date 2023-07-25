import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
import ProTip from '@/app/components/ProTip';

export default function Learnmorementors() {
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
                    Learn More - Mentors
                </Typography>
                <Typography variant={"body1"} component="p" gutterBottom sx={{my: 10}}>
                    Are you passionate about sharing your expertise and helping others succeed? As a Mentor in our program, you will have the opportunity to make a meaningful impact on the careers of aspiring professionals. Whether you are a seasoned veteran or a rising star in your field, your guidance and support can shape the next generation of leaders.
                    <br/>
                    <br/>
                    <br/>
                    What is in it for you as a Mentor?
                    <br/>
                    <br/>
                    Fulfillment: Experience the satisfaction of contributing to someone else&apos;s growth and development.<br/>
                    Networking: Expand your professional network and connect with other like-minded mentors.<br/>
                    Personal Growth: Strengthen your leadership and communication skills through mentorship.<br/>
                    Recognition: Gain recognition as an industry expert and thought leader.<br/>
                    Pay it Forward: Share your knowledge and insights to pay it forward to the community.<br/>
                    <br/>
                    <br/>
                    Join us as a Mentor and help build a brighter future for your mentees and the industry as a whole.
                    <br/>
                </Typography>
                <Box maxWidth="sm" sx={{mt: 10}}>
                    <Link href="/">
                        Go to the home page
                    </Link>
                </Box>
                <ProTip />
            </Box>
        </Container>
    );
}
