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
      description: "Built Agentic AI, Multi Agent model, implemented CQRS architecture, and led digital transformation"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
          {/* Profile Content - Now Full Width */}
          <div className="lg:col-span-3">
            <h2 className="text-4xl font-bold mb-4 text-center">About Mudassar Hakim</h2>
            <h3 className="text-2xl font-semibold mb-8 text-center text-muted-foreground">
              Building the Future Through Technology, Leadership & Coaching
            </h3>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                With over 17 years of experience in full-stack
                engineering and team management, I've had the privilege of leading transformative
                technology initiatives across diverse industries including Financial Services,
                E-commerce, and Logistics.
              </p>

              <p>
                My journey spans from individual contributor to engineering leadership roles at
                prestigious organizations like <span className="text-primary font-semibold">Ernst & Young</span>, {' '}
                <span className="text-primary font-semibold">Amazon</span>, {' '}
                <span className="text-primary font-semibold">Delhivery</span>, and {' '}
                <span className="text-primary font-semibold">Western Union</span>.
              </p>

              <p>
                Beyond technical leadership, I'm passionate about <span className="text-primary font-semibold">coaching engineers</span> to
                communicate their expertise effectively. I specialize in helping technically strong engineers who
                struggle with articulating their thinking in high-pressure situations — whether in system design
                interviews, architecture discussions, or leadership presentations.
              </p>

              <p>
                I specialize in architecting scalable solutions, building high-performing teams,
                and driving digital transformation while maintaining a strong focus on
                operational excellence and innovation. My approach combines deep technical expertise
                with clear communication frameworks that help engineers think calmly and explain confidently.
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
                <li>• Executive Diploma in Machine Learning & Artificial Intelligence (IIIT-B)</li>
                <li>• BE Computer Science Engineering</li>
                <li>• MBA from ICFAI, AWS Solution Architect, PMP Certified</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
