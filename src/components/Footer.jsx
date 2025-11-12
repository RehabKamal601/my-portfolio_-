import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/RehabKamal601",
      label: "GitHub"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/rehab-kamal-7574801b4/",
      label: "LinkedIn"
    },
    {
      icon: FaEnvelope,
      href: "mailto:wwwrehabkamal601@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className={`w-full relative overflow-hidden transition-colors duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-950 to-black border-gray-800' 
        : 'bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/30 border-amber-200'
    } border-t-2 border-solid`}>
      
      {/* Background decorations */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r transition-all duration-500 ${
        isDark ? 'from-amber-500 via-orange-500 to-amber-400' : 'from-amber-400 via-orange-400 to-amber-300'
      }`}></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Copyright section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start gap-3"
          >
            <div className={`flex items-center gap-2 text-lg font-semibold transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-amber-800'
            }`}>
              <span>{new Date().getFullYear()} &copy; Rehab Kamal</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`${isDark ? 'text-amber-400' : 'text-amber-600'}`}
              >
                <FaHeart size={16} />
              </motion.div>
            </div>
            <p className={`text-sm transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-amber-600'
            }`}>
              Crafted with passion and modern technologies
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-6"
          >
            <h3 className={`text-lg font-bold transition-colors duration-300 ${
              isDark ? 'text-amber-400' : 'text-amber-700'
            }`}>
              Let's Connect
            </h3>
            <div className="flex items-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 rounded-2xl shadow-lg transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-800/80 border border-gray-700 hover:bg-amber-500/20 hover:border-amber-400 text-gray-300 hover:text-amber-400' 
                      : 'bg-white/80 border border-amber-200 hover:bg-amber-500/20 hover:border-amber-400 text-amber-700 hover:text-amber-600'
                  } backdrop-blur-sm`}
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center lg:items-end gap-3"
          >
            <p className={`text-sm font-medium transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-amber-600'
            }`}>
              Open to new opportunities
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                isDark 
                  ? 'bg-amber-500 hover:bg-amber-600 text-white' 
                  : 'bg-amber-500 hover:bg-amber-600 text-white'
              } shadow-lg hover:shadow-xl`}
            >
              Hire Me
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 pt-6 border-t border-dashed"
        >
          <p className={`text-xs transition-colors duration-300 ${
            isDark ? 'text-gray-500' : 'text-amber-500'
          }`}>
            Built with React, Tailwind CSS & Framer Motion • Always learning, always growing 🚀
          </p>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className={`absolute bottom-4 left-10 w-6 h-6 rounded-full opacity-20 ${
        isDark ? 'bg-amber-400' : 'bg-amber-500'
      }`}></div>
      <div className={`absolute top-8 right-20 w-4 h-4 rounded-full opacity-30 ${
        isDark ? 'bg-orange-400' : 'bg-orange-500'
      }`}></div>
    </footer>
  );
}

export default Footer;