// components/Hero.tsx
import React from "react";

const Hero = () => {
  return (
    <section className="w-full relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl md:text-2xl mb-6">Web Developer | Data Scientist | Innovator</p>
        <a
          href="#about"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg text-lg transition duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
