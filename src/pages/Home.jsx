import React from "react";
import "../styles/Home.css";
import Background from "../components/Background";
import Overview from "../components/Overview";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <Background />
      <div className="relative flex flex-col space-y-10 items-center min-h-screen max-w-2xl w-full mx-10 py-10 z-10">
        <Overview />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
