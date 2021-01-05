import React from 'react';
import { Container, Form, FormButtom, FormContent, FormH1, FormInput, FormLabel, FormTitle, FormWrap, Icon, TextArea } from './ContactElements'
import emailjs from 'emailjs-com';
import { animateScroll as scroll } from 'react-scroll';


const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <Container id="contact">
            <FormTitle>Contact Me</FormTitle>
            <FormWrap>
                <FormContent>
                    <Form onSubmit={sendEmail}>
                        <FormH1>Got a project in mind?</FormH1>
                        <FormLabel htomFor='name'>Name</FormLabel>
                        <FormInput type='name' placeholder='Jon Carter' name='name' required />
                        <FormLabel htomFor='email'>Email</FormLabel>
                        <FormInput type='email' placeholder='Email Address' name='email' required />
                        <FormLabel htmlFor="subject">Subject</FormLabel>
                        <FormInput type='text' placeholder='T-1000 Invasion' name='subject' required />
                        <FormLabel htmlFor="message">Message</FormLabel>
                        <TextArea type='text' name='message' required />
                        <FormWrap style={{ height: '50px' }}>
                            <FormButtom type="submit">Submit</FormButtom>
                        </FormWrap>
                    </Form>
                </FormContent>
                <Icon to="/" onClick={toggleHome}>To Top</Icon>
            </FormWrap>
        </Container>
    )
}

export default Contact
