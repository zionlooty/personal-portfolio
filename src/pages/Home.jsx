import { AboutSecton } from "../components/AboutSection"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { SkillsSection } from "../components/SkillsSection"
import { StarBackground } from "../components/starBackground"
import { ThemeToggle } from "../components/ThemeToggle"


export const Home = () =>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">

        {/* Theme Toggle */}
        <ThemeToggle/>

         {/* Background Effect */}
         <StarBackground/>

          {/* Navbar */}
          <Navbar/>

           {/* Main Content */}
           <main>
            <HeroSection/>
            <AboutSecton/>
            <SkillsSection/>
           </main>

            {/* Footer */}


    </div>
}