import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      year: '2023',
      title: 'Frontend Developer',
      company: 'Tech Company',
      description: 'Led frontend development for various web applications using React and Next.js.',
      skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS']
    },
    {
      year: '2022',
      title: 'Web Developer Intern',
      company: 'StartUp Inc.',
      description: 'Developed responsive websites and implemented new features.',
      skills: ['JavaScript', 'React', 'CSS', 'HTML']
    }
  ];

  return (
    <section id="experience" className="py-20 px-5 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
    className="text-3xl lg:text-5xl font-bold mb-10 font-serif"
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-light dark:bg-dark rounded-xl shadow-lg"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <span className="text-accent dark:text-accentDark font-bold text-lg">{exp.year}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-gray dark:text-gray-400">{exp.company}</p>
                  <p className="mt-2">{exp.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-dark/5 dark:bg-light/5 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;