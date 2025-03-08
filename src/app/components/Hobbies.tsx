import React from "react";

const Hobbies = () => {
  const hobbies = [
    {
      title: "Music Appreciation",
      link: "https://www.spotify.com",
      description: "Listening to various genres of music is one of my hobbies.",
    },
    {
      title: "Running",
      link: "https://www.strava.com",
      description: "I run several times a week for health and refreshment.",
    },
  ];

  return (
    <section id="hobbies" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-white mb-12">Hobbies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">{hobby.title}</h3>
              <p className="text-gray-300 mb-4">{hobby.description}</p>
              <a
                href={hobby.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-300"
              >
                Visit Hobby
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
