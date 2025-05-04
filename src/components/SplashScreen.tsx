import { motion } from 'framer-motion'
import './SplashScreen.css'

export default function SplashScreen() {
  return (
    <div className="splash-bg">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 10 }}
        className="flex flex-col items-center"
      >
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-4xl font-extrabold text-white drop-shadow"
        >
          Traveller 🍉
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-2 text-lg text-white drop-shadow"
        >
          Taste the world. One slice at a time.
        </motion.p>
      </motion.div>
    </div>
  )
}
