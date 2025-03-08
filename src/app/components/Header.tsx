'use client';

import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 shadow-md w-full">
      <div className="max-w-full mx-auto px-6 py-4 flex items-center justify-between">
        {/* ロゴ（アイコン画像） */}
        <div className="text-2xl font-bold text-white">
          <a href="#hero">
            <img
              src="/雪だるまアイコン.jpg" // アイコン画像のパスをここに入れてください
              alt="Youtsuji Logo"
              className="w-10 h-10 object-contain" // アイコンのサイズを調整
            />
          </a>
        </div>

        {/* ハンバーガーメニューアイコン（スマホサイズ） */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-white"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* ナビゲーション（PC版） */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-6 text-lg text-white list-none"> {/* リストマーカーを消すために list-none を追加 */}
            <li>
              <Link
                to="about" // ターゲットIDと一致させる
                smooth={true}
                duration={500}
                className="hover:text-blue-400 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="certifications" // ターゲットIDと一致させる
                smooth={true}
                duration={500}
                className="hover:text-blue-400 cursor-pointer"
              >
                Certifications
              </Link>
            </li>
            <li>
              <Link
                to="extracurricular" // ターゲットIDと一致させる
                smooth={true}
                duration={500}
                className="hover:text-blue-400 cursor-pointer"
              >
                Extracurricular
              </Link>
            </li>
            <li>
              <Link
                to="projects" // ターゲットIDと一致させる
                smooth={true}
                duration={500}
                className="hover:text-blue-400 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="hobbies" // ターゲットIDと一致させる
                smooth={true}
                duration={500}
                className="hover:text-blue-400 cursor-pointer"
              >
                Hobbies
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* ハンバーガーメニュー（スマホサイズ） */}
      <div
        className={`lg:hidden absolute top-16 left-0 right-0 bg-gray-900 bg-opacity-80 py-4 ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col items-center space-y-4 text-lg text-white list-none"> {/* リストマーカーを消すために list-none を追加 */}
          <li>
            <Link
              to="about" // ターゲットIDと一致させる
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="hover:text-blue-400 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="certifications" // ターゲットIDと一致させる
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="hover:text-blue-400 cursor-pointer"
            >
              Certifications
            </Link>
          </li>
          <li>
            <Link
              to="extracurricular" // ターゲットIDと一致させる
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="hover:text-blue-400 cursor-pointer"
            >
              Extracurricular
            </Link>
          </li>
          <li>
            <Link
              to="projects" // ターゲットIDと一致させる
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="hover:text-blue-400 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="hobbies" // ターゲットIDと一致させる
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="hover:text-blue-400 cursor-pointer"
            >
              Hobbies
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
