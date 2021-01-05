import React from 'react';
import { ProjectsContainer, ProjectCardLink, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP } from './ProjectsElements';

const Projects = () => {
    return (
        <>
            <ProjectsContainer id="projects">
                <ProjectsH1>Projects</ProjectsH1>
                <ProjectsWrapper>
                    <ProjectCardLink target="_blank" href="https://github.com/fostimus/better-boothang">
                        <ProjectsCard>
                            <ProjectsIcon src="/Welcome.png" />
                            <ProjectsH2>Better Boothang</ProjectsH2>
                            <ProjectsP>Automate those special, but forgetful, birthday and anniversary messages with this NodeJS app.</ProjectsP>
                        </ProjectsCard>
                    </ProjectCardLink>
                    <ProjectCardLink target="_blank" href="https://github.com/enbre/goal-getter-frontend">
                        <ProjectsCard>
                            <ProjectsIcon src="screenshot1.png" />
                            <ProjectsH2>Goal Getter!</ProjectsH2>
                            <ProjectsP>A simple ReactJS todo app that breaks goals down into tasks.</ProjectsP>
                        </ProjectsCard>
                    </ProjectCardLink>
                    <ProjectCardLink target="_blank" href="https://github.com/bookert921/next-reason-app">
                        <ProjectsCard>
                            <ProjectsIcon src="/Home.png" />
                            <ProjectsH2>BookNBeyond Blog</ProjectsH2>
                            <ProjectsP>A starter blog using NextJS and markdown blog posts.</ProjectsP>
                        </ProjectsCard>
                    </ProjectCardLink>
                </ProjectsWrapper>
                <ProjectsP style={{ color: 'white', marginTop: '50px' }}>Additional projects can be found on my github: <ProjectCardLink target="_blank" style={{ color: 'white', cursor: 'pointer' }}>https://github.com/bookert921/</ProjectCardLink>.</ProjectsP>
            </ProjectsContainer>
        </>
    )
}

export default Projects
