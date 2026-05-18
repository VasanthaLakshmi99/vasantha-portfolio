import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Services from "./components/Services";

function App() {
  return (
    <div className="overflow-x-hidden">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

    <Services />

      <Contact />

    </div>
  );
}

export default App;