import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

const SkillCategory = ({ title, skills, index, isDark }) => {
  return (
    <motion.div
      className={`group rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border relative overflow-hidden ${isDark ? 'bg-gray-900 border-gray-700 hover:border-amber-400/50' : 'bg-white border-wheat-200 hover:border-wheat-300'}`}
      whileHover={{ 
        scale: 1.02,
        y: -5
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Background Decoration */}
      <div className={`absolute top-0 right-0 w-20 h-20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform duration-500 ${isDark ? 'bg-gray-800' : 'bg-wheat-50'}`}></div>
      
      <div className="relative z-10">
        <h3 className={`text-2xl font-bold mb-6 group-hover:transition-colors duration-300 flex items-center gap-3 ${isDark ? 'text-amber-400 group-hover:text-amber-300' : 'text-wheat-700 group-hover:text-wheat-800'}`}>
          <div className={`w-3 h-3 rounded-full group-hover:scale-125 transition-transform duration-300 ${isDark ? 'bg-amber-400' : 'bg-wheat-500'}`}></div>
          {title}
        </h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, skillIndex) => (
            <motion.span
              key={skillIndex}
              className={`px-4 py-2 rounded-full text-sm font-medium border shadow-sm hover:shadow-md transition-all duration-300 cursor-default ${isDark ? 'bg-gray-800 text-gray-300 border-gray-700 hover:border-amber-400' : 'bg-gradient-to-r from-wheat-50 to-wheat-100 text-wheat-800 border-wheat-200 hover:border-wheat-300'}`}
              whileHover={{ 
                scale: 1.1,
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: (index * 0.1) + (skillIndex * 0.05) 
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
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
        staggerChildren: 0.3
      }
    }
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["html","css", "JavaScript","bootstab","React","Angular","Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      skills: [ "Laravel", "PHP" ,"Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & Technologies",
      skills: ["GitHub", "Docker", "AWS", "REST APIs", "GraphQL"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management"]
    }
  ];

  return (
    <section id="skills" className={`py-24 transition-colors duration-300 ${isDark ? 'bg-gray-950' : 'bg-gradient-to-br from-wheat-25 to-wheat-100/30'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 }
              }
            }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-amber-300' : 'bg-gradient-to-r from-wheat-600 to-wheat-800 bg-clip-text text-transparent'}`}>
              Skills & Expertise
            </h2>
            <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Technologies and tools I use to bring ideas to life and create amazing digital experiences
            </p>
            <div className={`w-24 h-1 mx-auto mt-6 rounded-full ${isDark ? 'bg-amber-400' : 'bg-gradient-to-r from-wheat-400 to-wheat-600'}`}></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={index}
                title={category.title}
                skills={category.skills}
                index={index}
                isDark={isDark}
              />
            ))}
          </div>

          {/* Progress Bars Section */}
          {/* <motion.div
            className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-wheat-200"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-wheat-700 text-center">Proficiency Levels</h3>
            <div className="space-y-6">
              {[
                { skill: "JavaScript/TypeScript", level: 90 },
                { skill: "React/Next.js", level: 85 },
                { skill: "Node.js/Express", level: 80 },
                { skill: "Python/Django", level: 75 },
                { skill: "Database Design", level: 70 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                >
                  <div className="flex justify-between text-sm font-medium text-gray-700">
                    <span>{item.skill}</span>
                    <span>{item.level}%</span>
                  </div>
                  <div className="h-3 bg-wheat-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-wheat-400 to-wheat-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.level}%` } : {}}
                      transition={{ duration: 1.5, delay: 1.2 + (index * 0.1), ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;