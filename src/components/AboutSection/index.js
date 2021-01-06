import React from 'react';
import { AboutRow, Img, ImgWrap, AboutWrapper, Column1, Column2, HighlightPoints, HighlightPointsWrapper, Highlights, TextWrapper, Heading, Subtitle, AboutContainer, AboutTitle, CertificateLink } from './AboutSectionElements';
import Cert from '../../pdfs/Certificate-of-Completion.pdf';
import PostgresImg from '../../images/postgresql.png';
import ReactImg from '../../images/react.png';
import NodeImg from '../../images/nodejs.png';
import JSImg from '../../images/javascript.png';
import MongoDBImg from '../../images/mongodb.png';

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
