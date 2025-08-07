import { Briefcase, Code, User } from "lucide-react"

export const AboutSecton = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Passionate Web Developer & Tech Creator</h3>
                    <p className="text-muted-foreground">
                    I'm a dedicated tech enthusiast with 1 year of experience in full-stack web development. I build responsive, user-friendly applications Passionate about solving problems through clean code and continuous learning.
                    </p>

                    <p className="text-muted-foreground" >
                    As a passionate full-stack developer with 1 year of hands-on experience, I create modern, responsive web applications that deliver great user experiences. I thrive on writing clean, efficient code and continuously exploring new technologies to improve my craft.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>
                        <a href="/assets/Resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary transition-colors duration-300 hover:bg-primary/10">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-center gap-4">

                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="text-primary h-6 w-6" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development</h4>
                                <p className="text-muted-foreground" >
                                    Creating responsive website and web application with modern frameworks
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-center gap-4">

                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="text-primary h-6 w-6" />

                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Client Collaboration</h4>
                                <p className="text-muted-foreground" >
                                I value open communication and work closely with clients to deliver tailored digital solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-center gap-4">

                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="text-primary h-6 w-6" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Project Management</h4>
                                <p className="text-muted-foreground" >
                                I bring strong project management skills that ensure every task is deliverd on time, within scope, and aligned with strategic goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
}