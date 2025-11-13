import { Trophy, Award, Target, Star, TrendingUp, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
  const majorAchievements = [
    {
      icon: DollarSign,
      title: "Revenue Generation",
      value: "$95M+",
      description: "Net revenue generated at Western Union through technology initiatives and transaction growth",
      metrics: ["Bank transactions: 10.3M → 12.7M", "Wallet transactions: 174K → 873K", "D2C transactions: 57 → 54,439"]
    },
    {
      icon: Target,
      title: "Cost Optimization",
      value: "$350K",
      description: "Annual cost savings achieved at Amazon through strategic technical debt reduction",
      metrics: ["12% reduction in ticket count", "30% improvement in developer productivity", "Automated recurring workflows"]
    },
    {
      icon: TrendingUp,
      title: "Performance Excellence",
      value: "99.99%",
      description: "System uptime achieved while handling 2M+ transactions per second at Ernst & Young",
      metrics: ["30% latency optimization", "40% reduction in concurrency issues", "15-min query resolution improvement"]
    },
    {
      icon: Trophy,
      title: "Project Success",
      value: "$5M+",
      description: "Successfully won and delivered RFPs through technical proposal design and execution",
      metrics: ["5+ BFSI projects delivered", "25% team retention improvement", "20% team development into SMEs"]
    }
  ];

  const awards = [
    {
      title: "Year-End Recognition Award",
      organization: "Western Union",
      category: "Site Leadership Team",
      description: "Recognized for exceptional leadership and contribution to organizational success"
    },
    {
      title: "Over and Above Award",
      organization: "Western Union",
      category: "Excellence in Delivery",
      description: "Consecutive recognition for exceeding performance expectations and delivering exceptional results"
    },
    {
      title: "Best Mentor Award",
      organization: "Yash Technologies",
      category: "Leadership Development",
      description: "Acknowledged for outstanding mentoring and developing junior engineers into senior roles"
    }
  ];

  const keyImpacts = [
    {
      metric: "17+",
      label: "Years of Leadership",
      description: "Engineering management across multiple Fortune 500 companies"
    },
    {
      metric: "35+",
      label: "Team Members Led",
      description: "Successfully managed and mentored international engineering teams"
    },
    {
      metric: "650+",
      label: "Corridors Enabled",
      description: "Payment corridors implemented across wallet, bank, and D2C systems"
    },
    {
      metric: "75%",
      label: "Performance Improvement",
      description: "Homepage load time reduction through optimization initiatives"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Achievements & Awards
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Recognized excellence in engineering leadership, innovation, and delivering 
              measurable business impact across diverse technology initiatives.
            </p>
          </div>

          {/* Major Achievements */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {majorAchievements.map((achievement, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 animate-slide-up border-l-4 border-l-primary" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{achievement.title}</CardTitle>
                      <div className="text-3xl font-bold text-primary">{achievement.value}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{achievement.description}</p>
                  <div className="space-y-2">
                    {achievement.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center gap-2 text-sm">
                        <Star className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Impact Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in">
            {keyImpacts.map((impact, index) => (
              <Card key={index} className="text-center shadow-elegant hover:shadow-glow transition-all duration-300 bg-gradient-to-b from-background to-secondary/30">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{impact.metric}</div>
                  <div className="font-semibold text-foreground mb-2">{impact.label}</div>
                  <div className="text-sm text-muted-foreground">{impact.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Awards and Recognition */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Awards & Recognition</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 bg-gradient-to-br from-primary/5 to-accent/5" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{award.title}</CardTitle>
                    <div className="text-primary font-semibold">{award.organization}</div>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="mb-3">{award.category}</Badge>
                    <p className="text-sm text-muted-foreground">{award.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Highlights */}
          <div className="mt-16 animate-fade-in">
            <Card className="shadow-elegant bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold text-foreground">
                  Professional Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Leadership Excellence</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Managed international teams across multiple time zones</li>
                      <li>• Mentored 20% of team members into Subject Matter Experts</li>
                      <li>• Improved team retention by 25% through structured frameworks</li>
                      <li>• Led digital transformation initiatives at enterprise scale</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Technical Innovation</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Built AI chatbots with GPT-4 integration and RAG architecture</li>
                      <li>• Implemented CQRS and Event Sourcing microservices patterns</li>
                      <li>• Architected distributed systems handling 2M+ TPS</li>
                      <li>• Established automation workflows reducing manual intervention</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;