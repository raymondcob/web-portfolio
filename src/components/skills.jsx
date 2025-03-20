import { skillsData, categories } from "../lib/data/skills.jsx"

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          My{" "}
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
            Skills
          </span>
        </h2>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-200">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillsData
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-800 
                               bg-gray-900/70 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300
                               hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] hover:-translate-y-1`}
                    >
                      <div className={`bg-gradient-to-r ${skill.color} bg-clip-text`}>{skill.icon}</div>
                      <span
                        className={`text-sm font-medium bg-gradient-to-r ${skill.color} bg-clip-text text-transparent group-hover:text-white transition-colors duration-300`}
                      >
                        {skill.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
