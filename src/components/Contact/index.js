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
                        <FormInput type='name' name='name' required />
                        <FormLabel htomFor='email'>Email</FormLabel>
                        <FormInput type='email' name='email' required />
                        <FormLabel htmlFor="subject">Subject</FormLabel>
                        <FormInput type='text' name='subject' required />
                        <FormLabel htmlFor="message">Message</FormLabel>
                        <TextArea type='text' name='message' required />
                        <FormWrap style={{ height: '50px' }}>
                            <FormButtom type="submit">Submit</FormButtom>
                        </FormWrap>
                    </Form>
                </FormContent>
                <Icon to="/" onClick={toggleHome}>To Top</Icon>
            </FormWrap>
            <p style={{ textAlign: 'center', paddingBottom: '10px' }}>You can also email me at: <a href="mailto: bookert921@gmail.com">bookert921@gmail.com</a></p>
        </Container>
    )
}

export default Contact
