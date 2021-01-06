import React, { useState, useEffect } from 'react';
import { ShowpieceContainer, Landing, VideoBg, LandingContent, LandingH1, LandingP } from './ShowpieceElements';
import Video from '../../videos/coding.mp4';

const Showpiece = () => {
    const [hideShowpieceH1, sethideShowpieceH1] = useState(false);
    const [hideShowpieceP, sethideShowpieceP] = useState(false);

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
    }

    useEffect(() => {
        window.addEventListener('scroll', hideText)
    }, [])

    return (
        <ShowpieceContainer id="showpiece">
            <Landing>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </Landing>
            <LandingContent>
                <LandingH1 hideShowpieceH1={hideShowpieceH1}>Let's Connect!</LandingH1>
                <LandingP hideShowpieceP={hideShowpieceP}>
                    I am a Full Stack Software Engineer.
                </LandingP>
            </LandingContent>
        </ShowpieceContainer>
    )
}

export default Showpiece;