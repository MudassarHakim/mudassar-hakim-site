import { Code, Database, Cloud, Users, Brain, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 95 },
        { name: "Angular", level: 95 },
        { name: "TypeScript/JavaScript", level: 90 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "Responsive Design", level: 88 }
      ]
    },
    {
      icon: Database,
      title: "Backend & Databases",
      skills: [
        { name: "Java/Spring", level: 95 },
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "MySQL/PostgreSQL", level: 90 },
        { name: "MongoDB/DynamoDB", level: 88 }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS (SAA-02 Certified)", level: 95 },
        { name: "Kubernetes", level: 88 },
        { name: "Docker", level: 90 },
        { name: "Jenkins/CI-CD", level: 85 },
        { name: "Terraform", level: 80 }
      ]
    },
    {
      icon: Brain,
      title: "AI/ML & Data",
      skills: [
        { name: "Machine Learning", level: 80 },
        { name: "TensorFlow", level: 75 },
        { name: "Gen AI/GPT Integration", level: 85 },
        { name: "Big Data (Spark/Hadoop)", level: 80 },
        { name: "Data Engineering", level: 82 }
      ]
    },
    {
      icon: Users,
      title: "Leadership & Management",
      skills: [
        { name: "Team Leadership", level: 95 },
        { name: "Agile/Scrum", level: 92 },
        { name: "Project Management", level: 90 },
        { name: "Mentoring & Coaching", level: 88 },
        { name: "Strategic Planning", level: 85 }
      ]
    },
    {
      icon: Settings,
      title: "Architecture & Design",
      skills: [
        { name: "Microservices", level: 92 },
        { name: "System Architecture", level: 90 },
        { name: "API Design", level: 88 },
        { name: "CQRS/Event Sourcing", level: 85 },
        { name: "Enterprise Architecture", level: 87 }
      ]
    }
  ];

  const certifications = [
    "AWS Solutions Architect Associate (SAA-02)",
    "Project Management Professional (PMP®)",
    "Certified SAFe® 4 Agilist",
    "Scrum Master Certified (SMC™)",
    "Gremlin Certified Chaos Engineering Practitioner",
    "Oracle Certified Java Programmer (OCAJP7)",
    "Executive Diploma in ML & AI (IIIT-B)"
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive technology stack combined with leadership capabilities to drive 
              innovation and deliver exceptional results.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="animate-fade-in">
            <Card className="shadow-elegant bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold text-foreground">
                  Professional Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Technical Proficiencies */}
          <div className="mt-12 animate-fade-in">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Redis', 'Kafka', 'Elasticsearch', 'GraphQL', 'OAuth2', 'Istio', 
                'Snowflake', 'ScyllaDB', 'Cassandra', 'ActiveMQ', 'Apache Camel',
                'Jasmine', 'Karma', 'Mockito', 'JUnit', 'Sonar', 'Maven',
                'Hibernate', 'Spring Security', 'Microservices', 'Event Sourcing',
                'CQRS', 'Domain Driven Design', 'Clean Architecture'
              ].map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm py-1 px-3 hover:bg-primary/10 transition-colors">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;