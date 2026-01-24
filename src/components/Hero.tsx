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
        <div className="max-w-4xl mx-auto text-center animate-fade-in pt-20 sm:pt-0">

          {/* Main Heading - SEO Optimized H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
            Software Engineering Leader & Coach
          </h1>

          {/* Subtitle - Name and Credentials as H2 */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-8">
            Mudassar Hakim | 17+ Years at Amazon, Ernst & Young, Delhivery
          </h2>

          {/* Coaching Narrative - Value Proposition */}
          <div className="space-y-6 mb-8 max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              I work with engineers who are technically strong but struggle to explain their thinking clearly —
              especially in interviews, design discussions, and leadership moments.
            </p>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              My focus is on breaking down complex systems and AI into simple structures that are easy to
              understand, explain, and reason about. I use whiteboards, mental models, and clear narratives
              to help engineers think calmly under pressure and communicate with confidence.
            </p>

            <p className="text-lg sm:text-xl text-primary font-semibold leading-relaxed">
              The goal isn't to sound smarter. It's to think clearly, explain simply, and lead better.
            </p>
          </div>

          {/* Professional Background */}
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Dynamic and results-driven technology leader with proven track record of architecting complex,
            scalable technical products, leading high-performing cross-functional teams, and delivering
            digital transformation initiatives in agile, fast-paced environments.
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">17+</div>
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