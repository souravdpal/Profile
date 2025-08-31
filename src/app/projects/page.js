"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  // Sample project data (replace with your GitHub repos or sites; use external image URLs)
  const projects = [
    {
      title: "Aiova Platform",
      description: "A community platform with navigation, chat, and post creation for seamless user interaction.",
      technologies: ["Sql", "Tailwind CSS", "Firebase", "Mongo DB"],
      github: "https://github.com/souravdpal/space_verse",
      demo: null,
      image: "https://ik.imagekit.io/bflz8wivc/20250819_1714_Aiova%20Cosmic%20Logo_simple_compose_01k3126awwefmagzjdct6fnyhf.png?updatedAt=1756559251879", // Corrected Google Drive URL
    },
    {
      title: "Hina Ai",
      description: "Hina is a modifed and peronally for our service ai hina has many verison from agentic version to being a moderator and even being perosnal assistant to controling devices.",
      technologies: ["Ejs", "Tailwind + css", "JavaScript" , "Node js " , "Socket js " , "tss and stt" ,"bycrpt" ],
      github: "https://github.com/souravdpal/chat",
      demo: "https://hina-ai.onrender.com/",
      image: "https://ik.imagekit.io/bflz8wivc/hina.ico", // Example external URL
    },
    {
      title: "Self hello",
      description: "SelfHelo is built for people who feel lonely, overwhelmed, or trapped in addiction but genuinely want to improve their lives. It’s not just an app; it’s a safe space. With the help of an emotionally intelligent AI therapist named Hina, users can express their feelings, track their moods, reflect through journaling, and receive supportive responses Topics",
      technologies: ["python", "Tailwind + CSS", "AI","sql","mongo db","eJs"],
      github: "https://github.com/souravdpal/improve",
      demo: null,
      image: "https://ik.imagekit.io/bflz8wivc/Screenshot%20From%202025-08-30%2019-03-35.png?updatedAt=1756560862368", // Example external URL
    },
  ];

  // Tech icons (placeholder SVGs)
  const techIcons = {
    "Next.js": (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
    "Tailwind CSS": (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.01 4.99C17.34 3.32 14.67 2 12 2S6.66 3.32 4.99 4.99 2 8.67 2 12s1.32 5.34 2.99 7.01S8.67 22 12 22s5.34-1.32 7.01-2.99S22 15.33 22 12s-1.32-5.34-2.99-7.01zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12h-2v8h2v-8z" />
      </svg>
    ),
    Firebase: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L3 8v8l9 6 9-6V8l-9-6zm0 2.24L19.76 8v8L12 20.76 4.24 16V8L12 4.24z" />
      </svg>
    ),
    Netlify: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-6h4v4h-4z" />
      </svg>
    ),
    HTML: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.03 2h15.94c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4.03c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm1 2v16h14V4h-14z" />
      </svg>
    ),
    CSS: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.03 2h15.94c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4.03c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm1 2v16h14V4h-14z" />
      </svg>
    ),
    JavaScript: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 3h18v18H3V3zm2 2v14h14V5H5z" />
      </svg>
    ),
    "Framer Motion": (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l-8 8 8 8 8-8-8-8zm0 2.83l5.17 5.17-5.17 5.17-5.17-5.17L12 4.83z" />
      </svg>
    ),
  };

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
            My Projects
          </motion.h1>
         <Link
  href="/skills"
  className="px-4 py-2 rounded-xl text-white bg-blue-600 hover:bg-blue-700 hover:text-white 
             transition-all duration-300 ease-in-out shadow-md text-lg font-medium"
>
  Skills
</Link>

          <Link href="/" className="text-white hover:text-blue-200 transition-colors text-lg font-medium">
            ← Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-700 ease-in-out overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Project Image */}
              <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden border border-white/20">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <h2 className="text-3xl font-semibold text-white mb-3 tracking-tight">{project.title}</h2>
              <p className="text-base text-white/80 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center space-x-1 px-3 py-1 bg-purple-500/20 text-white/90 rounded-full text-sm font-medium"
                  >
                    {techIcons[tech]}
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-700/40 text-blue-300 hover:bg-gray-600/50 hover:text-blue-200 rounded-lg font-medium transition-all duration-700 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.49v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.564 9.564 0 0112 6.8c.85.004 1.71.11 2.52.33 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.94.68 1.9v2.81c0 .27.16.58.67.49A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
                  </svg>
                  <span>Source Code</span>
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-blue-600/70 to-purple-500/70 text-white rounded-lg font-medium hover:from-blue-700/70 hover:to-purple-600/70 transition-all duration-700 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    View Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}