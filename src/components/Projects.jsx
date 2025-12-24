import CollapsibleSection from "./CollapsibleSection";
import { useColor } from "../contexts/ColorContext";

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
  const { color, theme } = useColor();
  const themeColor = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`;
  const defaultTextColor =
    theme === "dark" ? "rgb(231, 229, 228)" : "rgb(41, 37, 36)";
  const defaultLinkColor =
    theme === "dark" ? "rgb(214, 211, 209)" : "rgb(87, 83, 78)";
  const secondaryTextColor =
    theme === "dark" ? "rgb(168, 162, 158)" : "rgb(120, 113, 108)";

  const Link = ({ href, children, site = false }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-secondary text-sm sm:text-base md:text-md underline underline-offset-4 cursor-pointer"
      style={{
        textDecorationColor: themeColor,
        color: defaultLinkColor,
      }}
      onMouseEnter={(e) => {
        e.target.style.color = themeColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.color = defaultLinkColor;
      }}
    >
      {children}
    </a>
  );

  return (
    <CollapsibleSection title="PROJECTS">
      <div className="flex flex-col space-y-3 w-full">
        {projects.map(({ name, stack, link, site }) => (
          <div key={name} className="flex flex-col space-y-1">
            <div className="flex flex-row justify-between items-center">
              <h2
                className="font-secondary text-sm sm:text-base md:text-md tracking-wide"
                style={{ color: defaultTextColor }}
              >
                {name}
              </h2>
              <div className="flex flex-row items-center gap-3">
                {site && <Link href={site}>site</Link>}
                <Link href={link}>github</Link>
              </div>
            </div>
            <p
              className="font-secondary text-xs sm:text-sm md:text-base tracking-wide"
              style={{ color: secondaryTextColor }}
            >
              {stack}
            </p>
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
};

export default Projects;
