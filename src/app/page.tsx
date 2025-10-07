"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Home() {
  const [selected, setSelected] = useState<"skills" | "projects">("skills");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fadeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const gradients = [
    "from-sky-400 to-blue-600",
    "from-rose-400 to-pink-600",
    "from-emerald-400 to-teal-600",
    "from-amber-400 to-orange-600",
  ];

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
      title: "Marrybrown Ordering App",
      desc: "Cross-platform restaurant ordering system built with React Native and TypeScript. Supports dynamic menu modifiers, order tracking.",
      tech: ["React Native", "TypeScript"],
      image: "/projects/marrybrown.png",
    },
    {
      title: "Starmigo Language Platform",
      desc: "A Duolingo-inspired ecosystem for language learning. Includes a mobile app built with React Native and an admin dashboard using Next.js, Tailwind CSS, and Prisma.",
      tech: ["Next.js", "React Native", "TypeScript", "Tailwind CSS", "Prisma"],
      image: "/projects/starmigo.png",
    },
    {
      title: "Property Auto-Uploader",
      desc: "Automation tool that uploads property listings to multiple platforms with one click using Playwright and Next.js. Focused on speed and reliability.",
      tech: ["Playwright", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Forecasting System Backend",
      desc: "Backend system for demand forecasting using Flask and Express.js APIs. Handles data ingestion, preprocessing, and model inference for predictive insights.",
      tech: ["Flask", "Express.js", "Python", "Node.js"],
    },
    {
      title: "Recruiting System (FYP)",
      desc: "AI-powered recruitment platform combining Flask, Next.js, and Express. Uses the Gemini API to perform resume screening and calculate match percentages between candidates and job requirements.",
      tech: [
        "Flask",
        "Next.js",
        "Express",
        "TypeScript",
        "Tailwind CSS",
        "Python",
        "Gemini API",
      ],
      image: "/projects/smarthire.png",
    },
    {
      title: "Fastworld Delivery (Supermarket Ordering App)",
      desc: "Mobile ordering platform built with Flutter and Dart, designed for supermarkets to manage orders, stock levels, and delivery scheduling.",
      tech: ["Flutter", "Dart", "Firebase"],
      image: "/projects/fastworld.jpeg",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-stone-50 to-rose-50 text-center px-4 py-10">
      {/* Header */}
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
          👋 Hi, I'm{" "}
          <span className="text-gray-600 font-extrabold">Chang Kai Lok</span>
        </h1>
        <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-10">
          I'm a Data Science undergraduate at Multimedia University (MMU) with
          hands-on experience through freelance projects involving both web and
          mobile applications. My work spans restaurant ordering systems, admin
          dashboards, automation tools, and AI-driven recruitment platforms
          using technologies such as React Native, Next.js, Express, Flask, and
          TypeScript.
        </p>

        {/* Selector */}
        <div className="flex justify-center space-x-4 mb-10">
          {["skills", "projects"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelected(tab as "skills" | "projects")}
              className={`px-6 py-2 rounded-full cursor-pointer text-sm md:text-lg font-medium transition-all ${
                selected === tab
                  ? "bg-gray-700 text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {tab === "skills" ? "Skills" : "Projects"}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative flex justify-center">
        <AnimatePresence mode="wait">
          {selected === "skills" ? (
            <motion.div
              key="skills"
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm text-center text-base font-medium text-gray-800 hover:shadow-md transition-all"
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl"
            >
              {projects.map((p, index) => (
                <div
                  key={p.title}
                  className="bg-white rounded-2xl p-6 shadow hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
                >
                  <div className="relative w-full h-[200px] mb-4 overflow-hidden rounded-2xl">
                    {p.image ? (
                      <>
                        <div
                          className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer group"
                          onClick={() => setSelectedImage(p.image!)}
                        >
                          <Image
                            src={p.image}
                            alt={p.title}
                            width={500}
                            height={300}
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                          />

                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                            <span className="text-white text-sm md:text-base font-medium">
                              Click to view full image
                            </span>
                          </div>
                        </div>

                        {selectedImage && (
                          <div
                            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                            onClick={() => setSelectedImage(null)}
                          >
                            <img
                              src={selectedImage}
                              alt="Preview"
                              className="max-w-[90%] max-h-[90%] rounded-2xl shadow-xl"
                            />
                          </div>
                        )}
                      </>
                    ) : (
                      <div
                        className={`w-full h-full flex items-center justify-center bg-gradient-to-r ${
                          gradients[index % gradients.length]
                        } text-white text-lg font-semibold`}
                      >
                        {p.title}
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{p.desc}</p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-gray-400 text-sm text-center">
        © {new Date().getFullYear()} Chang Kai Lok. All rights reserved.
      </footer>
    </main>
  );
}
