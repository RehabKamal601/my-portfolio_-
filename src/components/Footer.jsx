import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg py-8 px-5 lg:px-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <span className="text-center">{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent dark:hover:text-accentDark"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent dark:hover:text-accentDark"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="mailto:your.email@example.com"
            className="hover:text-accent dark:hover:text-accentDark"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        <span className="text-center">Built with React & Tailwind CSS</span>
      </div>
    </footer>
  )
}

export default Footer