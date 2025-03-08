// components/About.tsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-white mb-8">About Me</h2>
        <div className="text-lg text-gray-400">
        <p className="mb-4">
          Hi, I&apos;m a student from Wakayama City with a passion for web development and data science. 
          I&apos;m currently working on a point-based app with Hachiban Co., Ltd. and am also interested 
          in sports data analysis. I&apos;m learning how to leverage data to solve real-world problems, and 
          I&apos;m always excited to learn new technologies using my background in computer science.
        </p>
        <p>
          When I&apos;m not coding, you can find me exploring new technologies, running marathons, or 
          diving into the world of music and data analysis.
        </p>

        </div>
      </div>
    </section>
  );
};

export default About;
