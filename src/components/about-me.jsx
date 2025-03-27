import { personalData } from "../lib/data/personal"
import { HiUser, HiEnvelope, HiMapPin, HiBriefcase, HiAcademicCap,  } from "react-icons/hi2"

export default function AboutMe() {
  const { details, about } = personalData

  return (
    <section id="about" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          About{" "}
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
            Me
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">Who I Am</h3>
              <p className="text-sm text-gray-400 mb-4">A brief introduction</p>
              <div className="space-y-4 text-gray-300">
                <p>{about.intro}</p>
                <p>{about.hobbies}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">Personal Details</h3>
              <p className="text-sm text-gray-400 mb-4">Get to know me better</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <HiUser className="w-5 h-5 text-cyan-400" />
                  <div>
                    <span className="block text-sm text-gray-400">Full Name</span>
                    <span className="block font-medium text-gray-200">{details.fullName}</span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <HiEnvelope className="w-5 h-5 text-cyan-400" />
                  <div>
                    <span className="block text-sm text-gray-400">Email</span>
                    <span className="block font-medium text-gray-200">{details.email}</span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <HiMapPin className="w-5 h-5 text-cyan-400" />
                  <div>
                    <span className="block text-sm text-gray-400">Location</span>
                    <span className="block font-medium text-gray-200">{details.location}</span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <HiBriefcase className="w-5 h-5 text-cyan-400" />
                  <div>
                    <span className="block text-sm text-gray-400">Occupation</span>
                    <span className="block font-medium text-gray-200">{details.occupation}</span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <HiAcademicCap className="w-5 h-5 text-cyan-400" />
                  <div>
                    <span className="block text-sm text-gray-400">Experience</span>
                    <span className="block font-medium text-gray-200">{details.experience}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
