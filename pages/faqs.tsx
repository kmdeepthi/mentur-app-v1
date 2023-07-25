import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/app/components/Link';
import ProTip from '@/app/components/ProTip';

export default function Faqs() {
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
                    FAQs
                </Typography>
                <Typography variant={"body1"} component="p" gutterBottom sx={{my: 10}}>
                    <b>1. What is the mentorship program all about?</b><br/>
                    Our mentorship program is designed to foster meaningful connections between experienced professionals (Mentors) and individuals seeking guidance and support (Mentees). It&apos;s a platform for sharing knowledge, insights, and experiences to empower mentees in their personal and professional development journey.
                    <br/>
                    <br/>
                    <b>2. How does the mentorship matching process work?</b><br/>
                    Once you sign up for the program, we use a sophisticated matching algorithm to pair mentors and mentees based on their goals, interests, and industry expertise. We strive to create compatible matches to ensure a fruitful and rewarding mentorship experience.
                    <br/>
                    <br/>
                    <b>3. What are the benefits of being a Mentor?</b><br/>
                    As a Mentor, you get the opportunity to make a lasting impact on someone&apos;s life and career. It&apos;s a chance to give back to the community, enhance your leadership and communication skills, expand your professional network, and gain recognition as an industry expert.
                    <br/>
                    <br/>
                    <b>4. What&apos;s in it for Mentees?</b><br/>
                    Mentees gain access to valuable insights, personalized guidance, and a supportive network. They can learn from experienced professionals, develop new skills, gain confidence, and receive direction to overcome challenges and achieve their goals.
                    <br/>
                    <br/>
                    <b>5. How often are mentoring sessions held?</b><br/>
                    The frequency and schedule of mentoring sessions are flexible and depend on mutual agreement between mentors and mentees. We recommend having regular check-ins, but the specific cadence is determined by both parties&apos; availability and preferences.
                    <br/>
                    <br/>
                    <b>6. Can I participate in the program if I am a remote employee?</b><br/>
                    Absolutely! Our mentorship program is designed to accommodate remote participants. We leverage various online tools and communication platforms to facilitate seamless mentorship interactions, regardless of geographical locations.
                    <br/>
                    <br/>
                    <b>7. Is there a time limit for the mentorship relationship?</b><br/>
                    While there is no strict time limit, we encourage mentors and mentees to commit to the program for a reasonable duration (e.g., 6 to 12 months). This allows for a comprehensive and transformative mentoring experience.
                    <br/>
                    <br/>
                    <b>8. What if I&apos;m not satisfied with my mentoring match?</b><br/>
                    If for any reason a mentor or mentee feels their match isn&apos;t the right fit, we offer the opportunity to request a re-match. We value the success of our mentorship connections and aim to find the best possible fit for both parties.
                    <br/>
                    <br/>
                    <b>9. Are there any guidelines for mentors and mentees?</b><br/>
                    Yes, we provide guidelines and best practices for both mentors and mentees to ensure a positive and constructive mentoring relationship. These guidelines cover topics such as communication, goal-setting, confidentiality, and respect.
                    <br/>
                    <br/>
                    <b>10. How do I sign up for the mentorship program?</b><br/>
                    To join our mentorship program as either a Mentor or a Mentee, simply visit our website&apos;s registration page and fill out the application form. We&apos;ll guide you through the process from there!
                    <br/>
                    <br/>
                    If you have any additional questions or need further assistance, feel free to reach out to our support team at #slack-channel-TBD.
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
