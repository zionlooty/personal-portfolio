import { ArrowDown } from "lucide-react"

export const HeroSection=()=>{
return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
    <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
            <h1 className=" text-4xl md:text-6xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in"> Hi i'm </span>
                <span className="text-primary animate-fade-in-delay-1 opacity-0"> Yusuf</span>
                <span className="text-gradent mt-2 animate-fade-in-delay-2 opacity-0"> Sodiq</span>
            </h1>
                <p className=" text-lg md:text-xl text-muted-foreground max-auto opacity-0 animate-fade-in-delay-3">
                I’m a software Developer who loves building modern web applications with clean code and great user experience. I work with technologies like React, Tailwind CSS, Node.js, and MySQL to bring ideas to life from frontend design to backend logic.
                </p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">

                <a href="#projects" className="cosmic-button">View My Work</a>
                </div>

        </div>
    </div>
    <div className="absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="tex-sm text-muted-foeground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary"/>
    </div>
</section>
}