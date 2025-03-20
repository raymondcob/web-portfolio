import Navbar from "./components/navbar"
import Header from "./components/header"
import AboutMe from "./components/about-me"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}


