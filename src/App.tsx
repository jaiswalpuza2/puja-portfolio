import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Work from './components/Work';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
        <Navbar />
        <main>
          <Hero />
          <Education />
          <Work />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        
        <footer className="bg-muted py-8 text-center border-t border-border">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Puja Chaudhary. All rights reserved.
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
