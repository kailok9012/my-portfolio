"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [selected, setSelected] = useState<"skills" | "projects">("skills");

  const fadeVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const skills = [
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Node.js",
    "Express",
    "Prisma",
    "MongoDB",
    "Firebase",
    "REST API",
    "Git & GitHub",
    "Tailwind CSS",
  ];

  const projects = [
    {
      title: "Restaurant Ordering App",
      desc: "Cross-platform React Native app allowing users to order meals, apply modifiers, and track orders in real time.",
      tech: ["React Native", "Firebase", "TypeScript"],
    },
    {
      title: "Inventory & Order API",
      desc: "Express + Prisma backend to manage product stock, sales, and order tracking with secure JWT authentication.",
      tech: ["Node.js", "Express", "Prisma", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with Next.js and Framer Motion showcasing skills, projects, and animations.",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    },
    {
      title: "Delivery Dashboard",
      desc: "Admin dashboard for monitoring delivery status, branches, and performance metrics in real time.",
      tech: ["React", "Firebase", "Recharts"],
    },
    {
      title: "Crashlytics & Analytics Setup",
      desc: "Integrated Firebase Crashlytics and Google Analytics for performance monitoring in production apps.",
      tech: ["Firebase", "React Native"],
    },
    {
      title: "E-Commerce Backend",
      desc: "Scalable Node.js service supporting products, users, and orders with payment gateway integration.",
      tech: ["Express", "Prisma", "Stripe API"],
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-stone-50 to-rose-50 text-center px-4 overflow-hidden ">
      {/* Header */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 ">
        👋 Hi, I’m{" "}
        <span className="text-gray-600 font-extrabold">Chang Kai Lok</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10">
        A software engineer passionate about crafting reliable, elegant, and
        modern web & mobile applications.
      </p>

      {/* Selector */}
      <div className="flex space-x-4 mb-10">
        <button
          onClick={() => setSelected("skills")}
          className={`px-6 py-2 rounded-full cursor-pointer text-lg font-medium transition-all ${
            selected === "skills"
              ? "bg-gray-600 text-white shadow-md"
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          Skills
        </button>
        <button
          onClick={() => setSelected("projects")}
          className={`px-6 py-2 rounded-full text-lg cursor-pointer font-medium transition-all ${
            selected === "projects"
              ? "bg-gray-600 text-white shadow-md"
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          Projects
        </button>
      </div>

      {/* Animated Content */}
      <div className="relative w-full flex justify-center">
        <AnimatePresence mode="wait">
          {selected === "skills" ? (
            <motion.div
              key="skills"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-3 gap-6 max-w-3xl"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm text-center text-lg font-medium text-gray-800 hover:shadow-md transition-all"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="projects"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-3 gap-8 max-w-6xl"
            >
              {projects.map((p) => (
                <motion.div
                  key={p.title}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 text-left transition-all"
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Chang Kai Lok. All rights reserved.
      </footer>
    </main>
  );
}
