import React, { useState, useEffect } from 'react';
import {
    FaBars,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaGithub
} from 'react-icons/fa'
/* STYLED COMPONENTS */
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    ResumeLink,
    NavMenu,
    NavItem,
    NavLinks,
    SocialIconLink,
    SocialIcons,
    SocialHeader
} from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';

import Resume from '../../assets/pdfs/BookersDesignResume.pdf';
import Logo from '../../assets/images/logo.svg';

const Navbar = ({ toggleNav }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY <= 200) {
            setScrollNav(false)
            // } else if (window.scrollY <= 1700) {
            //     setScrollNav(true)
            // } else if (window.scrollY <= 4000) {
            //     setScrollNav(false)
        } else {
            setScrollNav(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo
                        to="/"
                        onClick={toggleHome}
                        aria-label="home">
                        <img
                            style={{ width: '50px', marginRight: '10px' }}
                            src={Logo}
                            alt="brand logo" />
                        Booker T. Showers III
                        </NavLogo>
                    <SocialHeader>
                        <SocialIcons>
                            <SocialIconLink
                                href="https://github.com/bookert921"
                                target="_blank"
                                aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink
                                href="https://www.instagram.com/kerbooart/"
                                target="_blank"
                                aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink
                                href="https://twitter.com/BookerT921"
                                target="_blank"
                                aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink
                                href="https://www.linkedin.com/in/bookert921/"
                                target="_blank"
                                aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialHeader>
                    <MobileIcon onClick={toggleNav}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                About
                        </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="projects"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                Projects
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="contact"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                Contact
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <ResumeLink
                                href={Resume}
                                target="_blank"
                                aria-label="resume"
                            >
                                Resume
                            </ResumeLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar;
