import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu } from './SidebarElements';

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
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SidebarElements;