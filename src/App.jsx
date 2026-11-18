import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CaseStudy from "./components/CaseStudy";
import AISystems from "./components/AISystems";
import WebBuilds from "./components/WebBuilds";
import Testimonials from "./components/Testimonials";
import Works from "./components/Works";
import AutomationSystems from "./components/AutomationSystems";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <CaseStudy />
        <AISystems />
        <WebBuilds />
        <AutomationSystems />
        <Works />
        <Experience />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
