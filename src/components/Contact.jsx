import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/yourusername',
      link: 'https://linkedin.com/in/yourusername'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/yourusername',
      link: 'https://github.com/yourusername'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-lg">
              I'm currently open to new opportunities and collaborations. Whether you have a question
              or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-wheat-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{method.icon}</div>
                <h3 className="font-bold text-wheat-800 mb-2">{method.title}</h3>
                <p className="text-sm text-gray-600 hover:text-wheat-700">
                  {method.value}
                </p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-wheat-100 rounded-lg p-8 text-center"
          >
            <h3 className="text-xl font-bold text-wheat-800 mb-4">Send me a Message</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-2 rounded-lg border border-wheat-200 focus:outline-none focus:border-wheat-600"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 rounded-lg border border-wheat-200 focus:outline-none focus:border-wheat-600"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-2 rounded-lg border border-wheat-200 focus:outline-none focus:border-wheat-600"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-wheat-600 text-white rounded-lg hover:bg-wheat-700 transition-colors font-medium"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;