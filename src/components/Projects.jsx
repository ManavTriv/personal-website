import CollapsibleSection from "./CollapsibleSection";

const projects = [
  {
    name: "qsm-ci platform",
    stack: ["javascript", "react", "github actions", "back4app"],
    link: "https://github.com/ManavTriv/QSM-CI-Platform",
  },
  {
    name: "just the facts",
    stack: ["python", "javascript", "react", "flask", "openai"],
    link: "https://github.com/ManavTriv/LLM-News-Curation",
  },
  {
    name: "brewbucks coffee",
    stack: ["python", "javascript", "react", "aws", "terraform", "docker"],
    link: "https://github.com/ManavTriv/Brewbucks-Coffee",
  },
  {
    name: "spamoverflow",
    stack: ["python", "aws", "terraform", "docker"],
    link: "https://github.com/ManavTriv/SpamOverflow",
  },
];

const Projects = () => (
  <CollapsibleSection title="PROJECTS">
    <div className="flex flex-col space-y-2 w-full">
      {projects.map(({ name, stack, link }) => (
        <div key={name} className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <h2 className="font-secondary text-sm sm:text-base tracking-wide text-stone-800 dark:text-stone-200">
              {name}
            </h2>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-secondary text-sm sm:text-base underline underline-offset-4 decoration-accent text-stone-600 dark:text-stone-300 hover:text-accent"
            >
              github
            </a>
          </div>
          <p className="font-secondary text-xs tracking-wide text-stone-500 dark:text-stone-400">
            {stack.join(", ")}
          </p>
        </div>
      ))}
    </div>
  </CollapsibleSection>
);

export default Projects;
