import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Counters from "./components/Counters";
import About from "./components/About";
import Research from "./components/Research";
import Publications from "./components/Publications";
import GlobalJourney from "./components/GlobalJourney";
import FeaturedMoments from "./components/FeaturedMoments";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCVButton from "./components/FloatingCVButton";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f6f2] text-slate-800">
      <Navbar />
      <Hero />
      <Counters />
      <About />
      <Research />
      <Publications />
      <GlobalJourney />
      <FeaturedMoments />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingCVButton />
    </div>
  );
}