import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "Technical Excellence",
      description: "Delivered 5+ BFSI projects handling 2M+ TPS with 99.99% uptime"
    },
    {
      icon: Users,
      title: "Team Leadership", 
      description: "Managed international teams of 35+ engineers across multiple time zones"
    },
    {
      icon: Target,
      title: "Business Impact",
      description: "Generated $95M+ in net revenue and achieved $350k annual cost savings"
    },
    {
      icon: TrendingUp,
      title: "Innovation Driver",
      description: "Built AI chatbots, implemented CQRS architecture, and led digital transformation"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate technology leader who builds relationships, teams, companies, and solutions 
              to solve real-world problems through innovation and strategic vision.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image Placeholder */}
            <div className="relative animate-slide-up">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-elegant">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">MH</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Professional Photo</p>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-2xl font-semibold text-foreground">
                Building the Future Through Technology & Leadership
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over <strong className="text-primary">15 years</strong> of experience in full-stack 
                  engineering and team management, I've had the privilege of leading transformative 
                  technology initiatives across diverse industries including Financial Services, 
                  E-commerce, and Logistics.
                </p>
                
                <p>
                  My journey spans from individual contributor to engineering leadership roles at 
                  prestigious organizations like <strong className="text-primary">Ernst & Young</strong>, 
                  <strong className="text-primary"> Amazon</strong>, 
                  <strong className="text-primary"> Delhivery</strong>, and 
                  <strong className="text-primary"> Western Union</strong>.
                </p>
                
                <p>
                  I specialize in architecting scalable solutions, building high-performing teams, 
                  and driving digital transformation while maintaining a strong focus on 
                  operational excellence and innovation.
                </p>
              </div>

              {/* Education & Certifications */}
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Education & Certifications</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Executive Diploma in Machine Learning & AI (IIIT-B)</li>
                  <li>• BE Computer Science Engineering (78.69%, Ranked 3rd)</li>
                  <li>• MBA from ICFAI, AWS Solution Architect, PMP Certified</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;