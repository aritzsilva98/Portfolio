import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { Moon, Sun } from 'lucide-react'
import LanguageSelector from '../sub-components/LanguageSelector'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const NavBar = ({
  theme,
  toggleTheme,
  activeSection,
  setActiveSection,
  sections
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <nav className='fixed w-full z-50 bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80'>
      <div className='w-full mx-auto px-6 py-3'>
        <div className='flex justify-between items-center'>
          <h1 className='text-md sm:text-2xl font-bold'>Aritz Silva</h1>

          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='p-2 rounded-md text-indigo-600 dark:text-indigo-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
            <div className='flex items-center space-x-4 ml-4'>
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

          <div className='hidden md:flex items-center space-x-4'>
            {sections.map(section => (
              <a key={section} href={`#${section}`} className='capitalize'>
                {t(section)}
              </a>
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

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='flex flex-col space-y-4 mt-4 md:hidden'
          >
            {sections.map(section => (
              <a
                key={section}
                href={`#${section}`}
                className='capitalize text-center text-indigo-600 dark:text-indigo-400'
                onClick={() => setIsMenuOpen(false)}
              >
                {t(section)}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
