import FadeInWhenVisible from '../utils/FadeInWhenvisible'
import { useTranslation } from 'react-i18next'

const TestimonialCard = ({ testimonial }) => {
  const { t } = useTranslation()
  return (
    <FadeInWhenVisible>
      <div className='bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg max-w-sm flex flex-col h-64'>
        <p className='text-gray-600 dark:text-gray-300 mb-4 flex-grow'>
          {testimonial.message}
        </p>
        <div className='flex flex-row justify-between mt-auto'>
          <p className='font-semibold text-indigo-600 dark:text-indigo-400'>
            - {testimonial.name}
          </p>
          {testimonial.business && (
            <p className='font-semibold text-indigo-600 dark:text-indigo-400'>
              {t('From')} {testimonial.business}
            </p>
          )}
        </div>
      </div>
    </FadeInWhenVisible>
  )
}

export default TestimonialCard
