import { personalData } from "../lib/data/personal";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  const { social } = personalData;

  return (
    <footer id="contact" className="bg-black py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h2 className="text-2xl font-bold">
            Get In{" "}
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
              Touch
            </span>
          </h2>

          <div className="flex space-x-4">
            <a
              href={social.github}
              className="p-2 rounded-full bg-gray-900 hover:bg-cyan-500/20 transition-colors hover:shadow-[0_0_10px_rgba(34,211,238,0.3)]"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5 text-gray-300" />
            </a>
            <a
              href={social.twitter}
              className="p-2 rounded-full bg-gray-900 hover:bg-cyan-500/20 transition-colors hover:shadow-[0_0_10px_rgba(34,211,238,0.3)]"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5 text-gray-300" />
            </a>
            <a
              href={social.linkedin}
              className="p-2 rounded-full bg-gray-900 hover:bg-cyan-500/20 transition-colors hover:shadow-[0_0_10px_rgba(34,211,238,0.3)]"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 text-gray-300" />
            </a>
            
          </div>

          <div className="text-center text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} {personalData.name}. All rights
              reserved.
            </p>
            <p className="mt-1">Built with React and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
