import React from 'react';
import {
    Container,
    Form,
    FormButtom,
    FormH1,
    FormInput,
    FormTitle,
    FormWrap,
    Icon,
    TextArea,
    Text,
    ShortInputContainer,
    LongInputContainer,
} from './ContactElements';
import emailjs from 'emailjs-com';
import { animateScroll as scroll } from 'react-scroll';


const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_USER_ID
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <Container id="contact">
            <FormTitle>Contact Me</FormTitle>
            <FormWrap>
                <Form onSubmit={sendEmail}>
                    <FormH1>Got a project in mind?</FormH1>
                    <ShortInputContainer>
                        <FormInput
                            placeholder="Name"
                            type='text'
                            name='name'
                            required
                        />
                    </ShortInputContainer>
                    <ShortInputContainer>
                        <FormInput
                            placeholder="Email"
                            type='email'
                            name='email'
                            required
                        />
                    </ShortInputContainer>
                    <LongInputContainer>
                        <FormInput
                            placeholder="Subject"
                            type="text"
                            name="subject"
                            required
                        />
                    </LongInputContainer>
                    <LongInputContainer>
                        <TextArea
                            placeholder="Message"
                            type="text"
                            name="message"
                            required
                        />
                    </LongInputContainer>
                    <FormButtom type="submit">Submit</FormButtom>
                </Form>
            </FormWrap>
            <Text>
                You can also email me at: &nbsp;
                <a href="mailto: bookert921@gmail.com">
                    bookert921@gmail.com
                </a>
            </Text>
            <Icon to="/" onClick={toggleHome}>To Top</Icon>
        </Container>
    );
};

export default Contact;