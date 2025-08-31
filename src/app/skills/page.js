"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faShieldAlt,
  faNetworkWired,
  faBrain,
  faCalculator,
  faRobot,
  faStream,
  faTable,
  faFireAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinux, faJava, faJs, faPython, faGit, faGitAlt, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  // Skills data with correct FA icons
  const skills = [
    { name: "MERN Stack", icon: faCode },
    { name: "SQL", icon: faTable },
    { name: "Cybersecurity", icon: faShieldAlt },
    { name: "Linux", icon: faLinux },
    { name: "Python", icon: faPython }, // no free FA icon for Python
    { name: "Java", icon: faJava },
    { name: "JavaScript", icon: faJs },
    { name: "Networking", icon: faNetworkWired },
    { name: "Ollama / Hugging Face", icon: faBrain },
    { name: "NumPy", icon: faCalculator },
    { name: "Agentic AI", icon: faRobot },
    { name: "Pipelines", icon: faStream },
    { name: "Git/github", icon: faGithub},
    { name: "Firebase", icon: faFireAlt}
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-400 dark:from-gray-800 dark:to-indigo-900 p-6 sm:p-8 relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/10 dark:bg-black/20 pointer-events-none" />

      <main className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <motion.h1
            className="text-5xl sm:text-6xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            My Skills
          </motion.h1>
          <Link
  href="/contact"
  className="px-4 py-2 rounded-xl text-white bg-blue-600 hover:bg-blue-700 hover:text-white 
             transition-all duration-300 ease-in-out shadow-md text-lg font-medium"
>
  contact ME
</Link>
          <Link
            href="/"
            className="text-white hover:text-blue-200 transition-colors text-lg font-medium"
          >
            ← Back to Home
          </Link>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-700 ease-in-out text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <FontAwesomeIcon
                icon={skill.icon}
                className="text-5xl mb-4 text-purple-300"
              />
              <h3 className="text-xl font-semibold text-white tracking-tight">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
