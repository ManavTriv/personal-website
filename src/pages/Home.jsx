import "../styles/Home.css";
import Overview from "../components/Overview";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col space-y-10 items-center min-h-screen max-w-2xl w-full mx-10 py-10">
        <Overview />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
