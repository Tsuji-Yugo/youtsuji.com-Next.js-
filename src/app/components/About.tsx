// components/About.tsx
'use client'; 
import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 監視対象がビューポート内に表示されたとき
        if (entry.isIntersecting) {
          setIsVisible(true); // 表示されたら状態を変更
        }
      },
      { threshold: 0.3 } // 30%以上がビューポート内に入ったら反応
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current); // refで指定した要素を監視
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current); // コンポーネントがアンマウントされるときに監視を解除
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          ref={aboutRef}
          className={`text-3xl font-semibold text-center text-white mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          About Me
        </h2>
        <div
          className={`text-lg text-gray-400 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
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
