import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-COMMERCE WEBSITE",
    description: "A beautiful e-commerce website using react and tailwindcss",
    image: "/assets/project4.png",
    tags: ["React", "TailwindCSS", "mySQL", "NodeJS", "ExpressJS"]
  },

  {
    id: 2,
    title: "LANDING PAGE",
    description: "A clinic landing page using react and tailwindcss",
    image: "/assets/project5.png",
    tags: ["React", "TailwindCSS", "mySQL","NodeJS", "ExpressJS"]
  },
  {
    id: 3,
    title: "PORTFOLIO WEBSITE",
    description: "A portfolio website using react and tailwind",
    image: "/assets/project3.png",
    tags: ["React", "TailwindCSS"]
  },

  {
    id:4,
    title: "BLOG PLATFORM",
    description: "A blog platform webiste using nextjs and typescript",
    image:"/assets/project6.png",
    tags: ["Next.js", "TypeScript"]
  }
]

export const ProjectsSection = () => {
  return <section id="projects" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured<span className="text-primary">project</span></h2>
      <p className="text-center text-mute-foreground mb-12 max-w-2xl mx-auto">Here are some of my recent project. Each project was carefully crafted with attention to detail, performance, and user experience</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {projects.map((project, key) => (
          <div
            key={key}
            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
            <div className="h-48 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag)=>(
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                    {tag}

                  </span>
                ))}
              </div>
           
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-3">
                <a href="">
                <ExternalLink size={20}/>
                </a>
                <a href="https://github.com/zionlooty">
                  <Github size={20}/>
                  </a>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a href="https://github.com/zionlooty" className="cosmic-button w-fit flex items-center mx-auto gap-2">
          Check my github <ArrowRight size={16}/>
        </a>
      </div>
    </div>
  </section>

}

export default ProjectsSection