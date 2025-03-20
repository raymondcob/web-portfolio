import { 
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiPostgresql,
  DiHtml5
} from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

export const skillsData = [
  {
    name: "HTML5",
    icon: <DiHtml5 className="w-full h-full" />,
    category: "Frontend",
    color: "from-orange-400 to-red-500",
  },
  {
    name: "CSS3",
    icon: <DiCss3 className="w-full h-full" />,
    category: "Frontend",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "JavaScript",
    icon: <DiJavascript1 className="w-full h-full" />,
    category: "Frontend",
    color: "from-yellow-300 to-yellow-500",
  },
  {
    name: "React",
    icon: <DiReact className="w-full h-full" />,
    category: "Frontend",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-full h-full" />,
    category: "Frontend",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Node.js",
    icon: <DiNodejsSmall className="w-full h-full" />,
    category: "Backend",
    color: "from-green-400 to-green-600",
  },
  {
    name: "MongoDB",
    icon: <DiMongodb className="w-full h-full" />,
    category: "Backend",
    color: "from-green-500 to-green-700",
  },
  {
    name: "PostgreSQL",
    icon: <DiPostgresql className="w-full h-full" />,
    category: "Backend",
    color: "from-blue-400 to-blue-600",
  },
]

export const categories = ["Frontend", "Backend"]
