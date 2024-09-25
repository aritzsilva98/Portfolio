import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Flag from 'react-world-flags'
import { languages } from './../../translations/availableLanguages/languages'

const LanguageOption = ({ code, name, flag, onClick }) => (
  <button
    key={code}
    onClick={() => onClick(code)}
    className='flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left'
  >
    <Flag code={flag} style={{ width: '24px', height: '16px' }} />
    <span className='ml-2'>{name}</span>
  </button>
)

const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language)

  useEffect(() => {
    const browserLanguage = navigator.language.split('-')[0]
    const detectedLanguage = languages.find(
      lang => lang.code === browserLanguage
    )
      ? browserLanguage
      : 'en'

    if (!languages.find(lang => lang.code === i18n.language)) {
      i18n.changeLanguage(detectedLanguage)
      setCurrentLanguage(detectedLanguage)
    } else {
      setCurrentLanguage(i18n.language)
    }
  }, [i18n])

  const handleLanguageChange = lang => {
    i18n.changeLanguage(lang)
    setCurrentLanguage(lang)
    setIsOpen(false)
  }

  const currentLang =
    languages.find(lang => lang.code === currentLanguage) || languages[0]

  return (
    <div className='relative'>
      <motion.button
        className='flex items-center space-x-2 p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup='true'
        aria-expanded={isOpen}
      >
        <Flag
          code={currentLang.flag}
          style={{ width: '24px', height: '16px' }}
        />
        <span className='ml-2'>{currentLang.name}</span>
      </motion.button>

      {isOpen && (
        <div className='absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5'>
          <div className='p-1'>
            {languages.map(lang => (
              <LanguageOption
                key={lang.code}
                code={lang.code}
                name={lang.name}
                flag={lang.flag}
                onClick={handleLanguageChange}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
