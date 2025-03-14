import Header from "./components/Header"; 
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Extracurricular from "./components/Extracurricular"; 
import Certifications from "./components/Certifications"; 
import Hobbies from "./components/Hobbies"; 
import SocialLinks from "./components/SocialLinks"; 

export default function Home() {
  return (
    <div>
      <div className="bg-gray-900 text-white">
        <Header />
        <Hero />
        <About />
        <Certifications /> 
        <Extracurricular /> 
        <Projects />
        <Hobbies /> 
        <SocialLinks /> 
        <Footer />
      </div>
    </div>
  );
}
