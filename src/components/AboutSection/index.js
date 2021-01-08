import React from 'react';
import { AboutRow, Img, ImgWrap, AboutWrapper, Column1, Column2, HighlightPoints, HighlightPointsWrapper, Highlights, Heading, Subtitle, AboutContainer, AboutTitle, CertificateLink } from './AboutSectionElements';
import Cert from '../../pdfs/Certificate-of-Completion.pdf';
import PostgresImg from '../../images/postgresql.png';
import ReactImg from '../../images/react.png';
import NodeImg from '../../images/nodejs.png';
import JSImg from '../../images/javascript.png';
import MongoDBImg from '../../images/mongodb.png';

const AboutSection = ({ lightBg, id, topLine, darkText, headline, leftTopFeature }) => {
    return (
        <>
            <AboutContainer lightBg={lightBg} id={id}>
                <AboutTitle darkText={darkText}>{topLine}</AboutTitle>
                <AboutWrapper>
                    <AboutRow leftTopFeature={leftTopFeature}>
                        <Column1>
                            <Heading darkText={darkText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>
                                I began my software career as a Software Tester for e-commerce web applications. Over time, I found myself wanting to fix more of the issues and wanting to solve more complex problems. Seeing how overwhelmed some of the developers were on my team, I sought out oppertunities to learn what I could about website development to better aid my developer companions.
                                    <br />
                                <br />
                                    What began as a mere allowance to fix typos in the HTML, soon became CSS fixed, and eventually I found myself stumbling into JavaScript. By learning through baby steps, I feel that I've developed a strong foundation and a more keen sense of what a user wants to see and how I, now as a developer, can make that happen with fewer errors and a more pleasant experience.
                                </Subtitle>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={PostgresImg} alt="postgres" />
                                <Img src={MongoDBImg} alt="mongo db" />
                                <Img src={NodeImg} alt="node js" />
                                <Img src={JSImg} alt="javascript" />
                                <Img src={ReactImg} alt="react" />
                            </ImgWrap>
                            <Highlights>Highlights</Highlights>
                            <HighlightPointsWrapper>
                                <HighlightPoints darkText={darkText}>9+ years Software Testing background.</HighlightPoints>
                                <HighlightPoints darkText={darkText}>Familiar with Agile methologies.</HighlightPoints>
                                <HighlightPoints darkText={darkText}>Front-end React framework enthusiast.</HighlightPoints>
                                <HighlightPoints darkText={darkText}>REST and GrapQL/Apollo with PostgreSQL or MongoDB.</HighlightPoints>
                                <HighlightPoints darkText={darkText}>Certified Full Stack Engineer through Immesive Software Engineering Course at General Assembly.</HighlightPoints>
                                <CertificateLink href={Cert}>See My Certificate!</CertificateLink>
                            </HighlightPointsWrapper>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default AboutSection;
