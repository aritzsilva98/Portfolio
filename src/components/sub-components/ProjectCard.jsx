import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const ProjectCard = ({ project, className }) => {
  const { t } = useTranslation()

  // Map for translations
  const translationKeys = {
    'Portfolio Website': {
      name: 'portfolioTitle',
      description: 'portfolioDescription'
    },
    'Role-playing campaign guide website': {
      name: 'roleWebsiteTitle',
      description: 'roleWebsiteDescription'
    },
    'Task Management App': {
      name: 'taskManagementTitle',
      description: 'taskManagementDescription'
    }
  }

  const { name, description } = translationKeys[project.name] || {}

  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col ${className} h-full min-w-96 gap-8`}
      whileHover={{
        scale: 1.03,
        boxShadow: '0px 5px 15px rgba(0,0,0,0.1)'
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {project.image && (
        <img
          src={project.image}
          alt={t(name)}
          className='w-full h-48 object-cover'
        />
      )}

      <div className='p-6 flex-1 flex flex-col'>
        <h3 className='text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400'>
          {name ? t(name) : 'Cooming Soon...'}
        </h3>
        {project.description && (
          <p className='text-gray-600 dark:text-gray-300 mb-4 flex-grow'>
            {t(description)}
          </p>
        )}

        <div className='flex flex-wrap gap-2 mb-4'>
          {project.technologies &&
            project.technologies.map((tech, i) => (
              <span
                key={i}
                className='bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300'
              >
                {tech}
              </span>
            ))}
        </div>
        <div className='flex space-x-4 mt-auto'>
          {project.description && (
            <>
              <motion.a
                href={project.github}
                className='text-indigo-600 dark:text-indigo-400 hover:underline flex items-center'
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Github size={20} className='mr-2' />
                GitHub
              </motion.a>
              <motion.a
                href={project.link}
                className='text-indigo-600 dark:text-indigo-400 hover:underline hover:cursor-pointer flex items-center'
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                target='_blank'
                rel='noopener noreferrer'
              >
                <ExternalLink size={20} className='mr-2' />
                Live
              </motion.a>
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
