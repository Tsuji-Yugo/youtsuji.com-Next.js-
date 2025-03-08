import React from "react";

const Certifications = () => {
  const certifications = [
    "Hazardous Materials Handler, Category Otsu (Class 1, 3, 4, 5, 6)",
    "Second-Class Electrician",
    "Small-Scale Boiler Operator",
    "Skills Test Level 3: Mechanical Inspection",
    "Calculation Technology Certification, Level 2",
    "Scuba Diving Open Water Diver (OWD)",
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-white mb-12">Certifications</h2>
        <ul className="list-disc text-left text-gray-300 space-y-4 mx-auto max-w-xl">
          {certifications.map((certification, index) => (
            <li key={index} className="text-lg">
              {certification}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
