import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.03,
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // const stats = [
  //   { number: "2+", label: "Years Experience", icon: "🚀" },
  //   { number: "20+", label: "Projects Completed", icon: "💻" },
  //   { number: "10+", label: "Technologies", icon: "🛠️" },
  //   { number: "100%", label: "Dedication", icon: "❤️" }
  // ];

  // const skills = [
  //   { name: "Frontend", technologies: ["React", "Vue.js", "Angular", "JavaScript", "TypeScript"] },
  //   { name: "Backend", technologies: ["Node.js", "Laravel", "PHP", "Python", "Django"] },
  //   { name: "Database", technologies: ["MySQL", "MongoDB", "PostgreSQL"] },
  //   { name: "Tools", technologies: ["Git", "Docker", "AWS", "REST APIs"] }
  // ];

  return (
    <section id="about" className={`py-24 transition-colors duration-500 relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-950 to-black' 
        : 'bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/30'
    }`}>
      
      {/* Enhanced Background Decorations */}
      <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b transition-all duration-500 ${
        isDark ? 'from-amber-500/5 to-transparent' : 'from-amber-200/20 to-transparent'
      }`}></div>
      <div className={`absolute top-20 left-10 w-40 h-40 rounded-full blur-3xl transition-all duration-500 ${
        isDark ? 'bg-amber-400/10' : 'bg-amber-200/40'
      }`}></div>
      <div className={`absolute bottom-20 right-10 w-32 h-32 rounded-full blur-2xl transition-all duration-500 ${
        isDark ? 'bg-orange-400/10' : 'bg-orange-200/30'
      }`}></div>
      <div className={`absolute top-1/3 left-1/4 w-20 h-20 rounded-full blur-xl transition-all duration-500 ${
        isDark ? 'bg-amber-300/5' : 'bg-amber-300/20'
      }`}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Enhanced Header Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-20"
          >
            {/* <motion.div
              variants={itemVariants}
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl shadow-lg border mb-6 transition-all duration-500 ${
                isDark 
                  ? 'bg-gray-800/80 backdrop-blur-sm border-gray-700' 
                  : 'bg-white/80 backdrop-blur-sm border-amber-200'
              }`}
            >
               <div className={`w-2 h-2 rounded-full animate-pulse ${
                isDark ? 'bg-amber-400' : 'bg-amber-500'
              }`}></div> 
              <span className={`font-semibold text-sm transition-colors duration-300 ${
                isDark ? 'text-amber-400' : 'text-amber-700'
              }`}>ABOUT ME</span> 
            </motion.div> */}
            
            <motion.h2 
              variants={itemVariants}
              className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent transition-all duration-500 ${
                isDark 
                  ? 'from-amber-300 via-amber-400 to-orange-400' 
                  : 'from-amber-700 via-amber-600 to-orange-600'
              }`}
            >
              About Me
            </motion.h2>
            
            <motion.div
              variants={itemVariants}
              className={`w-32 h-1.5 mx-auto rounded-full mb-6 shadow-lg transition-colors duration-500 ${
                isDark 
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500' 
                  : 'bg-gradient-to-r from-amber-500 to-orange-500'
              }`}
            ></motion.div>
            
            <motion.p
              variants={itemVariants}
              className={`text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-amber-700/80'
              }`}
            >
{/* I'm a Junior Full Stack Web Developer with a strong foundation in open source technologies and hands-on experience in building 
responsive web applications. Skilled in using modern frameworks like Laravel, Vue.js, Node.js, and Angular to develop both frontend
 and backend solutions.

I graduated from the Faculty of Computers and Information at Minia University and completed 
a 9-month intensive Open Source training program at the Information Technology Institute (ITI). 
I'm passionate about writing clean, maintainable code, collaborating in team environments, 
and continuously learning new technologies.             */}
Full Stack Developer with expertise in modern frameworks and responsive web applications.
 ITI-trained professional dedicated to clean code and continous learning.
</motion.p>
          </motion.div>

          {/* Enhanced Content Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Introduction Card */}
            {/* <motion.div
              variants={cardVariants}
              whileHover="hover"
              className={`group relative rounded-3xl p-8 shadow-xl border-2 transition-all duration-500 h-full ${
                isDark 
                  ? 'bg-gray-800/80 backdrop-blur-sm border-gray-700 hover:border-amber-400/50 hover:shadow-2xl' 
                  : 'bg-white/90 backdrop-blur-sm border-amber-200 hover:border-amber-400 hover:shadow-2xl'
              }`}
            >
              <div className={`absolute -top-3 -left-3 w-6 h-6 rounded-full ${
                isDark ? 'bg-amber-400' : 'bg-amber-500'
              }`}></div>
              <div className={`absolute -bottom-3 -right-3 w-8 h-8 rounded-full opacity-60 ${
                isDark ? 'bg-amber-400' : 'bg-orange-400'
              }`}></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl group-hover:transition-colors duration-300 ${
                    isDark 
                      ? 'bg-gray-700 group-hover:bg-amber-500/20' 
                      : 'bg-amber-100 group-hover:bg-amber-200'
                  }`}>
                    <span className={`text-2xl ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>👨‍💻</span>
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                      isDark ? 'text-amber-300' : 'text-amber-800'
                    }`}>Full Stack Developer</h3>
                    <p className={`text-sm transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-amber-600'
                    }`}>Building the future, one line at a time</p>
                  </div>
                </div>
                <p className={`leading-relaxed text-lg flex-1 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  I'm a <strong className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-amber-300' : 'text-amber-700'
                  }`}>Junior Full Stack Web Developer</strong> with a strong foundation in open source technologies and hands-on experience in building responsive web applications. Skilled in using modern frameworks like <strong className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-amber-300' : 'text-amber-700'
                  }`}>Laravel, Vue.js, Node.js, and Angular</strong> to develop both frontend and backend solutions.
                </p>
              </div>
            </motion.div> */}

            {/* Education Card */}
            {/* <motion.div
              variants={cardVariants}
              whileHover="hover"
              className={`group relative rounded-3xl p-8 shadow-xl border-2 transition-all duration-500 h-full ${
                isDark 
                  ? 'bg-gray-800/80 backdrop-blur-sm border-gray-700 hover:border-amber-400/50 hover:shadow-2xl' 
                  : 'bg-white/90 backdrop-blur-sm border-amber-200 hover:border-amber-400 hover:shadow-2xl'
              }`}
            >
              <div className={`absolute -top-2 -right-2 w-16 h-16 rounded-full group-hover:scale-110 transition-transform duration-700 ${
                isDark ? 'bg-amber-400/10' : 'bg-amber-300/20'
              }`}></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl group-hover:transition-colors duration-300 ${
                    isDark 
                      ? 'bg-gray-700 group-hover:bg-amber-500/20' 
                      : 'bg-amber-100 group-hover:bg-amber-200'
                  }`}>
                    <span className={`text-2xl ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>🎓</span>
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                      isDark ? 'text-amber-300' : 'text-amber-800'
                    }`}>Education & Training</h3>
                    <p className={`text-sm transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-amber-600'
                    }`}>Continuous learning journey</p>
                  </div>
                </div>
                <p className={`leading-relaxed text-lg flex-1 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  I graduated from the <strong className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-amber-300' : 'text-amber-700'
                  }`}>Faculty of Computers and Information at Minia University</strong> and completed a <strong className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-amber-300' : 'text-amber-700'
                  }`}>9-month intensive Open Source training program</strong> at the <strong className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-amber-300' : 'text-amber-700'
                  }`}>Information Technology Institute (ITI)</strong>.
                </p>
              </div>
            </motion.div>*/}
          </div> 

          {/* Skills Section */}
          {/* <motion.div
            variants={itemVariants}
            className="mb-16"
          >
            <h3 className={`text-3xl font-bold text-center mb-8 transition-colors duration-300 ${
              isDark ? 'text-amber-300' : 'text-amber-800'
            }`}>Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-2xl shadow-lg border transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-800/80 border-gray-700 hover:border-amber-400/50' 
                      : 'bg-white/80 border-amber-200 hover:border-amber-400'
                  }`}
                >
                  <h4 className={`text-lg font-bold mb-4 transition-colors duration-300 ${
                    isDark ? 'text-amber-400' : 'text-amber-700'
                  }`}>{skill.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                          isDark 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div> */}

          {/* Enhanced Stats Section */}
          {/* <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={`text-center p-8 rounded-3xl shadow-xl border-2 transition-all duration-500 ${
                  isDark 
                    ? 'bg-gray-800/80 backdrop-blur-sm border-gray-700 hover:border-amber-400/50 hover:shadow-2xl' 
                    : 'bg-white/90 backdrop-blur-sm border-amber-200 hover:border-amber-400 hover:shadow-2xl'
                }`}
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className={`text-3xl md:text-4xl font-bold mb-2 transition-colors duration-300 ${
                  isDark ? 'text-amber-400' : 'text-amber-700'
                }`}>{stat.number}</div>
                <div className={`text-sm font-semibold transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-amber-600'
                }`}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default About;