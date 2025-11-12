import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

const Experience = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const experiences = [
    {
      period: '10/2022 – 01/2023',
      location: 'Minya, Egypt',
      title: 'Full Stack Developer',
      company: 'Sharedu',
      description: 'Developed a full-featured and responsive school website at Sharedu. Built dynamic web applications with modern technologies and responsive design principles.',
      skills: ['React', 'Node.js', 'Responsive Design', 'Web Development', 'UI/UX']
    },
    {
      period: '08/2020 – 08/2021',
      location: 'Minya, Egypt',
      title: 'Customer Service Representative',
      company: 'Nasser Social Bank',
      description: 'Provided excellent customer service in the Current Accounts Department. Handled client inquiries, managed accounts, and ensured customer satisfaction.',
      skills: ['Customer Service', 'Communication', 'Account Management', 'Problem Solving']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className={`py-24 transition-colors duration-300 ${isDark ? 'bg-gray-950' : 'bg-gradient-to-br from-gray-50 to-wheat-50/30'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-amber-300' : 'bg-gradient-to-r from-wheat-600 to-wheat-800 bg-clip-text text-transparent'}`}>
              Professional Experience
            </h2>
            <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              My professional journey and the experiences that shaped my career development
            </p>
            <div className={`w-24 h-1 mx-auto mt-6 rounded-full ${isDark ? 'bg-amber-400' : 'bg-gradient-to-r from-wheat-400 to-wheat-600'}`}></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b transform -translate-x-1/2 ${isDark ? 'from-amber-400/50 to-amber-600/50' : 'from-wheat-200 to-wheat-300'}`}></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 shadow-lg transform -translate-x-1.5 -translate-y-2 ${isDark ? 'bg-amber-400 border-gray-950' : 'bg-wheat-500 border-white'}`}></div>

                  {/* Date & Location */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} ml-12 md:ml-0`}>
                    <motion.div
                      className="inline-block space-y-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={`px-4 py-2 text-white font-bold rounded-full text-sm shadow-lg text-center transition-colors duration-300 ${isDark ? 'bg-amber-500' : 'bg-wheat-500'}`}>
                        {exp.period}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs text-center flex items-center justify-center gap-1 transition-colors duration-300 ${isDark ? 'bg-gray-800 text-gray-300 border border-gray-700' : 'bg-wheat-100 text-wheat-800'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {exp.location}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                    <motion.div
                      className={`group rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border relative overflow-hidden ${isDark ? 'bg-gray-900 border-gray-700 hover:border-amber-400/50' : 'bg-white border-wheat-200 hover:border-wheat-300'}`}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      {/* Background Decoration */}
                      <div className={`absolute top-0 right-0 w-20 h-20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform duration-500 ${isDark ? 'bg-gray-800' : 'bg-wheat-50'}`}></div>
                      
                      <div className="relative z-10">
                        {/* Company & Title */}
                        <div className="mb-4">
                          <h3 className={`text-2xl font-bold mb-2 group-hover:transition-colors transition-colors duration-300 ${isDark ? 'text-amber-400 group-hover:text-amber-300' : 'text-wheat-800 group-hover:text-wheat-900'}`}>
                            {exp.title}
                          </h3>
                          <p className={`text-lg font-semibold flex items-center gap-2 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-wheat-600'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                            </svg>
                            {exp.company}
                          </p>
                        </div>

                        {/* Description */}
                        <p className={`leading-relaxed mb-6 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {exp.description}
                        </p>
                        
                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <motion.span
                              key={i}
                              className={`px-3 py-1 rounded-full text-sm font-medium shadow-sm transition-all duration-300 ${isDark ? 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-amber-400' : 'bg-gradient-to-r from-wheat-50 to-wheat-100 text-wheat-800 border border-wheat-200 hover:border-wheat-300'}`}
                              whileHover={{ 
                                scale: 1.1,
                              }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Experience Note */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <div className={`rounded-2xl p-6 border transition-colors duration-300 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-wheat-50 border-wheat-200'}`}>
              <p className={`transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Also gained valuable experience in industrial engineering and technical support roles, 
                developing strong problem-solving and communication skills.
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="#contact"
              className={`inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${isDark ? 'bg-amber-500 hover:bg-amber-600' : 'bg-gradient-to-r from-wheat-500 to-wheat-600'}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get In Touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;