const projects = [
  {
    name: "qsm-ci platform",
    stack: "javascript, react, github actions, back4app",
    link: "https://github.com/ManavTriv/QSM-CI-Platform",
    site: "https://qsm-ci-project.vercel.app/",
  },
  {
    name: "just the facts",
    stack: "python, javascript, react, flask, openai",
    link: "https://github.com/ManavTriv/LLM-News-Curation",
  },
  {
    name: "brewbucks coffee",
    stack: "python, javascript, react, aws, terraform, docker",
    link: "https://github.com/ManavTriv/Brewbucks-Coffee",
  },
  {
    name: "spamoverflow",
    stack: "python, aws, terraform, docker",
    link: "https://github.com/ManavTriv/SpamOverflow",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col space-y-4 w-full">
      <h1 className="font-secondary text-sm sm:text-base md:text-md font-semibold text-indigo-300 tracking-wide">
        PROJECTS
      </h1>

      {projects.map(({ name, stack, link, site }) => (
        <div key={name} className="flex flex-col space-y-1">
          <div className="flex flex-col space-y-1 sm:flex-row sm:justify-between sm:items-center sm:space-y-0 gap-4">
            <h2 className="font-secondary text-sm sm:text-base md:text-md text-stone-800 tracking-wide">
              {name}
            </h2>
            <div className="flex flex-row items-center gap-3">
              {site && (
                <a
                  href={site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-secondary text-sm sm:text-base md:text-md text-stone-600 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-300 cursor-pointer transition-colors duration-300"
                >
                  site
                </a>
              )}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-secondary text-sm sm:text-base md:text-md text-stone-600 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-300 cursor-pointer transition-colors duration-300"
              >
                github
              </a>
            </div>
          </div>
          <p className="font-secondary text-xs sm:text-sm md:text-base text-stone-400 tracking-wide">
            {stack}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
