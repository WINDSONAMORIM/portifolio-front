
import githubLogo from "../assets/github-logo.png";
interface CardProjectsProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
  githubLink?: string;
}

export const CardProjects = (props: CardProjectsProps) => {
  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-[#002E5D] via-[#002E5D] to-[#2774ae] text-white">
      <div className="p-2">
        <img
          className="w-full h-45 rounded-lg object-cover"
          src={props.imageUrl}
          alt={props.title}
        />
      </div>
      <div className="flex justify-center items-center h-35 p-2">
        <p className="w-full font-bold text-xl text-center">{props.title}</p>
      </div>
      <div className="h-3/4 p-2">
        <p className="text-blue-100 text-base">{props.description}</p>
      </div>
      <div className="px-6">
        {props.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="py-4 flex items-end justify-around">
        <div>
          <a
            href={props.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block font-bold py-2 px-4 rounded-full transition ${
              props.link?.trim()
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "bg-gray-400 text-gray-200 cursor-not-allowed pointer-events-none"
            }
          `}
          >
            Ver Projeto
          </a>
        </div>
        <div>
          <a
            href={props.githubLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 rounded-full flex items-center justify-center p-1.5 transition ${
              props.githubLink?.trim()
                ? "bg-white hover:bg-gray-400 text-white"
                : "bg-gray-400 text-gray-200 cursor-not-allowed pointer-events-none"
            }
          `}
          >
            <img
              src={githubLogo}
              alt="GitHub Logo"
              className="w-5 h-5 inline-block center"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
