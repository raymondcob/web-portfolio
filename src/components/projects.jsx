import { projectsData } from "../lib/data/projects";
import { FaGithub } from "react-icons/fa";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          My{" "}
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-cyan-500/50 transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:-translate-y-1 duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-800 text-gray-300 hover:bg-cyan-500/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-1 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <HiArrowTopRightOnSquare className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
