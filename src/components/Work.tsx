import { Briefcase, MapPin, Calendar } from 'lucide-react';

export default function Work() {
  const workExperience = [
    {
      role: "Full Stack Developer Intern",
      company: "Lunar IT Solution",
      companyUrl: "https://lunaritsolution.com/",
      duration: "June 26, 2025 - September 2026",
      location: "Hatiya Line 6 RD, Itahari",
      achievements: [
        "Collaborated with the team to develop and maintain scalable web applications.",
        "Applied problem-solving skills to troubleshoot and debug complex frontend and backend issues.",
        "Utilized version control with Git for efficient team collaboration and codebase management.",
        "Worked with modern technologies including React, Tailwind CSS, Python, and Django."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Work Experience</h2>
        </div>

        <div className="relative border-l-2 border-border ml-3 md:ml-4 space-y-12">
          {workExperience.map((job, index) => (
            <div key={index} className="relative pl-8 md:pl-10">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-primary border-4 border-background"></div>
              
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                    {job.companyUrl ? (
                      <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-lg text-primary font-medium mt-1 hover:underline">
                        {job.company}
                      </a>
                    ) : (
                      <p className="text-lg text-primary font-medium mt-1">{job.company}</p>
                    )}
                  </div>
                  <div className="flex flex-col text-sm text-muted-foreground font-medium gap-1.5">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      <span>{job.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="list-none space-y-3 mt-4 mb-6">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground relative pl-5">
                      <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-primary/60"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
                
                {job.image && (
                  <div className="mt-4 rounded-xl overflow-hidden border border-border">
                    <img 
                      src={job.image} 
                      alt={`${job.company} Experience`} 
                      className="w-full h-auto max-h-96 object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
