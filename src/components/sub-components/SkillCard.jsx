import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { formatTranslationKey } from './../utils/textUtils';


const SkillCard = ({ skill }) => {
  const { t } = useTranslation()

  const nameKey = formatTranslationKey(skill.name)
  const descriptionKey = `${nameKey}-desc`

  return (
    <motion.div
      className='bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg h-full flex flex-col justify-between'
      whileHover={{
        scale: 1.05,
        boxShadow: '0px 5px 15px rgba(0,0,0,0.1)'
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div>
        <div className='flex items-center mb-4'>
          <span className='text-indigo-600 dark:text-indigo-400 mr-4'>
            {skill.icon}
          </span>
          <h3 className='text-xl font-semibold'>
            {t(nameKey, skill.name)}
          </h3>
        </div>
        <p className='text-gray-600 dark:text-gray-300 mb-4'>
          {t(descriptionKey, skill.description)}
        </p>
      </div>
      <div>
        <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600 mb-2'>
          <motion.div
            className='bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500'
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          ></motion.div>
        </div>
        <p className='text-right text-sm text-gray-600 dark:text-gray-400'>
          {skill.level}%
        </p>
      </div>
    </motion.div>
  )
}

export default SkillCard
