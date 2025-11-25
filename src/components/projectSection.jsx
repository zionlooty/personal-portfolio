import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-COMMERCE WEBSITE",
    description:
      "A modern, full-stack e-commerce platform designed for showcasing and selling jewelry online. The site features product browsing with detailed descriptions and images, shopping cart and checkout system, secure user authentication, and an admin dashboard for managing products, users, and orders.",
    image: "/assets/project4.png",
    tags: ["React", "TailwindCSS", "mySQL", "NodeJS", "ExpressJS"],
    github: "https://github.com/zionlooty",
  },
  
  {
    id: 2,
    title: "BLOG PLATFORM",
    description:
      "A full-stack blog platform that enables users to create, edit, and publish blog posts with a clean and responsive interface.",
    image: "/assets/project6.png",
    tags: ["Next.js", "TypeScript"],
    github: "https://github.com/zionlooty",
    link:"https://Blogxr.vercel.app"
  },
  {
    id: 3,
    title: "WEATHER APP",
    description:
      "A responsive weather application built with Next.js, TypeScript, and Tailwind CSS, featuring real-time data from the WeatherAPI.com service.",
    image: "/assets/project7.png",
    tags: ["Next.js", "TypeScript"],
    link: "https://weather-app-development.vercel.app/", 
    github: "https://github.com/zionlooty/weather-app",
  },

  {
    id:4,
    title: "TODOLIST",
    description:"A simple task manager that allows users to sign up, log in, and manage daily tasks including creating, editing, and deleting tasks — with data saved in a backend database.",
    image:"/assets/project8.png",
    tags: ["React", "TailwindCSS", "mySQL", "NodeJS", "ExpressJS"],
    link:"https://todohubx.vercel.app",
    github: "https://github.com/zionlooty",
  },

  {
    id:5,
    title:"Massage Alchemy",
    description:"A beautifully designed and fully responsive massage therapy website built with React and TailwindCSS. The platform showcases wellness services, a gallery, smooth page navigation, and an elegant, user-friendly interface. Includes a mobile-friendly navbar, service sections, and a clean visual layout that highlights the brand’s calm and relaxing theme.",
    image:"/assets/project9.png",
    tags: ["React", "TailwindCSS"],
    link:"https://massage-alchemy.vercel.app/",
    github: "https://github.com/zionlooty",

  }


]



export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured<span className="text-primary"> project</span>
        </h2>
        <p className="text-center text-mute-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                   
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/zionlooty"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check my github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
