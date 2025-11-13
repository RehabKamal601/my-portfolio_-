import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className={`py-24 transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-950 to-black' : 'bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/30'}`}>
      {/* Background decorations */}
      <div className={`absolute top-10 left-10 w-32 h-32 rounded-full blur-3xl transition-opacity duration-500 ${isDark ? 'bg-amber-500/10' : 'bg-amber-200/40'}`}></div>
      <div className={`absolute bottom-10 right-10 w-28 h-28 rounded-full blur-2xl transition-opacity duration-500 ${isDark ? 'bg-orange-400/10' : 'bg-orange-200/30'}`}></div>
      <div className={`absolute top-1/2 left-1/4 w-20 h-20 rounded-full blur-xl transition-opacity duration-500 ${isDark ? 'bg-amber-300/5' : 'bg-amber-300/20'}`}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={itemVariants}
              className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 ${isDark ? 'from-amber-300 via-amber-400 to-orange-400' : 'from-amber-700 via-amber-600 to-orange-600'}`}
            >
              Get In Touch
            </motion.h2>
            
            <motion.div
              variants={itemVariants}
              className={`w-24 h-1.5 mx-auto rounded-full mb-6 shadow-lg transition-colors duration-300 ${isDark ? 'bg-gradient-to-r from-amber-400 to-orange-500' : 'bg-gradient-to-r from-amber-500 to-orange-500'}`}
            ></motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {/* Contact Details */}
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl shadow-lg border transition-colors duration-300 ${isDark ? 'bg-gray-800/80 backdrop-blur-sm border-gray-700' : 'bg-white/90 backdrop-blur-sm border-amber-200'}`}
            >
              <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-amber-400' : 'text-amber-800'}`}>
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className={`text-lg ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>📧</span>
                  <div>
                    <p className={`font-medium transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email</p>
                    <a 
                      href="mailto:wwwrehabkamal601@gmail.com" 
                      className={`transition-colors duration-300 hover:text-amber-500 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                      Rehabkamal
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className={`text-lg ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>📱</span>
                  <div>
                    <p className={`font-medium transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Phone</p>
                    <a 
                      href="tel:+201146391547" 
                      className={`transition-colors duration-300 hover:text-amber-500 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                      +20 1060530117
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className={`text-lg ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>📍</span>
                  <div>
                    <p className={`font-medium transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Location</p>
                    <p className={`transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Minya, Egypt
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links Placeholder */}
              <div className="mt-8 pt-6 border-t border-gray-600/30">
                <h4 className={`font-semibold mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Connect With Me
                </h4>
                <div className="flex gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div 
                      key={item}
                      className={`w-10 h-10 rounded-lg border-2 border-dashed transition-colors duration-300 ${isDark ? 'border-gray-600' : 'border-amber-300'}`}
                    ></div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Languages Section */}
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl shadow-lg border transition-colors duration-300 ${isDark ? 'bg-gray-800/80 backdrop-blur-sm border-gray-700' : 'bg-white/90 backdrop-blur-sm border-amber-200'}`}
            >
              <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-amber-400' : 'text-amber-800'}`}>
                Languages
              </h3>
              
              <div className="space-y-3">
                <div className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-300 ${isDark ? 'bg-gray-700/50' : 'bg-amber-100/50'}`}>
                  <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-amber-400' : 'bg-amber-500'}`}></div>
                  <span className={`font-medium transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Arabic
                  </span>
                </div>
                
                <div className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-300 ${isDark ? 'bg-gray-700/50' : 'bg-amber-100/50'}`}>
                  <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-amber-400' : 'bg-amber-500'}`}></div>
                  <span className={`font-medium transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    English
                  </span>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 pt-6 border-t border-gray-600/30">
                <p className={`text-lg leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              💫 Looking forward to connecting with you!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;