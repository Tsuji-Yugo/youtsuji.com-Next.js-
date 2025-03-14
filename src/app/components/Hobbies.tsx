'use client';  // ここを追加

import React, { useEffect, useRef, useState } from "react";

const Hobbies = () => {
  const hobbies = [
    {
      title: "Full Marathon",
      link: "https://www.youtsuji.com/html/marathon.html",
      description: "Started running full marathons as a hobby. My goal is to achieve a sub-3.5 (under 3 hours 30 minutes).",
    },
    {
      title: "Live Music & Concerts",
      link: "https://www.youtsuji.com/html/music.html",
      description: "I enjoy listening to live music from various genres.",
    },
    {
      title: "Ramen Blog",
      link: "https://www.youtsuji.com/html/under_construction.html",
      description: "On my days off, I visit local ramen shops and write about them.",
    },
    {
      title: "Programming",
      link: "https://www.youtsuji.com/html/under_construction.html",
      description: "I enjoy programming as a hobby and am casually learning new technologies.",
    },
  ];

  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isVisible, setIsVisible] = useState<boolean[]>(new Array(hobbies.length).fill(false)); // 各ホビーアイテムの可視状態
  const hobbiesRef = useRef<HTMLDivElement>(null);

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

    if (hobbiesRef.current) {
      observer.observe(hobbiesRef.current); // セクションを監視
    }

    return () => {
      if (hobbiesRef.current) {
        observer.unobserve(hobbiesRef.current); // 監視解除
      }
    };
  }, []);

  useEffect(() => {
    if (isSectionVisible) {
      // セクションが表示されたら、順番にホビーリストのアイテムを表示
      hobbies.forEach((_, index) => {
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
      id="hobbies"
      ref={hobbiesRef}
      className="py-20 bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-white mb-12">Hobbies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className={`bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl ${
                isVisible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
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
