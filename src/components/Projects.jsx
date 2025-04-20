import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "PS1 Online Emulator",
    description:
      "A modern web-based frontend application for an online PS1 emulator. Play retro games right in your browser!",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://5716.github.io/9bitgame/",
    code: "https://github.com/5716/9bitgame",
  },
  {
    title: "Music Visualizer",
    description:
      "Upload your favorite tracks and watch stunning real-time music visualizations.",
    tech: ["React", "Canvas", "Audio API"],
    live: "https://5716.github.io/resonix/",
    code: "https://github.com/5716/resonix",
  },
  {
    title: "Calorie & Weight Tracker",
    description:
      "Track your food calories, see fun activities to burn them, and calculate your perfect weight.",
    tech: ["React", "CSS", "JavaScript"],
    live: "https://5716.github.io/fitapp/",
    code: "https://github.com/5716/fitapp",
  },
  {
    title: "Emoji Guessing Game",
    description:
      "A fun emoji guessing game with Easy, Normal, and Hard modes. Can you guess the right piles?",
    tech: ["React", "Game Logic", "CSS"],
    live: "https://5716.github.io/emoji-guesser/",
    code: "https://github.com/5716/emoji-guesser",
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">🚀 Projects</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-cyan-600 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 justify-center">
                <a
                  href={project.live}
                  target="_blank"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg transition"
                >
                  🔗 Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  className="border border-cyan-500 hover:bg-cyan-500 text-white py-2 px-4 rounded-lg transition"
                >
                  💻 Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
