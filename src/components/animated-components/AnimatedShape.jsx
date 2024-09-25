import { motion } from 'framer-motion'

const AnimatedShape = ({ className, d }) => (
  <motion.path
    className={className}
    d={d}
    initial={{ pathLength: 0, opacity: 0, scale: 0.5 }}
    animate={{
      pathLength: [0, 1],
      opacity: [0, 0.4, 0.6, 1],
      scale: [0.5, 1.5, 0.8, 1],
    }}
    transition={{
      duration: 10,
      ease: "easeInOut",
    }}
  />
)

export default AnimatedShape
