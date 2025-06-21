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
        "A personal website where I showcase my work, skills, and background. It reflects my design taste, built with React and Vite, and styled for both light and dark themes.",
      techstack: ["React", "Vite", "Tailwind CSS", "TypeScript"],
      image: "public/porto.png",
      live: "https://your-portfolio.netlify.app",
      github: "https://github.com/yourusername/portfolio-web",
    },
    {
      title: "Fundlytics - Expense Tracker",
      description:
        "A full-stack app I built to track my personal spending habits. It helps visualize expenses with charts, supports login, and runs inside Docker with a PostgreSQL backend.",
      techstack: [
        "React",
        "Vite",
        "Express.js",
        "PostgreSQL",
        "Docker",
        "Tailwind CSS",
        "TypeScript",
      ],
      image: "public/fundlytics.png",
      live: "https://fundlytics.tail740950.ts.net/",
    },
    {
      title: "IntraDIKTI",
      description:
        "An internal HR system developed for Sekjen DIKTI to manage employee records, leave approvals, and organizational structure — all wrapped in a simple, clean, and mobile-friendly interface.",
      techstack: ["Next.js", "Tailwind CSS", "TypeScript"],
      image: "public/intraDikti.png",
      live: "https://intradikti.app",
    },
    {
      title: "Himakom Web",
      description:
        "Landing page for HIMAKOM UGM — designed to introduce the organization, showcase its programs, and connect with students through a fast, responsive, and visually engaging web presence.",
      techstack: ["Next.js", "Tailwind CSS", "TypeScript"],
      image: "public/himakom.png",
      live: "https://himakom.ugm.ac.id/main/",
    },
    {
      title: "Pemira Himasta Web",
      description:
        "A simple but impactful website built for Pemira Himasta 2023 to share event info, candidate bios, and voting guides — encouraging active participation in student democracy.",
      techstack: ["Next.js", "Tailwind CSS", "TypeScript", "Firebase"],
      image: "public/pemira.png",
      github: "https://github.com/AhmadSPriaji/pemira-himasta-23",
    },
    {
      title: "Tanahku App",
      description:
        "A mobile app that helps users identify and classify soil types — useful for farming, research, or education. It combines geolocation with local inputs for relevant info.",
      techstack: ["React Native", "Tailwind CSS", "TypeScript"],
      image: "public/tanahku.png",
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
