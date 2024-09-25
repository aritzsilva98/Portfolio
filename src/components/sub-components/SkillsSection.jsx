import { motion } from 'framer-motion'
import FadeInWhenVisible from '../utils/FadeInWhenvisible'
import SkillCard from './SkillCard'

import { containerVariants, itemVariants } from '../../data/variants.js'
import { skills } from '../../data/skillsData.js'

import { useTranslation } from 'react-i18next'

const SkillsSection = () => {
  const { t } = useTranslation()
  return (
    <motion.section
      id='skills'
      className='py-20 bg-gray-50 dark:bg-gray-800'
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
          {t('Skills & Expertise')}
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skills.map((skill, index) => (
            <FadeInWhenVisible key={index}>
              <SkillCard skill={skill} />
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default SkillsSection
