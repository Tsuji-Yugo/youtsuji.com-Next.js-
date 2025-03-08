import React from "react";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa"; // 必要なアイコンをインポート
import { SiQiita } from "react-icons/si"; // Qiitaのアイコンをインポート

const SocialLinks = () => {
  const socialLinks = [
    {
      platform: "Twitter",
      link: "https://twitter.com/yourprofile",
      icon: <FaTwitter size={40} />,
    },
    {
      platform: "GitHub",
      link: "https://github.com/yourprofile",
      icon: <FaGithub size={40} />,
    },
    {
      platform: "Instagram",
      link: "https://instagram.com/yourprofile",
      icon: <FaInstagram size={40} />,
    },
    {
      platform: "Qiita",
      link: "https://qiita.com/yourprofile",
      icon: <SiQiita size={40} />,
    },
  ];

  return (
    <section id="social-links" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-white mb-12">Social Links</h2>
        <div className="flex justify-center space-x-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition duration-300"
            >
              {social.icon} {/* アイコンのみ表示 */}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
