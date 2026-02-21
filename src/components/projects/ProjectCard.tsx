import Image from "next/image";

interface ProjectCardProps {
  imagePath: string;
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({
  imagePath,
  title,
  description,
  link,
}: ProjectCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Image
        src={imagePath}
        alt="project-image"
        width={800}
        height={600}
        className="rounded-lg transition hover:scale-102"
      />
      <p className="my-4 text-xl sm:text-2xl font-semibold text-gray-200">
        {title}
      </p>
      <p className="font-medium text-gray-400">{description}</p>
    </a>
  );
}
