import { GraduationCap, Award, ExternalLink } from "lucide-react";

interface AcademicProject {
  name: string;
  url?: string;
}

interface EducationItem {
  degree: string;
  institution: string;
  institutionUrl?: string;
  timeline?: string;
  gpa?: string;
  academicProjects?: AcademicProject[];
}

export default function Education() {
  const educationData: EducationItem[] = [
    {
      degree: "BSc (Hons) Computing",
      institution: "Itahari International College",
      institutionUrl: "https://iic.edu.np/courses",
      timeline: "",
      gpa: "",
      academicProjects: [
        {
          name: "Journal Sphere (.NET Web App)",
          url: "https://github.com/jaiswalpuza2/JournalSphere-PujaChaudhary.git",
        },
        {
          name: "Kumari Cinemas (.NET Web App)",
          url: "https://github.com/jaiswalpuza2/KumariCinemas.git",
        },
        {
          name: "Fake News Detection (AI Web App)",
          url: "https://github.com/jaiswalpuza2/FakeNewsDetection_PujaChaudhary.git",
        },
        {
          name: "Auto Sathi (Team Project - Frontend)",
          url: "https://github.com/saherabista01/AutoSathi_CodeHub.git",
        },
        {
          name: "Auto Sathi (Team Project - Backend)",
          url: "https://github.com/saherabista01/AutoSathi_CodeHub_Backend.git",
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="h-8 w-8 text-primary" />

          <h2 className="text-3xl font-bold text-foreground">
            Education & Academic Experience
          </h2>
        </div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              <div className="md:hidden absolute left-0 top-2 bottom-0 w-px bg-border"></div>

              <div className="md:hidden absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-primary"></div>

              <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {edu.degree}
                    </h3>

                    {edu.institutionUrl ? (
                      <a
                        href={edu.institutionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-lg text-primary font-medium mt-1 hover:underline"
                      >
                        {edu.institution}
                      </a>
                    ) : (
                      <p className="text-lg text-primary font-medium mt-1">
                        {edu.institution}
                      </p>
                    )}
                  </div>

                  {edu.gpa && (
                    <div className="flex flex-col items-start md:items-end text-muted-foreground text-sm font-medium gap-2">
                      <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full">
                        <Award className="h-4 w-4" />
                        <span>{edu.gpa}</span>
                      </div>
                    </div>
                  )}
                </div>

                {edu.academicProjects &&
                  edu.academicProjects.length > 0 && (
                    <div className="mt-6 border-t border-border pt-6">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                        Academic Projects
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {edu.academicProjects.map((proj, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg border border-border"
                          >
                            <span className="font-medium text-foreground">
                              {proj.name}
                            </span>

                            {proj.url && (
                              <a
                                href={proj.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-auto text-primary hover:text-primary/80 transition-colors"
                                title="View Repository"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
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