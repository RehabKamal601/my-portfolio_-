import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

const ProjectCard = ({ title, description, tech, role, grade, index, image, githubLink, isDark }) => {
  const getProjectIcon = (title) => {
    const icons = {
      'Ecommerce Platform': '🛒',
      'Job-Board Application': '💼',
      'Book Share': '📚',
      'Medical Portal': '🏥',
      'Adventure Travel Platform': '✈️',
      'Coffee Shop Management System': '☕'
    };
    return icons[title] || '💻';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border relative h-full ${isDark ? 'bg-gray-900 border-gray-700 hover:border-amber-400/50' : 'bg-white border-amber-200 hover:border-amber-300'}`}
    >
      {/* Background decoration */}
      <div className={`absolute top-0 right-0 w-20 h-20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform duration-500 ${isDark ? 'bg-gray-800' : 'bg-amber-50'}`}></div>
      
      <div className="relative z-10 h-full flex flex-col">
        {/* Project Image */}
        <div className={`h-48 flex items-center justify-center p-6 relative overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gradient-to-br from-amber-100 to-orange-100'}`}>
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover absolute inset-0"
            />
          ) : (
            <div className="text-center">
              <div className="text-5xl mb-3">
                {getProjectIcon(title)}
              </div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-amber-400' : 'text-amber-800'}`}>{title}</h3>
            </div>
          )}
          {/* Overlay for better text readability */}
          <div className={`absolute inset-0 ${isDark ? 'bg-black/40' : 'bg-black/20'}`}></div>
          
          {/* Project Title Overlay */}
          <div className={`absolute bottom-0 left-0 right-0 p-4 ${isDark ? 'bg-gradient-to-t from-black/80 to-transparent' : 'bg-gradient-to-t from-black/70 to-transparent'}`}>
            <h3 className="text-xl font-bold text-white text-center">
              {title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Description */}
          <p className={`mb-4 flex-1 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {description}
          </p>

          {/* Technology Stack */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {tech.map((technology, i) => (
                <motion.span
                  key={i}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 ${isDark ? 'bg-gray-800 text-gray-300 border-gray-700 hover:border-amber-400' : 'bg-gradient-to-r from-amber-50 to-amber-100 text-amber-800 border-amber-200'}`}
                  whileHover={{ scale: 1.05 }}
                >
                  {technology}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Role and Grade */}
          <div className={`flex items-center justify-between pt-4 border-t transition-colors duration-300 ${isDark ? 'border-gray-700' : 'border-amber-200'}`}>
            <span className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-amber-700'}`}>
              {role}
            </span>
            {grade && (
              <span className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-300 ${isDark ? 'bg-gray-800 text-amber-400' : 'bg-green-100 text-green-800'}`}>
                {grade}
              </span>
            )}
          </div>

          {/* Action Button with GitHub Icon */}
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full mt-4 px-4 py-2 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-center ${isDark ? 'bg-amber-500 hover:bg-amber-600' : 'bg-amber-500 hover:bg-amber-600'}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
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

  const projects = [
   
    {
      title: "Job-Board Application",
      description: "Comprehensive job portal where employers can post jobs and candidates can search and apply. Features resume upload, application tracking, and advanced filtering.",
      tech: ['Laravel', 'Vue.js', 'MySQL', 'REST API'],
      role: "Full Stack Developer",
      image: "/images/Screenshot from 2025-11-12 21-15-19.png",
      githubLink: "https://github.com/AhmedMohammedSalah/job-board"
    },
    {
      title: "Book Share",
      description: "Community-driven platform for book lovers to share and borrow books. Includes user ratings, messaging system, and location-based book discovery.",
      tech: ['React', 'Laravel', 'MySQL', 'WebSocket'],
      role: "Full Stack Developer",
      image: "/images/Screenshot from 2025-11-12 21-19-01.png",
      githubLink: " https://github.com/Abdelhameed97/bookshare"
    },
    {
      title: "Medical Portal",
      description: "Healthcare management system for patients and doctors with appointment scheduling, medical records, and telemedicine features.",
      tech: ['Django', 'React', 'PostgreSQL', 'REST API'],
      role: "Full Stack Developer",
      image: "/images/Screenshot from 2025-11-12 21-19-01.png",
      githubLink: "https://github.com/Abdelhameed97/medical-react"
    },
    {
      title: "Adventure Travel Platform",
      description: "Travel booking platform specializing in adventure tours with interactive maps, user reviews, and real-time booking system.",
      tech: ['Vue.js', 'JSON Server', 'JavaScript', 'CSS3'],
      role: "Frontend Developer",
      image: "/images/Screenshot from 2025-11-12 21-22-14.png",
      githubLink: "https://github.com/Salma457/Vue-Project"
    },
    {
      title: "Coffee Shop Management System",
      description: "Complete management solution for coffee shops including inventory, orders, employee management, and sales analytics dashboard.",
      tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      role: "Full Stack Developer",
      image: "/images/coffee-shop.jpg",
      githubLink: "https://github.com/yourusername/coffee-shop-system"
    }, {
      title: "Ecommerce Platform",
      description: "Full-featured online shopping platform with product catalog, shopping cart, user authentication, and secure payment integration. Includes admin dashboard for inventory management.",
      tech: ['Angular', 'Node.js', 'MongoDB', 'Express'],
      role: "Full Stack Developer",
      image: "/images/ecommerce-platform.jpg",
      githubLink: "https://github.com/AhmedMohammedSalah/Ecommerce-mongo-node-angular"
    }
  ];

  return (
    <section id="projects" className={`py-24 transition-colors duration-300 relative overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/30'}`}>
      {/* Background decorations */}
      <div className={`absolute top-10 left-10 w-32 h-32 rounded-full blur-2xl ${isDark ? 'bg-amber-400/10' : 'bg-amber-200/20'}`}></div>
      <div className={`absolute bottom-10 right-10 w-28 h-28 rounded-full blur-xl ${isDark ? 'bg-amber-400/10' : 'bg-orange-200/30'}`}></div>
      
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
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={containerVariants}
              className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-amber-300' : 'bg-gradient-to-r from-amber-700 via-amber-600 to-orange-600 bg-clip-text text-transparent'}`}
            >
              My Projects
            </motion.h2>
            <motion.div
              variants={containerVariants}
              className={`w-24 h-1.5 mx-auto rounded-full mb-6 ${isDark ? 'bg-amber-400' : 'bg-gradient-to-r from-amber-500 to-orange-500'}`}
            ></motion.div>
            <motion.p
              variants={containerVariants}
              className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-amber-700/80'}`}
            >
              A diverse portfolio of full-stack applications showcasing expertise in modern web technologies
            </motion.p>
          </motion.div>

          {/* Projects Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} isDark={isDark} />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.a
              href="#contact"
              className={`inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${isDark ? 'bg-amber-500 hover:bg-amber-600' : 'bg-gradient-to-r from-amber-500 to-orange-500'}`}
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

export default Projects;