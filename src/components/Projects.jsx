import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectCard = ({ title, description, image, tech, liveLink, githubLink, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="grid md:grid-cols-2 gap-6 p-6 items-center">
        <div className="aspect-video rounded-lg overflow-hidden bg-wheat-100">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-wheat-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span key={i} className="px-3 py-1 bg-wheat-50 text-wheat-700 rounded-full text-sm">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-4 pt-2">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-wheat-700 hover:text-wheat-900 font-medium"
            >
              GitHub
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-wheat-700 hover:text-wheat-900 font-medium"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      title: "Project One",
      description: "A comprehensive project management tool built with React and Node.js, featuring real-time updates and team collaboration capabilities.",
      image: "/images/project1.jpg",
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      liveLink: "https://project1.com",
      githubLink: "https://github.com/username/project1"
    },
    {
      title: "Project Two",
      description: "An e-commerce platform with advanced filtering, search, and payment integration using Next.js and Stripe.",
      image: "/images/project2.jpg",
      tech: ['Next.js', 'Stripe', 'TailwindCSS', 'PostgreSQL'],
      liveLink: "https://project2.com",
      githubLink: "https://github.com/username/project2"
    },
    {
      title: "Project Three",
      description: "A real-time data visualization dashboard for monitoring system metrics and performance analytics.",
      image: "/images/project3.jpg",
      tech: ['React', 'D3.js', 'WebSocket', 'Express'],
      liveLink: "https://project3.com",
      githubLink: "https://github.com/username/project3"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Featured Projects
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;