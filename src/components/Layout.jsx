import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <div className="min-h-screen bg-wheat-50">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="pt-20"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <footer className="bg-wheat-100 py-6 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-wheat-700">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout