import { ArrowRight, Mail, Eye } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.5 5.5 0 0 0-.1 3.8 5.5 5.5 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
    <path d="M9 18c-4.5 1.5-5-2.5-7-3"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Hero() {
  return (
    <section id="about" className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center lg:text-left">
         
          <h1 className="text-6xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Puja Chaudhary</span>
          </h1>
          <p className="text-xl md:text-1xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0">
            I am a passionate and motivated Full-Stack Developer with experience in building responsive, user-friendly, and AI-powered web applications.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-5 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-200 w-full sm:w-auto shadow-lg shadow-primary/25"
            >
              View My Work
              <ArrowRight className="ml-2 -mr-1 h-6 w-6" />
            </a>
            <a
              href="/Puja_Chaudhary_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-border text-lg font-medium rounded-md text-foreground bg-background hover:bg-muted transition-all duration-200 w-full sm:w-auto"
            >
              View CV
              <Eye className="ml-2 -mr-1 h-6 w-6" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-border text-lg font-medium rounded-md text-foreground bg-background hover:bg-muted transition-all duration-200 w-full sm:w-auto"
            >
              Contact Me
            </a>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-8">
            <a href="https://github.com/jaiswalpuza2" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">GitHub</span>
              <GithubIcon className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/in/puja-chaudhary-638106430/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">LinkedIn</span>
              <LinkedinIcon className="h-8 w-8" />
            </a>
            <a href="mailto:jaiswalpuza@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
        <div className="flex-1 relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md mx-auto">
          <div className="aspect-square rounded-full overflow-hidden border-4 border-muted relative z-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20" />
            <img
              src="/profile-final.png"
              alt="Puja Chaudhary"
              className="object-cover object-top w-full h-full bg-muted"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}
