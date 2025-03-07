// components/Contact.tsx
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-white mb-12">Get In Touch</h2>
        <p className="text-lg text-gray-400 mb-6">
          I&apos;m always open to discussing new opportunities or collaborations. Feel free to reach out!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg text-lg transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
