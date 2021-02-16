import React, { useState, useEffect } from 'react';
import {
    ShowpieceContainer,
    Landing,
    VideoBg,
    LandingContent,
    LandingH1,
    LandingP,
    AboutButton,
    AboutBtnContainer
} from './ShowpieceElements';
import Video from '../../assets/coding.mp4';
import Fade from 'react-reveal/Fade';

const Showpiece = () => {
    const [hideShowpieceH1, sethideShowpieceH1] = useState(false);
    const [hideShowpieceP, sethideShowpieceP] = useState(false);
    const [hideShowpieceButton, sethideShowpieceButton] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const hideText = () => {
        if (window.scrollY >= 200) {
            sethideShowpieceH1(false)
        } else {
            sethideShowpieceH1(true)
        }

        if (window.scrollY >= 250) {
            sethideShowpieceP(false)
        } else {
            sethideShowpieceP(true)
        }

        if (window.scrollY >= 275) {
            sethideShowpieceButton(false)
        } else {
            sethideShowpieceButton(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', hideText);
        if (window.innerWidth > 769) {
            setIsDesktop(true);
            setIsMobile(false);
        } else {
            setIsMobile(true);
            setIsDesktop(false);
        }
    }, [])

    return (
        <ShowpieceContainer id="showpiece">
            <Landing>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </Landing>
            <LandingContent>
                <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px">
                    <LandingH1
                        hideShowpieceH1={hideShowpieceH1}>
                        Let's Connect!
                    </LandingH1>
                    <LandingP hideShowpieceP={hideShowpieceP}>
                        I am a Full Stack Software Engineer.
                </LandingP>
                </Fade>
                <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px">
                    <AboutBtnContainer
                        hideShowpieceButton={hideShowpieceButton}>
                        <AboutButton
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>
                            About Me
                        </AboutButton>
                    </AboutBtnContainer>
                </Fade>
            </LandingContent>
        </ShowpieceContainer>
    )
}

export default Showpiece;