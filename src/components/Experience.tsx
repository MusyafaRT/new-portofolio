import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      title: "Web Developer Intern",
      company: "PT Enseval Putera Megatrading Tbk",
      location: "Jakarta Timur, DKI Jakarta",
      duration: "2024 - Present",
      description:
        "Developed and maintained EPR HRIS for Enseval using Flutter and GetX",
      achievements: [
        "Developed employee performance appraisal and its admin",
        "Minimized bug reports by implementing structured and comprehensive testing",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "KEMENDIKTI",
      location: "Jakarta Pusat, DKI Jakarta",
      duration: "2024 - 2024",
      description:
        "Developed and maintained IntraDIKTI HRIS for Sekjen Dikti using Next.js and Tailwindcss",
      achievements: [
        "Developed leave approval document",
        "Enhanced system stability by reducing bugs through tight testing",
      ],
    },
    {
      title: "Mobile Development Cohort",
      company: "Bangkit Academy",
      location: "Remote",
      duration: "2023 - 2023",
      description:
        "Completed mobile development training using Kotlin and Jetpack Compose; strengthened problem-solving, collaboration, time management, and communication in cross-functional teams.",
      achievements: [
        "Developed TanahKu, an Android app for soil classification",
        "Collaborated in a cross-functional capstone team with backend and ML students",
        "Led the team in project planning, execution, and final presentation to mentors",
      ],
    },
    {
      title: "Computer Science",
      company: "Universitas Gadjah Mada",
      location: "Sleman, DI Yogyakarta",
      duration: "2021 - 2025",
      description:
        "Studying Computer Science with focus on systems, teamwork, and applied software development projects.",
      achievements: [
        "GPA 3.89/4.00",
        "Developed election system website using Next.js & Firebase",
        "Built Festival Gadjah Mada website using Next.js",
      ],
    },
    {
      title: "SMA Taruna Nusantara",
      company: "",
      location: "Magelang, Jawa Tengah",
      duration: "2018 - 2021",
      description:
        "Developed leadership and teamwork at SMA Taruna Nusantara through disciplined dorm life, group projects, and structured leadership training programs.",
      achievements: [
        "Selected for School Security Patrol; enforced discipline and event order.",
        "Achieved 91.5 average grade over three years of study.",
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my
            career as a developer.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-200 dark:bg-blue-800"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-semibold mt-2 md:mt-0">
                        <Calendar size={16} className="mr-1" />
                        {exp.duration}
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                      <span className="font-semibold">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-gray-600 dark:text-gray-300 text-sm flex items-start"
                          >
                            <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">
                              •
                            </span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
