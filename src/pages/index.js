import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Showpiece from '../components/Showpiece';
import AboutSection from '../components/AboutSection'
import { HomeObjOne } from '../components/AboutSection/AboutContent';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Navbar toggleNav={toggleNav} />
            <Sidebar isOpen={isOpen} toggleNav={toggleNav} />
            <Showpiece />
            <AboutSection {...HomeObjOne} />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;
