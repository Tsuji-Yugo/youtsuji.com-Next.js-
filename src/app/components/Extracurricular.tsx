import React from "react";

const Extracurricular = () => {
  const activities = [
    {
      title: "Data Dreamers",
      link: "https://data-dreamers.vercel.app/",
      description: "An extracurricular activity where I learn data analysis and participate in practical projects.",
    },
    {
      title: "Food Creation",
      link: "https://foodcreation.github.io/",
      description: "An extracurricular activity where I collaborate with companies to develop applications.",
    },
  ];

  return (
    <section id="extracurricular" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-white mb-12">Extracurricular Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">{activity.title}</h3>
              <p className="text-gray-300 mb-4">{activity.description}</p>
              <a
                href={activity.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-300"
              >
                Visit Activity
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
