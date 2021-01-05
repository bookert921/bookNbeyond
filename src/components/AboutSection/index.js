import React from 'react';
import { AboutRow, AboutWrapper, Column1, Column2, HighlightPoints, HighlightPointsWrapper, Highlights, TextWrapper, Heading, Subtitle, AboutContainer, AboutTitle } from './AboutSectionElements';


const AboutSection = ({ lightBg, id, imgStart, topLine, lightText, darkText, headline, description, img, alt }) => {
    return (
        <>
            <AboutContainer lightBg={lightBg} id={id}>
                <AboutTitle darkText={darkText}>{topLine}</AboutTitle>
                <AboutWrapper>
                    <AboutRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading darkText={darkText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <Highlights>Highlights</Highlights>
                            <HighlightPointsWrapper>
                                <HighlightPoints darkText={darkText}>Migrated a monolithic Heroku Ruby on Rails API to multiple Scala services hosted on AWS. Delivered ahead of schedule, projected to save $18k/quarter.</HighlightPoints>
                                <HighlightPoints darkText={darkText}>Presented research and proof-of-concept to convince team to move from Hadoop MR to Spark; reduced nodes by 60% and ran 5-8x faster.</HighlightPoints>
                                <HighlightPoints darkText={darkText}>Automated test automation in ramp-up to large data center migration, saving hundreds of developer hours. </HighlightPoints>
                                <HighlightPoints darkText={darkText}>Presented "Understanding the GIL to Prevent Race Conditions" at RubyConf 2016. </HighlightPoints>
                                <HighlightPoints darkText={darkText}>Awarded patent for novel approach to item normalization in 3rd party catalog data feeds. </HighlightPoints>
                            </HighlightPointsWrapper>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default AboutSection;
