import { easeInOut, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Download, Mail, ArrowRight } from "lucide-react";
import { socialLinks } from "../layout/Footer";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Floating elements animation variants
  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: easeInOut,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-100 via-lightGray-100 to-cyan-200 dark:from-darkBlue-900 dark:via-darkBlue-800 dark:to-grey-900 px-6 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-200 dark:bg-cyan-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-40"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute top-40 right-10 w-72 h-72 bg-orange-200 dark:bg-orange-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-40"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
          className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-grey-200 dark:bg-grey-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-40"
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Social Links - Top */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="p-3 bg-white/80 dark:bg-darkBlue-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-grey-600 dark:text-lightGray-300 hover:text-orange-600 dark:hover:text-cyan-400"
                  aria-label={social.name}
                >
                  <IconComponent size={20} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Main heading with typewriter effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-grey-600 dark:text-lightGray-300 font-medium block mb-4"
            >
              👋 Hello, I'm
            </motion.span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-darkBlue-800 dark:text-white mb-4">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ delay: 0.6, duration: 0.8 }}
                className="inline-block"
              >
                Ronggo
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ delay: 0.8, duration: 0.8 }}
                className="inline-block bg-gradient-to-r from-orange-600 to-cyan-600 bg-clip-text text-transparent"
              >
                Tsani Musyafa
              </motion.span>
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="text-2xl md:text-4xl text-orange-700 dark:text-cyan-400 mb-8 font-semibold"
          >
            Fullstack Developer & Software Enthusiast
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-lg md:text-xl text-grey-600 dark:text-lightGray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Full-stack developer and software enthusiast with a strong front-end
            foundation, dedicated to building intuitive, high-performance web
            applications. Passionate about clean code, modern UI/UX, and always
            exploring software development technologies.
          </motion.p>

          {/* Stats */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-12"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-cyan-400">
                2+
              </div>
              <div className="text-sm text-grey-600 dark:text-lightGray-300">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-cyan-600 dark:text-orange-400">
                50+
              </div>
              <div className="text-sm text-grey-600 dark:text-lightGray-300">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-grey-600 dark:text-cyan-300">
                100%
              </div>
              <div className="text-sm text-grey-600 dark:text-lightGray-300">
                Client Satisfaction
              </div>
            </div>
          </motion.div> */}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="group bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>View My Projects</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="group bg-white dark:bg-darkBlue-800 text-darkBlue-800 dark:text-white border-2 border-lightGray-300 dark:border-grey-600 hover:border-orange-500 dark:hover:border-cyan-400 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </motion.button>

            <motion.a
              href="/CV_RonggoTM_Updated.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-cyan-600 to-orange-600 hover:from-cyan-700 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 2.0, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-grey-500 dark:text-lightGray-400 mb-2">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="text-grey-400 dark:text-lightGray-500 cursor-pointer hover:text-orange-500 dark:hover:text-cyan-400 transition-colors duration-200"
              onClick={scrollToProjects}
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating code snippets */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden lg:block"
      >
        <div className="bg-white/10 dark:bg-darkBlue-800/20 backdrop-blur-sm rounded-lg p-4 text-sm font-mono text-grey-600 dark:text-lightGray-300 shadow-lg">
          <div className="text-orange-500 dark:text-cyan-400">const</div>
          <div className="text-cyan-500 dark:text-orange-400">developer</div>
          <div className="text-grey-500 dark:text-lightGray-400">
            = {"passionate"}
          </div>
          <div className="text-grey-500 dark:text-lightGray-400">{"}"}</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ delay: 2.0, duration: 1 }}
        className="absolute right-4 top-1/3 transform -translate-y-1/2 hidden lg:block"
      >
        <div className="bg-white/10 dark:bg-darkBlue-800/20 backdrop-blur-sm rounded-lg p-4 text-sm font-mono text-grey-600 dark:text-lightGray-300 shadow-lg">
          <div className="text-orange-500 dark:text-cyan-400">function</div>
          <div className="text-cyan-500 dark:text-orange-400">
            buildAmazing()
          </div>
          <div className="text-grey-500 dark:text-lightGray-400">{"{"}</div>
          <div className="ml-2 text-grey-600 dark:text-lightGray-300">
            return "success"
          </div>
          <div className="text-grey-500 dark:text-lightGray-400">{"}"}</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
