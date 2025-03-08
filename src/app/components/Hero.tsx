'use client';
import React, { useState, useEffect } from "react";

const Hero = () => {
  const images = [
    "/background1.jpg",
    "/background2.jpg",
    "/background3.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // 3秒ごとに画像を変更

    return () => clearInterval(interval); // コンポーネントがアンマウントされるときにインターバルをクリア
  }, []);

  return (
    <section
      id="hero"
      className="w-full relative h-screen bg-cover bg-center transition-all duration-1000 ease-in-out mt-0 z-0" // mt-0 で余白なし、z-index: 0に設定
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        transition: 'background-image 1s ease-in-out', // 背景画像切り替え時のアニメーションを加えます
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Aspiring Web Developer | Data Enthusiast | Creative Thinker
        </p>
      </div>
    </section>
  );
};

export default Hero;
