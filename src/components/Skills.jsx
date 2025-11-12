import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold mb-4 text-wheat-700">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="px-3 py-1 bg-wheat-50 text-wheat-800 rounded-full text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "CI/CD", "REST APIs"]
    },
    {
      title: "Other Skills",
      skills: ["UI/UX Design", "Agile", "Testing", "Performance Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-wheat-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5
                    }
                  }
                }}
              >
                <SkillCategory
                  title={category.title}
                  skills={category.skills}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;