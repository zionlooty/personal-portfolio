import React, { useState, useEffect } from "react";
import {
  Code2,
  Database,
  Globe,
  Wrench,
  Palette,
  Server,
  GitBranch,
  Monitor,
  Smartphone,
  Cloud
} from "lucide-react";

const skillIcons = {
  "HTML/CSS": Globe,
  "JavaScript": Code2,
  "React": Code2,
  "Tailwind CSS": Palette,
  "Next.js": Code2,
  "TypeScript": Code2,
  "Vue.js": Code2,
  "Git/GitHub": GitBranch,
  "VS Code": Monitor,
  "Figma": Palette,
  "NPM/Yarn": Wrench,
  "Webpack": Wrench,
  "Node.js": Server,
  "Express.js": Server,
  "MySQL": Database,
  "MongoDB": Database,
  "PostgreSQL": Database,
  "Python": Code2,
  "PHP": Server,
  "Docker": Cloud,
  "AWS": Cloud,
  "Responsive Design": Smartphone,
};

const skills = [
  // Frontend
  {
    name: "HTML/CSS",
    level: 95,
    category: "frontend",
   
  },
  {
    name: "JavaScript",
    level: 90,
    category: "frontend",
  
  },
  {
    name: "React",
    level: 90,
    category: "frontend",
   
  },
  {
    name: "Tailwind CSS",
    level: 98,
    category: "frontend",
    
  },
  {
    name: "Next.js",
    level: 80,
    category: "frontend",
   
  },
  {
    name: "TypeScript",
    level: 75,
    category: "frontend",
   
  },
  {
    name: "Responsive Design",
    level: 92,
    category: "frontend",
   
  },

  // Backend
  {
    name: "Node.js",
    level: 80,
    category: "backend",
   
  },
  {
    name: "Express.js",
    level: 75,
    category: "backend",
   
  },
  {
    name: "MySQL",
    level: 70,
    category: "backend",
  
  },
  
  {
    name: "Git/GitHub",
    level: 98,
    category: "tools",
   
  },
  {
    name: "VS Code",
    level: 95,
    category: "tools",
 
  },
  {
    name: "Figma",
    level: 85,
    category: "tools",

  },
  
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [animatedSkills, setAnimatedSkills] = useState(new Set());

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillIndex = entry.target.getAttribute('data-skill-index');
            setAnimatedSkills(prev => new Set([...prev, skillIndex]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillElements = document.querySelectorAll('.skill-card');
    skillElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredSkills]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'frontend': return <Code2 className="h-4 w-4" />;
      case 'backend': return <Server className="h-4 w-4" />;
      case 'tools': return <Wrench className="h-4 w-4" />;
      default: return <Globe className="h-4 w-4" />;
    }
  };

  const getSkillIcon = (skillName) => {
    const IconComponent = skillIcons[skillName] || Code2;
    return <IconComponent className="h-5 w-5 text-primary" />;
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Skills</span> &
            <span className="text-primary"> Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
            across different areas of web development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 flex items-center gap-2 font-medium ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                  : "bg-card border-border text-foreground hover:border-primary hover:text-primary hover:scale-105"
              }`}
            >
              {getCategoryIcon(category)}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const isAnimated = animatedSkills.has(index.toString());
            return (
              <div
                key={`${skill.name}-${selectedCategory}`}
                data-skill-index={index}
                className="skill-card bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 group"
              >
                {/* Skill Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {getSkillIcon(skill.name)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      {skill.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-border rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary to-primary/80 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isAnimated ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>

                {/* Description */}
                {/* <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p> */}
              </div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {categories.slice(1).map((category) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              const avgLevel = Math.round(
                categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length
              );

              return (
                <div key={category} className="text-center">
                  <div className="flex justify-center mb-2">
                    {getCategoryIcon(category)}
                  </div>
                  <div className="text-2xl font-bold text-primary">{avgLevel}%</div>
                  <div className="text-sm text-muted-foreground capitalize">{category}</div>
                  <div className="text-xs text-muted-foreground">
                    {categorySkills.length} skills
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
