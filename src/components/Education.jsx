import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

const EducationCard = ({ period, location, institution, program, description, projects, grade, index, isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`group rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border relative overflow-hidden ${isDark ? 'bg-gray-900 border-gray-700 hover:border-amber-400/50' : 'bg-white border-amber-200 hover:border-amber-300'}`}
    >
      {/* Background decoration */}
      <div className={`absolute top-0 right-0 w-20 h-20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform duration-500 ${isDark ? 'bg-gray-800' : 'bg-amber-50'}`}></div>
      
      <div className="relative z-10">
        {/* Header with period and location */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg group-hover:transition-colors ${isDark ? 'bg-gray-800 group-hover:bg-gray-700' : 'bg-amber-100 group-hover:bg-amber-200'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <span className={`px-3 py-1 text-white font-bold rounded-full text-sm transition-colors duration-300 ${isDark ? 'bg-amber-500' : 'bg-amber-500'}`}>
              {period}
            </span>
          </div>
          <div className={`flex items-center gap-2 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-amber-600'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">{location}</span>
          </div>
        </div>

        {/* Institution and Program */}
        <div className="mb-4">
          <h3 className={`text-2xl font-bold mb-2 group-hover:transition-colors transition-colors duration-300 ${isDark ? 'text-amber-400 group-hover:text-amber-300' : 'text-amber-800 group-hover:text-amber-900'}`}>
            {institution}
          </h3>
          <p className={`text-lg font-semibold transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-amber-600'}`}>{program}</p>
        </div>

        {/* Description */}
        <p className={`leading-relaxed mb-6 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          {description}
        </p>

        {/* Projects
        {projects && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-amber-700 mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
              Key Projects
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  className="px-3 py-2 bg-amber-50 text-amber-800 rounded-lg text-sm border border-amber-200"
                  whileHover={{ scale: 1.05, backgroundColor: "#fef7ed" }}
                >
                  {project}
                </motion.div>
              ))}
            </div>
          </div> */}
        {/* )} */}

        {/* Grade */}
        {grade && (
          <div className={`flex items-center justify-between pt-4 border-t transition-colors duration-300 ${isDark ? 'border-gray-700' : 'border-amber-200'}`}>
            <span className={`font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-amber-700'}`}>Grade:</span>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors duration-300 ${isDark ? 'bg-gray-800 text-amber-400' : 'bg-green-100 text-green-800'}`}>
              {grade}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Education = () => {
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

  const educationData = [
    {
      period: "09/2024 – present",
      location: "Minya, Minya",
      institution: "Information Technology Institute (ITI)",
      program: "Full Stack Web Developer",
      description: "Graduate from ITI's Open-Source Applications Development program. Proficient in the MERN stack, PHP, and Python with a solid background in responsive web applications and RESTful API development.",
      projects: [
        "Ecommerce Platform (Angular & Node.js)",
        "Job-Board Application (Laravel & Vue.js)",
        "Book share (React & Laravel)",
        "Medical Portal (Django & React)",
        "Adventure Travel Platform (Vue.js & JSON Server)",
        "Coffee Shop Management System (PHP Full-Stack Project)"
      ]
    },
    {
      period: "2016 – 2020",
      location: "Minya, Minya",
      institution: "Faculty of Computer and Information Technology",
      program: "Minya University - Department: Information System",
      description: "Bachelor's degree in Information Systems with comprehensive knowledge in computer science fundamentals, database management, and software engineering principles.",
      projects: [
        "Graduation Project: Flutter Application"
      ],
      grade: "Very Good"
    }
  ];

  return (
    <section id="education" className={`py-24 transition-colors duration-300 relative overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/30'}`}>
      {/* Background decorations */}
      <div className={`absolute top-20 right-10 w-32 h-32 rounded-full blur-2xl ${isDark ? 'bg-amber-400/10' : 'bg-amber-200/20'}`}></div>
      <div className={`absolute bottom-20 left-10 w-24 h-24 rounded-full blur-xl ${isDark ? 'bg-amber-400/10' : 'bg-orange-200/30'}`}></div>
      
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
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={containerVariants}
              className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-amber-300' : 'bg-gradient-to-r from-amber-700 via-amber-600 to-orange-600 bg-clip-text text-transparent'}`}
            >
              Education
            </motion.h2>
            <motion.div
              variants={containerVariants}
              className={`w-24 h-1.5 mx-auto rounded-full mb-6 ${isDark ? 'bg-amber-400' : 'bg-gradient-to-r from-amber-500 to-orange-500'}`}
            ></motion.div>
            <motion.p
              variants={containerVariants}
              className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-amber-700/80'}`}
            >
              My academic journey and professional training in computer science and web development
            </motion.p>
          </motion.div>

          {/* Education Cards */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <EducationCard
                key={index}
                index={index}
                period={edu.period}
                location={edu.location}
                institution={edu.institution}
                program={edu.program}
                description={edu.description}
                projects={edu.projects}
                grade={edu.grade}
                isDark={isDark}
              />
            ))}
          </div>

          {/* Additional Info */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200"
          > */}
            {/* <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-100 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div> */}
              {/* <div> */}
                {/* <h4 className="text-xl font-bold text-amber-800 mb-2">Graduation Project Excellence</h4>
                <p className="text-amber-700">
                  Achieved <strong>Excellent</strong> grade for Flutter-based graduation project, demonstrating strong mobile development skills and innovative problem-solving abilities.
                </p>
              </div> */}
            {/* </div> */}
          {/* </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;