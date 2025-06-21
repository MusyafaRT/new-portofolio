"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-white dark:bg-darkBlue-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-darkBlue-800 dark:text-white mb-16">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="relative w-90 h-90 mx-auto md:mx-0 rounded-full shadow-2xl border-5 border-cyan-300 dark:border-orange-400 overflow-hidden">
                <img
                  src="/photo.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-grey-600 dark:text-lightGray-300 leading-relaxed">
                Hello! I’m RonggoTM — a passionate front-end developer with a
                strong focus on creating modern, responsive, and user-friendly
                web applications. I specialize in technologies like{" "}
                <span className="text-cyan-950 dark:text-orange-300">
                  Next.js
                </span>{" "}
                and{" "}
                <span className="text-cyan-950 dark:text-orange-300">
                  Tailwind CSS
                </span>
                , and I love building sleek, high-performance interfaces that
                work seamlessly across all devices.
              </p>

              <p className="text-lg text-grey-600 dark:text-lightGray-300 leading-relaxed">
                With a solid foundation in{" "}
                <span className="text-cyan-950 dark:text-orange-300">
                  JavaScript
                </span>{" "}
                and{" "}
                <span className="text-cyan-950 dark:text-orange-300">
                  React
                </span>
                , I craft dynamic, interactive user experiences that blend
                design and functionality. I'm currently expanding my skill set
                by diving into mobile and backend development — learning{" "}
                <span className="text-cyan-950 dark:text-orange-300">
                  Kotlin
                </span>{" "}
                and{" "}
                <span className="text-cyan-950 dark:text-orange-300">
                  React Native
                </span>{" "}
                for mobile, and exploring{" "}
                <span className="text-cyan-950 dark:text-orange-300">
                  Node.js
                </span>
                ,{" "}
                <span className="text-cyan-950 dark:text-orange-300">
                  Express
                </span>
                , and{" "}
                <span className="text-cyan-950 dark:text-orange-300">
                  Prisma
                </span>{" "}
                for building robust backend services.
              </p>

              <p className="text-lg text-grey-600 dark:text-lightGray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community through blog posts and mentoring.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <span className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 px-4 py-2 rounded-full text-sm font-semibold">
                  Problem Solver
                </span>
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full text-sm font-semibold">
                  Team Player
                </span>
                <span className="bg-grey-100 dark:bg-grey-900 text-grey-800 dark:text-grey-200 px-4 py-2 rounded-full text-sm font-semibold">
                  Continuous Learner
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
