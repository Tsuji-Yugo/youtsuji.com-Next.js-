// components/About.tsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-white mb-8">About Me</h2>
        <div className="text-lg text-gray-400">
          <p className="mb-4">
            Hi, I&apos;m a passionate Web Developer and Data Scientist based in Kanazawa, Japan. I specialize in building
            user-centric web applications and leveraging data to solve real-world problems. I have a strong background
            in computer science, and I&apos;m always excited to learn new technologies.
          </p>
          <p>
            When I&apos;m not coding, you can find me exploring new technologies, running marathons, or diving into the
            world of music and data analysis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
