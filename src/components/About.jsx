import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-600">
              <p>
                Hi there! I'm a passionate software developer with a keen interest
                in creating beautiful, functional, and user-friendly applications.
              </p>
              <p>
                With experience in both frontend and backend development, I enjoy
                turning complex problems into simple, elegant solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge with
                the developer community.
              </p>
            </div>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-square rounded-lg overflow-hidden bg-wheat-100">
                <img
                  src="/path-to-about-image.jpg"
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 border-2 border-wheat-200 rounded-lg -m-2"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;