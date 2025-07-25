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
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
          {/* Profile Content - Now Full Width */}
          <div className="lg:col-span-3">
            <h3 className="text-3xl font-bold mb-6">Building the Future Through Technology & Leadership</h3>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                With over 15 years of experience in full-stack 
                engineering and team management, I've had the privilege of leading transformative 
                technology initiatives across diverse industries including Financial Services, 
                E-commerce, and Logistics.
              </p>
              
              <p>
                My journey spans from individual contributor to engineering leadership roles at 
                prestigious organizations like Ernst & Young, 
                Amazon, 
                Delhivery, and 
                Western Union.
              </p>
              
              <p>
                I specialize in architecting scalable solutions, building high-performing teams, 
                and driving digital transformation while maintaining a strong focus on 
                operational excellence and innovation.
              </p>
              
              <p>
                As a thought leader in the tech community, I actively share my knowledge through 
                technical publications on Medium, covering topics from AI/ML and system design 
                to prompt engineering. My hands-on projects span from intelligent chatbots and 
                medical AI systems to data science applications, demonstrating practical expertise 
                across the full spectrum of modern software development.
              </p>
            </div>

            {/* Education & Certifications */}
            <div className="mt-8">
              <h4 className="text-2xl font-semibold mb-4">Education & Certifications</h4>
              <ul className="text-muted-foreground space-y-2">
                <li>• Executive Diploma in Machine Learning & AI (IIIT-B)</li>
                <li>• BE Computer Science Engineering (78.69%, Ranked 3rd)</li>
                <li>• MBA from ICFAI, AWS Solution Architect, PMP Certified</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <highlight.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{highlight.title}</h4>
                <p className="text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
