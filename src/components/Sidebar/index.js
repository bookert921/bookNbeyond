import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, ResumeLink } from './SidebarElements';
import Resume from '../../assets/pdfs/BookersDesignResume.pdf';

const SidebarElements = ({ isOpen, toggleNav }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggleNav}>
            <Icon onClick={toggleNav} >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggleNav}>
                        About
                    </SidebarLink>
                    <SidebarLink to="projects" onClick={toggleNav}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggleNav}>
                        Contact
                    </SidebarLink>
                    <ResumeLink href={Resume} target="_blank" onClick={toggleNav}>
                        Resume
                    </ResumeLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SidebarElements;