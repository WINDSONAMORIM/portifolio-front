interface CardProjectsProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
}

export const CardProjects = (props: CardProjectsProps) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-[#002E5D] via-[#002E5D] to-[#2774ae] text-white">
      <div className="px-6 py-4">
        <img
          className="w-full h-45 rounded-lg object-cover"
          src={props.imageUrl}
          alt={props.title}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-blue-100 text-base">{props.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {props.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="px-6 py-4">
        {props.link && (
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
            >
              Ver Projeto
            </a>
          )}
      </div>
    </div>
  );
}


