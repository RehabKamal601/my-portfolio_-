import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-wheat-600">Your Name</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-wheat-700 mb-6">
              Software Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              I craft elegant solutions through code, specializing in modern web development
              and creating seamless user experiences.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-wheat-600 text-white rounded-lg hover:bg-wheat-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 py-3 border-2 border-wheat-600 text-wheat-600 rounded-lg hover:bg-wheat-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md mx-auto lg:ml-auto">
              <div className="aspect-square rounded-full overflow-hidden bg-wheat-100">
                <img
                  src="/path-to-your-image.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-wheat-200 animate-pulse"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Arrow */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <a href="#about" className="text-wheat-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;