import React, { useEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import { Toaster } from "sonner";

import { ScrollProgress, CustomCursor, FloatingActions, Preloader } from "@/components/site/Chrome";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import Industries from "@/components/site/Industries";
import Technologies from "@/components/site/Technologies";
import Portfolio from "@/components/site/Portfolio";
import Process from "@/components/site/Process";
import Testimonials from "@/components/site/Testimonials";
import About from "@/components/site/About";
import Careers from "@/components/site/Careers";
import Insights from "@/components/site/Insights";
import FAQ from "@/components/site/FAQ";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App relative min-h-screen bg-[#050505] text-white">
      <Preloader />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Industries />
        <Technologies />
        <Portfolio />
        <Process />
        {/* <Testimonials /> */}
        <About />
        {/* <Careers /> */}
        <Insights />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
      <Toaster position="bottom-center" theme="dark" richColors />
    </div>
  );
}

export default App;
