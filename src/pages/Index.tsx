import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
