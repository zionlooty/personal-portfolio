import { cn } from "@/lib/utils"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuopen, setIsMenuOpen] = useState(false) 
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
        } else {
            localStorage.setItem("theme", "light")
            setIsDarkMode(false)
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setIsDarkMode(false)
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true)
        }
    }

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
            
                <a href="#hero" className="text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">BoyTech</span> Portfolio
                    </span>
                </a>

            
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="hover:text-primary text-foreground transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}

                 
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-300 focus:outline-none"
                        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        {isDarkMode ?
                            <Sun className="h-5 w-5 text-yellow-500" /> :
                            <Moon className="h-5 w-5 text-blue-600" />
                        }
                    </button>
                </div>

                
                <div className="md:hidden flex items-center gap-3">
                
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-300 focus:outline-none"
                        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        {isDarkMode ?
                            <Sun className="h-5 w-5 text-yellow-500" /> :
                            <Moon className="h-5 w-5 text-blue-600" />
                        }
                    </button>

                   
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="p-2 text-foreground z-50 rounded-full hover:bg-primary/10 transition-colors duration-300"
                        aria-label={isMenuopen ? "Close Menu" : "Open Menu"}
                    >
                        {isMenuopen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>
            
                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
                    isMenuopen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl text-center">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="hover:text-primary text-foreground transition-colors duration-300 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}

                       
                        <div className="pt-8 border-t border-border/20">
                            <button
                                onClick={() => {
                                    toggleTheme();
                                    setIsMenuOpen(false);
                                }}
                                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300"
                            >
                                {isDarkMode ?
                                    <Sun className="h-5 w-5 text-yellow-500" /> :
                                    <Moon className="h-5 w-5 text-blue-600" />
                                }
                                {isDarkMode ? "Light Mode" : "Dark Mode"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
