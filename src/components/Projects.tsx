import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "Portofolio Web",
      description:
        "A personal portfolio website showcasing projects and skills.",
      techstack: ["React", "Vite", "Tailwind CSS", "TypeScript"],
      image: "src/assets/porto.png",
      live: "https://your-portfolio.netlify.app",
      github: "https://github.com/yourusername/portfolio-web",
    },
    {
      title: "Fundlytics - Expense Tracker",
      description:
        "A full-stack expense tracker app to manage and visualize spending.",
      techstack: [
        "React",
        "Vite",
        "Express.js",
        "PostgreSQL",
        "Docker",
        "Tailwind CSS",
        "TypeScript",
      ],
      image: "src/assets/fundlytics.png",
      live: "https://fundlytics.tail740950.ts.net/",
    },
    {
      title: "IntraDIKTI",
      description:
        "HRIS platform for Sekjen DIKTI to manage employee data and leave approvals.",
      techstack: ["Next.js", "Tailwind CSS", "TypeScript"],
      image: "src/assets/intraDikti.png",
      live: "https://intradikti.app",
    },
    {
      title: "Himakom Web",
      description:
        "Landing page for HIMAKOM UGM, built to represent the organization's profile and activities.",
      techstack: ["Next.js", "Tailwind CSS", "TypeScript"],
      image: "src/assets/himakom.png",
      live: "https://himakom.ugm.ac.id/main/",
    },
    {
      title: "Pemira Himasta Web",
      description:
        "Official landing page for Festival Gadjah Mada, featuring event, guest star, and ticket information",
      techstack: ["Next.js", "Tailwind CSS", "TypeScript"],
      image: "src/assets/pemira.png",
      github: "https://github.com/AhmadSPriaji/pemira-himasta-23",
    },
    {
      title: "Tanahku App",
      description:
        "A mobile app that provides soil classification and information based on user location or input.",
      techstack: ["React Native", "Tailwind CSS", "TypeScript"],
      image: "src/assets/tanahku.png",
      github: "https://github.com/MusyafaRT/tanahku-app",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-lightGray-50 dark:bg-grey-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-darkBlue-800 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-grey-600 dark:text-lightGray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for creating innovative solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-darkBlue-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group border border-lightGray-200 dark:border-grey-700"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover group-hover:scale-110 transition-transform duration-300 h-full w-full"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-darkBlue-800 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-grey-600 dark:text-lightGray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techstack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-cyan-100 dark:bg-orange-900 text-cyan-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-grey-600 dark:text-lightGray-300 hover:text-orange-600 dark:hover:text-cyan-400 transition-colors duration-200"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  )}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-grey-600 dark:text-lightGray-300 hover:text-orange-600 dark:hover:text-cyan-400 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
