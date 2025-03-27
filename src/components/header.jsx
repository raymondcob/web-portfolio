import { personalData } from "../lib/data/personal"

export default function Header() {
  return (
    <section className="relative py-20 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-cyan-500/30 bg-black relative">
              <img
                src="src/images/avatar/user.png"
                alt="Profile Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Status indicator */}
            <div className="absolute -top-0.5 -left-0.1">
              <div className="bg-black/40 backdrop-blur-sm p-1.5 rounded-full border border-cyan-500/30">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500"></span>
                </span>
              </div>
            </div>

            {/* Glowing effect behind avatar */}
            <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl -z-0"></div>
          </div>

          <div className="text-center md:text-left space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              <div className="text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">
                {personalData.name}
              </div>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400">{personalData.title}</h2>
            <p className="text-gray-400 max-w-lg">{personalData.summary}</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-2 text-sm font-medium text-black shadow-sm hover:from-cyan-600 hover:to-emerald-600"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md border border-gray-700 bg-black/50 backdrop-blur-sm px-4 py-2 text-sm font-medium text-gray-200 shadow-sm transition-colors hover:bg-gray-800 hover:text-white"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
