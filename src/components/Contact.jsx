import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'wwwrehabkamal601@gmail.com',
      link: 'mailto:wwwrehabkamal601@gmail.com',
      description: 'Send me an email for professional inquiries'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/RehabKamal',
      link: 'https://www.linkedin.com/in/rehab-kamal-7574801b4/',
      description: 'Connect with me professionally'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/RehabKamal',
      link: 'https://github.com/RehabKamal601',
      description: 'Check out my projects and code'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+20 106 053 0117',
      link: 'tel:+201060530117',
      description: 'Call or WhatsApp me directly'
    }
  ];

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
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <motion.div
              variants={itemVariants}
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl shadow-lg border mb-6 transition-colors duration-300 ${isDark ? 'bg-gray-800/80 backdrop-blur-sm border-gray-700' : 'bg-white/80 backdrop-blur-sm border-amber-200'}`}
            >
              <div className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-amber-400' : 'bg-amber-500'}`}></div>
              <span className={`font-semibold text-sm transition-colors duration-300 ${isDark ? 'text-amber-400' : 'text-amber-700'}`}>LET'S CONNECT</span>
            </motion.div>
            
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
            
            <motion.p
              variants={itemVariants}
              className={`text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-amber-700/80'}`}
            >
              I'm currently open to new opportunities and collaborations. Whether you have a project in mind
              or just want to say hi, I'd love to hear from you!
            </motion.p>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border relative overflow-hidden ${isDark ? 'bg-gray-800/80 backdrop-blur-sm border-gray-700 hover:border-amber-400' : 'bg-white/90 backdrop-blur-sm border-amber-200 hover:border-amber-400'}`}
              >
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-16 h-16 rounded-full -translate-y-8 translate-x-8 group-hover:scale-110 transition-transform duration-500 ${isDark ? 'bg-amber-500/10' : 'bg-amber-100'}`}></div>
                
                <div className="relative z-10">
                  <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className={`font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-amber-400 group-hover:text-amber-300' : 'text-amber-800 group-hover:text-amber-700'}`}>
                    {method.title}
                  </h3>
                  <p className={`text-sm font-medium mb-2 transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    {method.value}
                  </p>
                  <p className={`text-xs transition-colors duration-300 ${isDark ? 'text-gray-400 group-hover:text-amber-400' : 'text-gray-500 group-hover:text-amber-600'}`}>
                    {method.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className={`rounded-2xl p-8 shadow-xl border transition-colors duration-300 ${isDark ? 'bg-gray-800/80 backdrop-blur-sm border-gray-700' : 'bg-white/90 backdrop-blur-sm border-amber-200'}`}
          >
            <div className="text-center mb-8">
              <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-amber-400' : 'text-amber-800'}`}>
                Send Me a Message
              </h3>
              <p className={`transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Have a project in mind? Let's discuss how we can work together!
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all duration-300 ${isDark ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-500 focus:border-amber-400 focus:ring-amber-400/20' : 'border-amber-200 focus:border-amber-500 focus:ring-amber-500/20'}`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all duration-300 ${isDark ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-500 focus:border-amber-400 focus:ring-amber-400/20' : 'border-amber-200 focus:border-amber-500 focus:ring-amber-500/20'}`}
                  />
                </div>
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all duration-300 ${isDark ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-500 focus:border-amber-400 focus:ring-amber-400/20' : 'border-amber-200 focus:border-amber-500 focus:ring-amber-500/20'}`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Your Message
                </label>
                <textarea
                  placeholder="Tell me about your project or inquiry..."
                  rows="6"
                  className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${isDark ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-500 focus:border-amber-400 focus:ring-amber-400/20' : 'border-amber-200 focus:border-amber-500 focus:ring-amber-500/20'}`}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 ${isDark ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600' : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              💫 I typically respond within 24 hours. Looking forward to connecting with you!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;