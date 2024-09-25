import React, { useState, useEffect } from 'react';
import NavBar from './bricks/NavBar';
import Main from './bricks/Main';
import Footer from './bricks/Footer';
import { sections } from './../data/sectionsData';

const UpdatedEnhancedPortfolio = () => {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          if (section.offsetTop <= currentPosition) {
            setActiveSection(sections[i]);
            break;
          }
        } else {
          console.error(`No se encontró el elemento con ID: ${sections[i]}`);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300'>
      <NavBar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        sections={sections}
      />
      <Main
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        sections={sections}
      />
      <Footer />
    </div>
  );
}

export default UpdatedEnhancedPortfolio