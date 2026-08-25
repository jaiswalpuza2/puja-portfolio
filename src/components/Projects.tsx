import { useState } from 'react';
import { FolderGit2, ExternalLink } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.5 5.5 0 0 0-.1 3.8 5.5 5.5 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
    <path d="M9 18c-4.5 1.5-5-2.5-7-3"></path>
  </svg>
);

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web', 'AI', 'Personal'];

  const projects = [
    {
      title: "JobSphere - AI Powered Freelancing Platform",
      description: "An AI-powered job marketplace connecting employers and freelancers. Features include AI-assisted resume and proposal generation, intelligent job matching, real-time chat, secure authentication, and separate dashboards.",
      category: "AI",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Socket.io", "Gemini AI"],
      githubUrl: "https://github.com/jaiswalpuza2/puja-chaudhary-jobsphere.git",
      liveUrl: null,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Responsive E-Commerce Website",
      description: "A responsive online shopping platform that allows users to browse products, view product details, manage their cart, and proceed through a seamless checkout process.",
      category: "Web",
      techStack: ["HTML5", "CSS3", "JavaScript", "UI/UX Design"],
      githubUrl: "https://github.com/jaiswalpuza2/ecommerceWebsite.git",
      liveUrl: null,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Interactive To-Do List",
      description: "A clean and interactive To-Do list web application built to help users manage their daily tasks efficiently.",
      category: "Personal",
      techStack: ["React", "JavaScript", "CSS"],
      githubUrl: "https://github.com/jaiswalpuza2/ToDoList.git",
      liveUrl: null,
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Personal Developer Portfolio",
      description: "A modern, responsive personal portfolio website built to showcase my projects, skills, and professional experience.",
      category: "Personal",
      techStack: ["React", "Tailwind CSS", "Vite", "TypeScript"],
      githubUrl: "https://github.com/jaiswalpuza2/Portfolio.git",
      liveUrl: null,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-3">
            <FolderGit2 className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Projects Showcase</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'bg-background text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-card border border-border rounded-xl overflow-hidden flex flex-col group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="View source code">
                        <GithubIcon className="h-5 w-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="View live demo">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm flex-grow mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
