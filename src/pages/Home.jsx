import React from "react";
import "../styles/Home.css";
import Background from "../components/Background";
import Overview from "../components/Overview";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <Background />
      <div className="relative flex flex-col space-y-10 items-center min-h-screen max-w-2xl w-full mx-10 py-10 z-10">
        <FadeIn className="w-full">
          <Overview />
        </FadeIn>
        <FadeIn className="w-full" delay={0.1}>
          <About />
        </FadeIn>
        <FadeIn className="w-full" delay={0.2}>
          <Experience />
        </FadeIn>
        <FadeIn className="w-full" delay={0.3}>
          <Projects />
        </FadeIn>
        <FadeIn className="w-full" delay={0.4}>
          <Footer />
        </FadeIn>
      </div>
    </div>
  );
};

export default Home;
