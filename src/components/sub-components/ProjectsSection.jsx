import { motion } from 'framer-motion'
import FadeInWhenVisible from '../utils/FadeInWhenvisible'
import ProjectCard from './ProjectCard'
import { containerVariants, itemVariants } from '../../data/variants.js'
import { projects } from '../../data/projectsData'

import { useTranslation } from 'react-i18next'

const ProjectsSection = () => {
  const { t } = useTranslation()
  return (
    <motion.section
      id='projects'
      className='py-20 w-full'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className='max-w-screen-2xl mx-auto px-6'>
        <motion.h2
          className='text-4xl font-bold mb-12 text-center text-indigo-600 dark:text-indigo-400'
          variants={itemVariants}
        >
          {t('Featured Projects')}
        </motion.h2>
        <div className='grid grid-cols-1 ls:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <FadeInWhenVisible key={index} className='flex'>
              <ProjectCard project={project} className='flex' />
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default ProjectsSection
