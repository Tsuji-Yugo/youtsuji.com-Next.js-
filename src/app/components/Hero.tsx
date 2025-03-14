'use client';
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const images = [
    '/background1.jpg',
    '/background2.jpg',
    '/background3.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImage(currentImage);
      setCurrentImage((prev) => (prev + 1) % images.length);
      setIsTransitioning(true);

      const timeout = setTimeout(() => {
        setIsTransitioning(false);
      }, 1500); // 1.5秒でトランジション終了

      return () => clearTimeout(timeout);
    }, 4500); // 6秒ごとに画像変更

    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  return (
    <section id="hero" className="relative w-full h-screen mt-0 z-0 overflow-hidden">
      {/* 前の画像 */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-1500 ease-in-out scale-animation ${
          isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
        }`}
        style={{
          backgroundImage: `url(${images[prevImage]})`,
          zIndex: 1,
        }}
      />

      {/* 現在の画像 */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-1500 ease-in-out scale-animation ${
          isTransitioning ? 'opacity-100 scale-100' : 'opacity-100 scale-105'
        }`}
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          zIndex: 2,
        }}
      />

      {/* 黒のオーバーレイ */}
      <div className="absolute inset-0 bg-black opacity-50 z-3"></div>

      {/* テキストコンテンツ */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-white animate-fade-in-up delay-500">
          Aspiring Web Developer | Data Enthusiast | Creative Thinker
        </p>
      </div>

      <style jsx>{`
        .scale-animation {
          transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
        }

        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 1s forwards;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* スマホサイズでも画像が見切れないように */
        @media (max-width: 767px) {
          #hero .scale-animation {
            background-size: cover;
            background-position: center;
            object-fit: cover;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
