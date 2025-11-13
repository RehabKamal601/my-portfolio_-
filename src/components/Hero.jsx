import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();
  const phoneNumber = "01060530117";
  const whatsappLink = `https://wa.me/201060530117`;

  return (
    <section id="hero" className={`min-h-screen flex items-center transition-colors duration-300 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-dark'}`}>
              Hi, I'm <span className={isDark ? 'text-amber-400' : 'text-wheat-600'}>Rehab kamal</span>
            </h1>
            <h2 className={`text-2xl md:text-3xl mb-6 ${isDark ? 'text-amber-300' : 'text-wheat-700'}`}>
              Software Developer
            </h2>
            <p className={`text-lg mb-8 max-w-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Junior Full Stack Web Developer with a solid background in open-source technologies
              and proven experience in developing dynamic, scalable, and user-friendly web applications.
            </p>
            
            {/* Contact Info */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex flex-wrap gap-4">
                {/* Phone Number */}
                <motion.a
                  href={`tel:${phoneNumber}`}
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl shadow-md hover:shadow-lg border transition-all duration-300 group ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700'
                      : 'bg-white border-wheat-200 text-gray-700 hover:bg-wheat-50'
                  }`}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`p-2 rounded-lg transition-colors ${
                    isDark
                      ? 'bg-gray-700 group-hover:bg-gray-600'
                      : 'bg-wheat-100 group-hover:bg-wheat-200'
                  }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isDark ? 'text-amber-400' : 'text-wheat-600'}`} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-500">Phone</div>
                    <div className="font-semibold text-wheat-700">{phoneNumber}</div>
                  </div>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl shadow-md hover:shadow-lg border border-green-200 text-gray-700 transition-all duration-300 group"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    backgroundColor: "#f0fdf4"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-500">WhatsApp</div>
                    <div className="font-semibold text-green-700">Message me</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>

           
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
                  src="images/Pasted image.png"
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