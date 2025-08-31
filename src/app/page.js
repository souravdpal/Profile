"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 dark:from-gray-800 dark:to-gray-900 p-6 sm:p-10 relative overflow-hidden">
      {/* Subtle Background Overlay */}
      <div className="absolute inset-0 bg-white/5 dark:bg-black/10 pointer-events-none" />

      {/* Main Hero Section */}
      <main className="text-center bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-2xl p-8 sm:p-12 max-w-3xl w-full shadow-xl space-y-8">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold text-white tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Welcome, I’m Sourav
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-white/90 max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Passionate about building impactful digital experiences.
        </motion.p>

        {/* Gradient CTA Button */}
        <motion.a
          href="/projects"
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold shadow-lg hover:shadow-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.a>
      </main>

      {/* Scroll-Down Indicator */}
      <motion.div
        className="absolute bottom-6 text-white animate-bounce"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
}