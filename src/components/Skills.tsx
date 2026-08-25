import { Cpu, UserCheck } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Technical / Hard Skills",
      icon: <Cpu className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Frontend Development (HTML, CSS, JS)", level: 90 },
        { name: "Backend Development", level: 85 },
        { name: "React & Angular", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Python & Django", level: 80 },
        { name: ".NET", level: 75 },
        { name: "Git & Version Control", level: 85 },
      ]
    },
    {
      title: "Soft Skills",
      icon: <UserCheck className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Team Collaboration", level: 95 },
        { name: "Problem Solving", level: 90 },
        { name: "Effective Communication", level: 95 },
        { name: "Adaptability", level: 85 },
        { name: "Time Management", level: 85 },
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Skills Matrix</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, academic proficiencies, and interpersonal skills developed through various experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
