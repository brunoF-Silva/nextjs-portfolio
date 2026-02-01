import { DiJavascript, DiPython, DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import Header from "../general/Header";

const skills = [
  {
    name: "JavaScript",
    icon: <DiJavascript />,
    skillLevel: 70,
  },
  {
    name: "React",
    icon: <DiReact />,
    skillLevel: 80,
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill />,
    skillLevel: 80,
  },
  {
    name: "NestJS",
    icon: <SiNestjs />,
    skillLevel: 70,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    skillLevel: 80,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    skillLevel: 75,
  },
  {
    name: "TailWindCSS",
    icon: <RiTailwindCssFill />,
    skillLevel: 75,
  },
  {
    name: "Python",
    icon: <DiPython />,
    skillLevel: 80,
  },
];
export default function SkillSection() {
  return (
    <section id="skills" className="py-16">
      <Header title="My Skills" />
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              className="bg-slate-900 text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition:hover:scale-110"
            >
              <div className="text-5xl text-gray-300">{skill.icon}</div>
              <p className="text-2xl font-semibold my-4 text-gray-200">
                {skill.skillLevel}%
              </p>
              <p className="text-indigo-500 font-semibold">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
