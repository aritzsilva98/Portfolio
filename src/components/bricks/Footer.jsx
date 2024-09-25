import { Github, Linkedin, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className='bg-white dark:bg-gray-900 py-8'>
      <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center'>
        <p className='text-gray-600 dark:text-gray-400 mb-4 md:mb-0'>
          &copy; {t('copyRight')}
        </p>
        <div className='flex space-x-4'>
          <a
            href='https://github.com/aritzsilva98'
            className='text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub Profile'
          >
            <Github size={20} />
          </a>
          <a
            href='https://www.linkedin.com/in/aritz-silva-galan/'
            className='text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn Profile'
          >
            <Linkedin size={20} />
          </a>
          <a
            href='mailto:aritzsilva98@gmail.com'
            className='text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300'
            aria-label='Email Aritz'
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
