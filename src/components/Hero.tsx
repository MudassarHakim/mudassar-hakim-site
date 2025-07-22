import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
            Mudassar Hakim
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6">
            Software Engineering Leader
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Dynamic and results-driven technology leader with over <span className="text-primary font-semibold">15 years</span> of 
            full-stack engineering experience, including impactful roles at <span className="text-primary font-semibold">Amazon, Ernst & Young, Delhivery, and Western Union</span>. 
            Proven track record of architecting complex, scalable technical products, leading high-performing cross-functional teams, 
            and delivering digital transformation initiatives in agile, fast-paced environments. Adept at bridging business and 
            technology, driving innovation, and consistently achieving strategic objectives across global organizations.
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">35+</div>
              <div className="text-sm text-muted-foreground">Team Members Led</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">$5M+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
          </div>

          {/* Technology Stack Preview */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {['AWS', 'React', 'Angular', 'Java', 'Spring', 'Node.js', 'Python', 'AI/ML', 'Kubernetes'].map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={scrollToContact} className="group shadow-elegant">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://forms.gle/p7yw6Q7AMdGhLuCE6" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Request Resume
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;