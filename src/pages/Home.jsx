// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import FeaturedResorts from "../components/FeaturedResorts";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <div className="mt-6">
        <SearchBar />
      </div>

      <FeaturedResorts />
      <WhyChoose/>
      <Testimonials />
      <CallToAction />

       <Footer />
    </div>
  );
}
