import Header from "./components/Header"; 
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <div className="bg-gray-900 text-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      </div>
    </div>
  );
}
