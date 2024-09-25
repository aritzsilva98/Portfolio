import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { containerVariants, itemVariants } from '../../data/variants.js'
import { useTranslation } from 'react-i18next'
import AboutSectionAnimation from './../animated-components/AboutSectionAnimation'

const AboutSection = () => {
  const { t } = useTranslation()
  const imageRoute = ''

  return (
    <motion.section
      id='about'
      className='min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-gray-100 dark:bg-gray-900'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      <AboutSectionAnimation />
      <div className='relative z-10 max-w-4xl mx-auto px-6'>
        {imageRoute && (
          <motion.img
            src=''
            alt='Aritz'
            className='w-32 h-32 rounded-full mx-auto mb-8 border-4 border-gray-600 dark:border-gray-400'
            variants={itemVariants}
          />
        )}

        <motion.h2
          className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-gray-200'
          variants={itemVariants}
        >
          {t("Welcome, I'm Aritz Silva")}
        </motion.h2>
        <motion.p
          className='text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-700 dark:text-gray-300 dark:text-shadow-dark'
          variants={itemVariants}
        >
          {t('intro')}
        </motion.p>
        <motion.div
          className='flex justify-center space-x-6 mb-8'
          variants={itemVariants}
        >
          <a
            href='https://github.com/aritzsilva98'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub Profile'
          >
            <Github
              size={24}
              className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/aritz-silva-galan/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn Profile'
          >
            <Linkedin
              size={24}
              className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            />
          </a>
          <a
            href='mailto:aritzsilva98@gmail.com'
            aria-label='Email Aritz'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Mail
              size={24}
              className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            />
          </a>
        </motion.div>
        <motion.div className='flex justify-center space-x-4' variants={itemVariants}>
          <motion.a
            href='/CVs/Aritz_Silva_Galán_CV.pdf'
            download
            className='px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.05 }}
          >
            {t('Download')} CV (ES)
          </motion.a>
          <motion.a
            href='/CVs/Aritz_Silva_Galan_CV_Eng.pdf'
            download
            className='px-8 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 hover:shadow-xl transition duration-300'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.05 }}
          >
            {t('Download')} CV (EN)
          </motion.a>
        </motion.div>
      </div>
      <motion.div
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown size={32} className='text-gray-600 dark:text-gray-400' />
      </motion.div>
    </motion.section>
  )
}

export default AboutSection
