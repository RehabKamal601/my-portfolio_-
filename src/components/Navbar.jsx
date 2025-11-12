import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

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
        isScrolled ? 'py-4 bg-wheat-50/90 backdrop-blur-sm shadow-sm' : 'py-6'
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
            className="font-serif font-bold text-2xl tracking-wide"
          >
            Portfolio
          </motion.h1>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex flex-col justify-center items-center lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`bg-dark block h-0.5 w-6 rounded-sm transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-dark block h-0.5 w-6 rounded-sm transition-all duration-300 my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-dark block h-0.5 w-6 rounded-sm transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 bg-wheat-50/95 z-40 lg:hidden"
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
                          className="text-xl nav-link"
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