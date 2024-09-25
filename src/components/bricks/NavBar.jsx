import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../sub-components/LanguageSelector';

const NavBar = ({
  theme,
  toggleTheme,
  activeSection,
  setActiveSection,
  isMenuOpen,
  setIsMenuOpen,
  sections
}) => {
  const { t } = useTranslation();

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-md'>
      <div className='max-w-7xl mx-auto px-6 py-3'>
        <div className='flex justify-between items-center'>
          <motion.h1
            className='text-2xl font-bold text-indigo-600 dark:text-indigo-400'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Aritz Silva
          </motion.h1>
          <div className='hidden md:flex items-center space-x-4'>
            {sections.map(section => (
              <motion.a
                key={section}
                href={`#${section}`}
                className={`capitalize ${
                  activeSection === section
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-600 dark:text-gray-300'
                } hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection(section)}
              >
                {t(section)}
              </motion.a>
            ))}
            <motion.button
              onClick={toggleTheme}
              className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
