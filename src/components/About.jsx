import { Smile } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col space-y-5 w-full">
      <h1 className="font-secondary text-sm sm:text-base md:text-md font-semibold text-indigo-300 tracking-wide">
        ABOUT ME
      </h1>
      <p className="font-secondary text-sm sm:text-base md:text-md text-stone-800 tracking-wide">
        hi i'm manav and i'm currently a graduate engineer at {""}
        <span className="underline decoration-indigo-300 underline-offset-4 hover:text-indigo-300 cursor-pointer transition-colors duration-300">
          ANZ
        </span>
        . I recently completed my degrees in engineering and economics at {""}
        <span className="underline decoration-indigo-300 underline-offset-4 hover:text-indigo-300 cursor-pointer transition-colors duration-300">
          the university of queensland
        </span>
        . i have an interest in building meaningful tools and applications, as
        well as ui/ux design
        <span className="inline-block align-middle ml-1 text-stone-800 hover:text-indigo-300 transition-colors duration-300">
          <Smile size={16} />
        </span>
        .
      </p>
    </div>
  );
};

export default About;
