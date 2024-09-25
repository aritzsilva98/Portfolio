import AnimatedShape from './AnimatedShape'

const AboutSectionAnimation = () => {
  return (
    <svg
      className='absolute inset-0 w-full h-full'
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid slice'
    >
      <AnimatedShape
        className='stroke-blue-500 dark:stroke-blue-600 stroke-[0.5] fill-none'
        d='M50,10 A40,40 0 1,1 50,90 A40,40 0 1,1 50,10'
      />
      <AnimatedShape
        className='stroke-red-300 dark:stroke-red-900 stroke-[0.5] fill-none'
        d='M10,50 A40,40 0 0,1 50,10 A40,40 0 0,1 90,50 A40,40 0 0,1 50,90 A40,40 0 0,1 10,50 Z'
      />
      <AnimatedShape
        className='stroke-purple-200 dark:stroke-purple-900 stroke-[0.5] fill-none'
        d='M30,50 A20,20 0 0,1 70,50 A20,20 0 0,1 30,50 Z'
      />
    </svg>
  )
}

export default AboutSectionAnimation
