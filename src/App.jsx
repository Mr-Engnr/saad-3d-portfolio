import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientWorks from "./components/ClientWorks";
import Capabilities from "./components/Capabilities";
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
        <Capabilities />
        <ClientWorks />
        <AutomationSystems />
        <Works />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
