import { ShieldCheck, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "AWS Academy",
      date: "May 2024",
      link: "https://www.credly.com/go/UN1eI2bu",
      description: "Certificate of Completion for AWS Academy Cloud Foundations Training Badge. Completed 20 hours of course training."
    },
    {
      title: "AWS Academy Graduate - Data Engineering",
      issuer: "AWS Academy",
      date: "May 2024",
      link: "https://www.credly.com/go/Qm0EXQh2",
      description: "Certificate of Completion for AWS Academy Data Engineering Training Badge. Completed 40 hours of course training."
    },
    {
      title: "AWS Academy Graduate - Machine Learning for NLP",
      issuer: "AWS Academy",
      date: "May 2024",
      link: "https://www.credly.com/go/Hxrj79Qt",
      description: "Certificate of Completion for AWS Academy Machine Learning for Natural Language Processing Training Badge. Completed 20 hours of course training."
    },
    {
      title: "AWS Academy Graduate - Machine Learning Foundations",
      issuer: "AWS Academy",
      date: "May 2024",
      link: "https://www.credly.com/go/VxIxPjL4",
      description: "Certificate of Completion for AWS Academy Machine Learning Foundations Training Badge. Completed 20 hours of course training."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-3 mb-12">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Certifications & Awards</h2>
          </div>
          <a 
            href="https://www.credly.com/users/puja-chaudhary" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm font-medium flex items-center gap-1"
          >
            View Full Credly Profile <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary p-2">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-1">{cert.title}</h3>
              <div className="text-sm font-medium text-primary mb-3">{cert.issuer}</div>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {cert.description}
              </p>
              
              <div className="mt-auto text-xs font-medium text-muted-foreground bg-muted inline-block px-3 py-1 rounded-full">
                {cert.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
