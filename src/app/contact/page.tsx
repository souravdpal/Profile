"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const socialLinks = [
    { name: "GitHub", icon: "fab fa-github", url: "https://github.com/souravdpal" },
    { name: "Instagram", icon: "fab fa-instagram", url: "https://instagram.com/hackingcosmos" },
    { name: "LinkedIn", icon: "fab fa-linkedin", url: "https://linkedin.com/in/souravdp" },
    { name: "Twitter", icon: "fab fa-twitter", url: "https://twitter.com/notsrvsourav" },
    { name: "Discord", icon: "fab fa-discord", url: "https://discord.com/users/itz_srv_sourav" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    emailjs
      .sendForm(
        "service_io63ive", // ✅ your Service ID
        "template_ohpqeh9", // ✅ your Template ID
        form,
        "agTVnwhfS-G1wIpIm" // ✅ your Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Failed to send message. Try again!");
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-400 dark:from-gray-800 dark:to-indigo-900 p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10 dark:bg-black/20 pointer-events-none" />
      <main className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Contact Me
          </motion.h1>
          <Link
            href="/"
            className="text-white hover:text-blue-200 transition-colors text-lg font-medium"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Social Links */}
          <motion.div
            className="bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl p-6 shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Social Links</h2>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-white hover:text-purple-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <i className={`${link.icon} text-2xl`} />
                  <span className="text-lg font-medium">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Email Form */}
          <motion.div
            className="bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl p-6 shadow-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Email Me</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-white text-sm mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white text-sm mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white text-sm mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-gradient-to-r from-blue-600/70 to-purple-500/70 text-white rounded-lg font-medium hover:from-blue-700/70 hover:to-purple-600/70 transition-all focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
