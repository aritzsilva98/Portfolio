import { motion } from 'framer-motion'
import TestimonialCard from './TestimonialCard'
import { containerVariants, itemVariants } from '../../data/variants.js'
import { useTranslation } from 'react-i18next'

const TestimonialsSection = () => {
  const { t } = useTranslation()
  const testimonials = t('testimonialsData', { returnObjects: true })
  return (
    <motion.section
      id='testimonials'
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
          {t("What People Say")}
        </motion.h2>
        <div className='flex flex-wrap gap-8 justify-center'>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default TestimonialsSection
