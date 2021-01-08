import React from 'react';
import { AboutRow, Img, ImgWrap, AboutWrapper, Column1, Column2, HighlightPoints, HighlightPointsWrapper, Highlights, Heading, Subtitle, AboutContainer, AboutTitle, CertificateLink } from './AboutSectionElements';
import Cert from '../../pdfs/Certificate-of-Completion.pdf';
import PostgresImg from '../../images/postgresql.png';
import ReactImg from '../../images/react.png';
import NodeImg from '../../images/nodejs.png';
import JSImg from '../../images/javascript.png';
import MongoDBImg from '../../images/mongodb.png';
import PythonImg from '../../images/python.png';

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
                                I began my career in software as a Tester for e-commerce web applications. Over time, I found myself wanting to fix more of the issues I was regularly facing. Seeing how overwhelmed some of the developers were on my team, I found whatever opportunities I could to help.
                            </Subtitle>
                            <Subtitle darkText={darkText}>
                                What began as a mere allowance to fix typos in the HTML, soon became CSS fixed. Together, these inspired me to look into the other layer of progressive enhancement, JavaScript.
                            </Subtitle>
                            <Subtitle darkText={darkText}>
                                By learning through baby steps, I developed a strong foundation and a more keen sense of what a user wants to see and how I, now as a developer, can make that happen with fewer errors and a more pleasant experience.
                            </Subtitle>
                            <Subtitle darkText={darkText}>
                                My current framework of choice is React, in all it's flavors. But as a pragmatically-minded programmer, I realize that the same tool is not always best for every job. And I am more than willing to take on new challenges!
                            </Subtitle>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={PostgresImg} alt="postgres" />
                                <Img src={MongoDBImg} alt="mongo db" />
                                <Img src={NodeImg} alt="node js" />
                                <Img src={JSImg} alt="javascript" />
                                <Img src={ReactImg} alt="react" />
                                <Img src={PythonImg} alt="python" />
                            </ImgWrap>
                            <Highlights>Highlights</Highlights>
                            <HighlightPointsWrapper>
                                <HighlightPoints darkText={darkText}>
                                    9+ years Software Testing background.
                                </HighlightPoints>
                                <HighlightPoints darkText={darkText}>
                                    Familiar with Agile methodologies.
                                </HighlightPoints>
                                <HighlightPoints darkText={darkText}>
                                    Front-end React framework enthusiast.
                                </HighlightPoints>
                                <HighlightPoints darkText={darkText}>
                                    Familiar with MongoDB and PostgreSQL.
                                </HighlightPoints>
                                <HighlightPoints darkText={darkText}>
                                    Able to work with REST and GrapQL APIs.
                                </HighlightPoints>
                                <HighlightPoints darkText={darkText}>
                                    Some Python experience.
                                </HighlightPoints>
                                <HighlightPoints darkText={darkText}>
                                    Familiar with both TypeScript and ReasonML (Reason-React).
                                </HighlightPoints>
                                <HighlightPoints darkText={darkText}>
                                    Certified Full Stack Engineer through Software Engineering Immersive Course at General Assembly.
                                </HighlightPoints>
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
