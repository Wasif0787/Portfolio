import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import AboutSection from "./Components/AboutSection"
import ProjectsSection from './Components/ProjectsSection'
import EmailSection from './Components/EmailSection'
import Footer from './Components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className='container mt-24 px-12 py-4 mx-auto'>
        <HeroSection />
        <AboutSection/>
        <ProjectsSection/>
        <EmailSection/>
      </div>
      <Footer/>
    </main>
  )
}
