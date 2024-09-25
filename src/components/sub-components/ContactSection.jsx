import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../../data/variants.js'

import { useTranslation } from 'react-i18next'

import '../styles/redtag.css'

const ContactSection = () => {
  const { t } = useTranslation()
  return (
    <motion.section
      id='contact'
      className='py-20'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className='max-w-7xl mx-auto px-6'>
        <motion.h2
          className='text-4xl font-bold mb-12 text-center text-indigo-600 dark:text-indigo-400'
          variants={itemVariants}
        >
          {t('Get in Touch')}
        </motion.h2>
        <div className='flex flex-col items-center'>
          <motion.a
            href='mailto:aritzsilva98@gmail.com'
            className='text-xl font-semibold text-indigo-600 dark:text-indigo-400 hover:underline'
            variants={itemVariants}
          >
            aritzsilva98@gmail.com
          </motion.a>
          <motion.p
            className='text-lg text-gray-600 dark:text-gray-300 mt-4'
            variants={itemVariants}
          >
            {t('Get in Touch description')}
          </motion.p>
        </div>
        <div className='mt-12 max-w-2xl mx-auto relative'>
          <motion.form
            className='bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className='ribbon'>
              {t('unavailable')}
            </div>
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='block text-gray-600 dark:text-gray-300 mb-2'
              >
                {t('Name')}
              </label>
              <input
                type='text'
                id='name'
                className='w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300'
                required
                disabled
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-gray-600 dark:text-gray-300 mb-2'
              >
                {t('Email')}
              </label>
              <input
                type='email'
                id='email'
                className='w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300'
                required
                disabled
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='message'
                className='block text-gray-600 dark:text-gray-300 mb-2'
              >
                {t('Message')}
              </label>
              <textarea
                id='message'
                rows='4'
                className='w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300'
                required
                disabled
              ></textarea>
            </div>
            <button
              type='submit'
              // className='w-full py-2 bg-indigo-600 text-white rounded-lg dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-400'
              className='w-full py-2 bg-indigo-600 text-white rounded-lg dark:bg-indigo-500'
              disabled
            >
              {t('Send')}
            </button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactSection
