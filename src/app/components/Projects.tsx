// components/Projects.tsx
import React from "react";

const Projects = () => {
  const works = [
    {
      title: "Full Marathon Time Prediction Tool",
      link: "https://www.youtsuji.com/html/time.html",
      description: "A tool to predict full marathon finishing times from 10K times.",
    },
    {
      title: "[Paper] Differences in Defensive Pressure Experienced During Attacks in Soccer",
      link: "https://www.youtsuji.com/assets/%E5%A0%B1%E5%91%8A%E6%9B%B8.pdf",
      description: "A research paper analyzing the impact of defensive pressure experienced during attacks in soccer.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-white mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">{work.title}</h3>
              <p className="text-gray-300 mb-4">{work.description}</p>
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-300"
              >
                Visit Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
