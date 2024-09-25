import AboutSection from '../sub-components/AboutSection';
import SkillsSection from '../sub-components/SkillsSection';
import ProjectsSection from '../sub-components/ProjectsSection';
import TestimonialsSection from '../sub-components/TestimonialsSection';
import ContactSection from '../sub-components/ContactSection';

const Main = ({ theme, toggleTheme, activeSection, setActiveSection, isMenuOpen, setIsMenuOpen, sections }) => (
  <main className='pb-12'>
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <TestimonialsSection />
    <ContactSection />
  </main>
);

export default Main;
