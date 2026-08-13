import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills  from "./components/Skills/Skills";
import Formation from "./components/Formation/Formation";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTopOnLoad from "./components/ScrollToTopOnLoad";

function App() {

  return (
    <>
      <ScrollToTopOnLoad />

      <Navbar />

      <main className="site-content">
      <Hero />
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Formation/>
      <Contact/>
      </main>

      <Footer/>
    </>
  );
}

export default App;
