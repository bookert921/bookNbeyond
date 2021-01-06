import React from 'react';
import { AboutRow, Img, ImgWrap, AboutWrapper, Column1, Column2, HighlightPoints, HighlightPointsWrapper, Highlights, TextWrapper, Heading, Subtitle, AboutContainer, AboutTitle, CertificateLink } from './AboutSectionElements';


const AboutSection = ({ lightBg, id, imgStart, topLine, lightText, darkText, headline, description, img, alt }) => {
    return (
        <>
            <AboutContainer lightBg={lightBg} id={id}>
                <AboutTitle darkText={darkText}>{topLine}</AboutTitle>
                <AboutWrapper>
                    <AboutRow>
                        <Column1>
                            <TextWrapper>
                                <Heading darkText={darkText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src="/postgresql.png" alt="postgres" />
                                <Img src="/mongodb.png" alt="mongo db" />
                                <Img src="/nodejs.png" alt="node js" />
                                <Img src="/javascript.png" alt="javascript" />
                                <Img src="/react.png" alt="react" />
                            </ImgWrap>
                            <Highlights>Highlights</Highlights>
                            <HighlightPointsWrapper>
                                <HighlightPoints darkText={darkText}>9+ years Software Testing background.</HighlightPoints>
                                <HighlightPoints darkText={darkText}>Familiar with Agile methologies.</HighlightPoints>
                                <HighlightPoints darkText={darkText}>Front-end React framework enthusiast.</HighlightPoints>
                                <HighlightPoints darkText={darkText}>REST and GrapQL/Apollo with PostgreSQL or MongoDB.</HighlightPoints>
                                <HighlightPoints darkText={darkText}>Certified Full Stack Engineer through Immesive Software Engineering Course at General Assembly.</HighlightPoints>
                                <CertificateLink href="/Certificate-of-Completion.pdf">See My Certificate!</CertificateLink>
                            </HighlightPointsWrapper>

                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default AboutSection;
