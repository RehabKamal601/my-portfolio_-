import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EducationCard = ({ degree, institution, year, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-6 bg-white rounded-lg shadow-md border-l-4 border-wheat-600"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-wheat-800">{degree}</h3>
          <p className="text-wheat-600 font-medium">{institution}</p>
        </div>
        <p className="text-gray-500 text-sm md:text-right">{year}</p>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "University Name",
      year: "2018 - 2022",
      description: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems. GPA: 3.8"
    },
    {
      degree: "Full Stack Web Development",
      institution: "Coding Bootcamp",
      year: "2023",
      description: "Intensive 12-week program focused on modern web development with React, Node.js, and database design."
    }
  ];

  return (
    <section id="education" className="py-20 bg-wheat-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <EducationCard key={index} {...edu} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;