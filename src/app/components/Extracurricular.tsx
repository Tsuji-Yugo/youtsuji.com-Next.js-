'use client';  // ここを追加

import React, { useEffect, useRef, useState } from "react";

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
    {
      title: "Teacher Training Course",
      link: "https://www.kanazawa-it.ac.jp/kyoshoku/tlp/index.html",
      description: "Developing practical teaching skills through teaching practice and mock lessons, which are valuable even in the professional world.",
    },
  ];

  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isVisible, setIsVisible] = useState<boolean[]>(new Array(activities.length).fill(false)); // 各リストアイテムの可視状態
  const extracurricularRef = useRef<HTMLDivElement>(null);

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

    if (extracurricularRef.current) {
      observer.observe(extracurricularRef.current); // セクションを監視
    }

    return () => {
      if (extracurricularRef.current) {
        observer.unobserve(extracurricularRef.current); // 監視解除
      }
    };
  }, []);

  useEffect(() => {
    if (isSectionVisible) {
      // セクションが表示されたら、順番に活動リストのアイテムを表示
      activities.forEach((_, index) => {
        const timeoutId = setTimeout(() => {
          setIsVisible((prevState) => {
            const updatedVisibility = [...prevState];
            updatedVisibility[index] = true;
            return updatedVisibility;
          });
        }, index * 300); // 300msごとに表示
        return () => clearTimeout(timeoutId); // timeoutIdが返されるので、このタイミングでクリーンアップ
      });
    }
  }, [isSectionVisible]);

  return (
    <section
      id="extracurricular"
      ref={extracurricularRef}
      className="py-20 bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-white mb-12">Extracurricular Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl ${
                isVisible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
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