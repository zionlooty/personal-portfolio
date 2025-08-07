import { AboutSecton } from "../components/AboutSection"
import {ContactSection} from "../components/ContactSection"
import {Footer} from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { ProjectsSection } from "../components/projectSection"
import { SkillsSection } from "../components/SkillsSection"
import { StarBackground } from "../components/starBackground"



export const Home = () =>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">

       

         {/* Background Effect */}
         <StarBackground/>

          {/* Navbar */}
          <Navbar/>

           {/* Main Content */}
           <main>
            <HeroSection/>
            <AboutSecton/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
           </main>
            <Footer/>
            {/* Footer */}


    </div>
}