import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
        Hey, I'm <span className="text-cyan-400">Saba Purtseladze</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">
        Aspiring React Developer, passionate about crafting clean and
        user-friendly interfaces.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="#projects"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          View My Projects
        </a>
        <a
          href="https://github.com/5716"
          target="_blank"
          className="border border-cyan-500 hover:bg-cyan-500 text-white py-3 px-6 rounded-lg transition"
        >
          🌐 GitHub Profile
        </a>
      </div>
    </section>
  );
};

export default Hero;
