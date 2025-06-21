import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/MusyafaRT",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/ronggo-tsani-musyafa-419950217/",
    color: "hover:text-blue-600",
  },
];
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-0"
          >
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold hover:text-blue-400 transition-colors duration-200"
            >
              RonggoTM
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6 mb-6 md:mb-0"
          >
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${link.color} transition-colors duration-200 hover:scale-110 transform`}
                  aria-label={link.name}
                >
                  <IconComponent size={24} />
                </a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end">
              Made by RonggoTM
            </p>
            <p className="text-gray-500 text-xs mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 mt-3 pt-4 text-center"
        >
          <p className="text-gray-400 text-sm">
            Built with Reactjs, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
