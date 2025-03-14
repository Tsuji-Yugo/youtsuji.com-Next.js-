'use client';  // ここを追加

import React, { useEffect, useRef, useState } from "react";

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
    {
      title: "[Essay] How to Become an Engineer Who Thrives Globally",
      link: "https://www.youtsuji.com/assets/%E3%83%86%E3%83%BC%E3%83%9E6%E3%80%8C%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%90%E3%83%AB%E3%81%A7%E6%B4%BB%E8%BA%8D%E3%81%99%E3%82%8B%E6%8A%80%E8%A1%93%E8%80%85%E3%81%AB%E3%81%AA%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AB%E3%80%8D.pdf", 
      description: "Second place in the 45th Essay Contest (Sophomore & Junior Division). An essay about how to become an engineer who can succeed on a global stage.",
    },
    {
      title: "Prime Number Checker Tool",
      link: "https://www.youtsuji.com/html/sosu.html", 
      description: "A tool that determines whether the number you input is a prime number.",
    },
    {
      title: "Icon Encyclopedia",
      link: "https://www.youtsuji.com/html/icon.html", 
      description: "A handy tool that displays a list of Font Awesome icons and lets you easily copy their codes.",
    },
    {
      title: "Class Timer",
      link: "https://www.youtsuji.com/html/class_timer.html", 
      description: "Notifies you of the time remaining until classes start or end. Plays a chime when the time comes. *Includes sound.",
    },
    {
      title: "Intro Quiz",
      link: "https://www.youtsuji.com/html/intro.html", 
      description: "Listen to the intros of songs and guess the song titles! *Includes sound.",
    },
  ];

  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isVisible, setIsVisible] = useState<boolean[]>(new Array(works.length).fill(false)); // 各プロジェクトアイテムの可視状態
  const projectsRef = useRef<HTMLDivElement>(null);

  // IntersectionObserverを使用してセクションの可視状態を監視
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true); // セクションがビューポートに表示されたら
        }
      },
      { threshold: 0.2 } // 30%以上がビューポート内に入ったら反応
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current); // セクションを監視
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current); // 監視解除
      }
    };
  }, []);

  useEffect(() => {
    if (isSectionVisible) {
      // セクションが表示されたら、順番にプロジェクトリストのアイテムを表示
      works.forEach((_, index) => {
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
      id="projects"
      ref={projectsRef}
      className="py-20 bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-white mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className={`bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl ${isVisible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
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
