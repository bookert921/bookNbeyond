import React from 'react';
/* STYLED COMPONENTS */
import {
    ProjectsContainer,
    ProjectCardLink,
    ProjectsH1,
    ProjectsWrapper,
    ProjectsCard,
    ProjectsIcon,
    ProjectsH2,
    ProjectsP,
    GitHubLink
} from './ProjectsElements';
/* IMAGES */
import BetterBoothang from '../../assets/images/Welcome.png';
import GoalGetter from '../../assets/images/screenshot1.png';
import BookNBeyond from '../../assets/images/Home.png';
import GoogleBooksApi from '../../assets/images/GoogleBooksApi.png';
import ColorSwatches from '../../assets/images/ColorSwatches.png';

const Projects = () => {
    return (
        <>
            <ProjectsContainer id="projects">
                <ProjectsH1>Projects</ProjectsH1>
                <ProjectsWrapper>
                    <ProjectCardLink
                        target="_blank"
                        href="https://github.com/bookert921/colors-app"
                        aria-label="Color Swatches App"
                    >
                        <ProjectsCard>
                            <ProjectsIcon src={ColorSwatches} />
                            <ProjectsH2>Color Swatches App</ProjectsH2>
                            <ProjectsP>
                                A challenge project completed from the startup <a style={{ fontWeight: 'bold', color: 'blue', textDecoration: 'none' }} href="https://www.helpfulhuman.com/" target="_blank" rel="noreferrer" >Helpful Human</a>.
                            </ProjectsP>
                            <p className="clickme" ><strong>Click To Read More</strong></p>
                        </ProjectsCard>
                    </ProjectCardLink>
                    <ProjectCardLink
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/bookert921/google-books-search"
                        aria-label="Google Search App"
                    >
                        <ProjectsCard>
                            <ProjectsIcon src={GoogleBooksApi} />
                            <ProjectsH2>Google Books</ProjectsH2>
                            <ProjectsP>
                                A Create React App utilizing the Google API to find your favorite books in style!
                            </ProjectsP>
                            <p className="clickme"><strong>Click To Read More</strong></p>
                        </ProjectsCard>
                    </ProjectCardLink>
                    <ProjectCardLink
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/fostimus/better-boothang"
                        aria-label="twilio messaging app"
                    >
                        <ProjectsCard>
                            <ProjectsIcon src={BetterBoothang} />
                            <ProjectsH2>Better Boothang</ProjectsH2>
                            <ProjectsP>
                                Automate those special, but forgetful, occasions with this NodeJS app using Twilio messaging services.
                            </ProjectsP>
                            <p className="clickme"><strong>Click To Read More</strong></p>
                        </ProjectsCard>
                    </ProjectCardLink>
                    <ProjectCardLink
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/enbre/goal-getter-frontend"
                        aria-label="goal app"
                    >
                        <ProjectsCard>
                            <ProjectsIcon src={GoalGetter} />
                            <ProjectsH2>Goal Getter!</ProjectsH2>
                            <ProjectsP>
                                A simple ReactJS/ExpressJS todo app that breaks goals down into smaller tasks. Users create profiles under Passport Authentication.
                            </ProjectsP>
                            <p className="clickme"><strong>Click To Read More</strong></p>
                        </ProjectsCard>
                    </ProjectCardLink>
                    <ProjectCardLink
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/bookert921/next-reason-app"
                        aria-label="blog"
                    >
                        <ProjectsCard>
                            <ProjectsIcon src={BookNBeyond} />
                            <ProjectsH2>BookNBeyond Blog</ProjectsH2>
                            <ProjectsP>
                                A starter blog using NextJS and markdown blog posts aimed at inspiring new developers.
                            </ProjectsP>
                            <p className="clickme"><strong>Click To Read More</strong></p>
                        </ProjectsCard>
                    </ProjectCardLink>
                </ProjectsWrapper>
                <ProjectsP
                    style={{ color: 'white', marginTop: '50px', padding: '0 20px' }}
                >
                    Additional projects can be found on my github: &nbsp;
                    <GitHubLink
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/bookert921/"
                        aria-label="github"
                    >
                        https://github.com/bookert921/
                    </GitHubLink>.
                </ProjectsP>
            </ProjectsContainer>
        </>
    )
}

export default Projects
