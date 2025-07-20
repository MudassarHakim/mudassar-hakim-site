import { Building, Calendar, MapPin, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      company: "Ernst & Young",
      position: "Senior Software Engineering Manager / Director",
      duration: "Jan 2024 – Present",
      location: "Pune, India",
      domain: "BFSI",
      teamSize: 15,
      achievements: [
        "Delivered 5+ BFSI projects end-to-end, handling 2M+ TPS with 99.99% uptime",
        "Optimized latency by 30% via Redis caching & Drools rule optimization",
        "Built AI chatbot for merchants using Redis VectorDB with RAG (GPT-4), cutting query resolution time from 2hrs to 15 mins",
        "Architected distributed transaction systems using ShedLock & RBAC, reducing concurrency issues by 40%",
        "Won RFPs by designing technical proposals, resource plans, and budgets for $5M+ projects",
        "Mentored 20% of the team into SMEs, improving retention by 25%"
      ],
      technologies: ["Angular", "React", "Java", "Spring", "AWS", "Redis", "NodeJs", "DynamoDB", "Drools"]
    },
    {
      company: "Amazon",
      position: "Software Development Manager L6 / Leader",
      duration: "Oct 2022 – Oct 2023",
      location: "Pune, India",
      domain: "Data Storage, Identity Management",
      teamSize: 15,
      achievements: [
        "Led strategic direction for Data Storage Service and Identity Management SaaS product",
        "Managed high TPS Data Storage Service with 15 min consistency SLA and 10 min caching TTL",
        "Spearheaded Identity Management SaaS with document verification, facial recognition, and third-party checks",
        "Achieved 12% reduction in overall ticket count through operational excellence initiatives",
        "Saved $350k annually by strategically reducing technical debt",
        "Enhanced developer productivity by 30% through automation workflows"
      ],
      technologies: ["Angular", "React", "Java", "Spring", "AWS", "Redis", "NodeJs", "Spark", "ML", "Python"]
    },
    {
      company: "Delhivery",
      position: "Senior Engineering Manager",
      duration: "April 2022 – Sept 2022",
      location: "Bengaluru / Pune, India",
      domain: "Logistics & Supply Chain",
      teamSize: 25,
      achievements: [
        "Implemented CQRS and Event Sourcing Microservices architecture using ScyllaDB and Elasticsearch",
        "Led technical architecture for multi-tenancy, data governance, and developer platform ecosystem",
        "Used TensorFlow for data scraping, extraction, and AI-driven logistics optimization",
        "Developed Logistics Platform (PaaS) and Logistics Solutions (SaaS) for different customer segments",
        "Architected headless APIs for custom logistics application development"
      ],
      technologies: ["AWS", "Angular", "React", "Java", "ScyllaDB", "Redis", "Kafka", "Elasticsearch", "TensorFlow", "Kubernetes"]
    },
    {
      company: "Western Union",
      position: "Associate Manager / Engineering Manager",
      duration: "March 2018 – April 2022",
      location: "Pune, India",
      domain: "Financial Services",
      teamSize: 35,
      achievements: [
        "Delivered $95M+ in net revenue with bank transactions growing from 10.3M to 12.7M",
        "Achieved 80% increase in wallet transactions (174K to 873K)",
        "100% increase in Direct to Card transactions (57 to 54,439)",
        "Enabled 650+ wallet corridors, 800+ bank corridors, and 450+ D2C corridors",
        "Reduced homepage load time by 75% through optimization",
        "Implemented GDPR, FMA, KYC, ADA, DODD FRANK compliance features",
        "Led organization-wide web release for Russia deliverables"
      ],
      technologies: ["AWS", "Angular", "React", "Java", "Spring", "Redis", "OAuth2", "Snowflake", "AEM"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A track record of delivering high-impact solutions and leading engineering excellence 
              across Fortune 500 companies and innovative startups.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-20 w-full">
                    <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 border-l-4 border-l-primary">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-1">{exp.position}</h3>
                            <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                              <Building className="h-4 w-4" />
                              {exp.company}
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {exp.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {exp.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                Team of {exp.teamSize}
                              </div>
                            </div>
                          </div>
                          <Badge variant="secondary" className="self-start">
                            {exp.domain}
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-6">
                        {/* Key Achievements */}
                        <div>
                          <h4 className="flex items-center gap-2 font-semibold text-foreground mb-3">
                            <TrendingUp className="h-4 w-4 text-primary" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                                <span className="text-primary mt-1.5">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Technologies & Tools</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;