'use client';  // ここを追加

import React, { useEffect, useRef, useState } from "react";

const Certifications = () => {
  const certifications = [
    "Hazardous Materials Handler, Category Otsu (Class 1, 3, 4, 5, 6)",
    "Second-Class Electrician",
    "Small-Scale Boiler Operator",
    "Skills Test Level 3: Mechanical Inspection",
    "Calculation Technology Certification, Level 2",
    "Scuba Diving Open Water Diver (OWD)",
  ];

  // セクションがビューポートに表示されるかどうか
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isVisible, setIsVisible] = useState<boolean[]>(new Array(certifications.length).fill(false)); // 各リストアイテムの可視状態
  const certificationsRef = useRef<HTMLDivElement>(null);

  // IntersectionObserverを使用してセクションの可視状態を監視
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true); // セクションがビューポートに表示されたら
        }
      },
      { threshold: 0.3 } // 30%以上がビューポート内に入ったら反応
    );

    if (certificationsRef.current) {
      observer.observe(certificationsRef.current); // セクションを監視
    }

    return () => {
      if (certificationsRef.current) {
        observer.unobserve(certificationsRef.current); // 監視解除
      }
    };
  }, []);

  useEffect(() => {
    if (isSectionVisible) {
      certifications.forEach((_, index) => {
        setTimeout(() => {
          setIsVisible((prevState) => {
            const updatedVisibility = [...prevState];
            updatedVisibility[index] = true;
            return updatedVisibility;
          });
        }, index * 300); // 300msごとに表示
      });
    }
  }, [isSectionVisible]);
  

  return (
    <section
      id="certifications"
      ref={certificationsRef}
      className="py-20 bg-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-white mb-12">Certifications</h2>
        <ul className="list-disc text-left text-gray-300 space-y-4 mx-auto max-w-xl">
          {certifications.map((certification, index) => (
            <li
              key={index}
              className={`text-lg transition-all duration-1000 ${
                isVisible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {certification}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
