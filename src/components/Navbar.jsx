import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navVariants = {
    initial: { y: -100 },
    animate: { y: 0 },
    exit: { y: -100 }
  }

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? isDark 
            ? 'py-4 bg-gray-900/90 backdrop-blur-sm shadow-sm border-b border-gray-800' 
            : 'py-4 bg-wheat-50/90 backdrop-blur-sm shadow-sm border-b border-wheat-200'
          : isDark
            ? 'py-6 bg-gray-950'
            : 'py-6 bg-white'
      }`}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={navVariants}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`font-serif font-bold text-2xl tracking-wide ${isDark ? 'text-white' : 'text-dark'}`}
          >
            Portfolio
          </motion.h1>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#about" className={`nav-link ${isDark ? 'text-gray-300 hover:text-white' : 'text-dark hover:text-wheat-700'}`}>About</a>
            <a href="#experience" className={`nav-link ${isDark ? 'text-gray-300 hover:text-white' : 'text-dark hover:text-wheat-700'}`}>Experience</a>
            <a href="#projects" className={`nav-link ${isDark ? 'text-gray-300 hover:text-white' : 'text-dark hover:text-wheat-700'}`}>Projects</a>
            <a href="#skills" className={`nav-link ${isDark ? 'text-gray-300 hover:text-white' : 'text-dark hover:text-wheat-700'}`}>Skills</a>
            <a href="#education" className={`nav-link ${isDark ? 'text-gray-300 hover:text-white' : 'text-dark hover:text-wheat-700'}`}>Education</a>
            <a href="#contact" className={`nav-link ${isDark ? 'text-gray-300 hover:text-white' : 'text-dark hover:text-wheat-700'}`}>Contact</a>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-wheat-100 hover:bg-wheat-200'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.828a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 7a3 3 0 110 6 3 3 0 010-6zm-4.22-1.78a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414L5.78 5.22a1 1 0 010-1.414zM2.05 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM2.868 16.22a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828-2.828a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 18a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm4.22-1.78a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828-2.828a1 1 0 011.414 0l.707.707a1 1 0 01-1.414-1.414l-.707.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className={`flex flex-col justify-center items-center lg:hidden ${isDark ? 'text-white' : 'text-dark'}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span className={`${isDark ? 'bg-white' : 'bg-dark'} block h-0.5 w-6 rounded-sm transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`${isDark ? 'bg-white' : 'bg-dark'} block h-0.5 w-6 rounded-sm transition-all duration-300 my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`${isDark ? 'bg-white' : 'bg-dark'} block h-0.5 w-6 rounded-sm transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className={`fixed inset-0 z-40 lg:hidden ${isDark ? 'bg-gray-900/95' : 'bg-wheat-50/95'}`}
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'tween' }}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="space-y-8 text-center">
                    {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                      <div key={item}>
                        <a
                          href={`#${item.toLowerCase()}`}
                          className={`text-xl nav-link ${isDark ? 'text-gray-300 hover:text-white' : 'text-dark hover:text-wheat-700'}`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  )
}

export default Navbar
