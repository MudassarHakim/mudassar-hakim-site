import { ExternalLink, Github, Play, FileText, Brain, TrendingUp, Code, Database, MessageSquare, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Shop Assist ChatBot",
      description: "An intelligent e-commerce chatbot that helps customers with product recommendations, order tracking, and customer service. Built with advanced NLP capabilities and integrated with multiple data sources.",
      tech: ["Python", "NLP", "Machine Learning", "TensorFlow", "API Integration"],
      category: "AI/ML",
      icon: MessageSquare,
      github: "https://github.com/MudassarHakim/ShopAssistChatBot",
      highlights: [
        "Natural Language Processing for customer queries",
        "Product recommendation engine",
        "Real-time order tracking integration",
        "Multi-platform deployment capability"
      ]
    },
    {
      title: "IIITB Melanoma Detection System",
      description: "A deep learning-based medical image analysis system for automated melanoma detection from dermoscopic images. Developed as part of IIIT-B Machine Learning program with high accuracy classification.",
      tech: ["Deep Learning", "CNN", "Computer Vision", "Python", "TensorFlow", "Medical Imaging"],
      category: "Healthcare AI",
      icon: Brain,
      github: "https://github.com/MudassarHakim/IIITB-Melanoma-assignment",
      highlights: [
        "CNN-based image classification model",
        "Medical-grade accuracy for skin lesion analysis",
        "Data augmentation and preprocessing pipeline",
        "Model optimization for clinical deployment"
      ]
    },
    {
      title: "Bike Sharing Demand Prediction",
      description: "Linear regression case study analyzing bike-sharing demand patterns using statistical modeling. Comprehensive analysis of weather, seasonal, and temporal factors affecting bike rental patterns.",
      tech: ["Linear Regression", "Statistical Analysis", "Python", "Pandas", "Scikit-learn", "Data Visualization"],
      category: "Data Science",
      icon: TrendingUp,
      github: "https://github.com/MudassarHakim/IIITB-LinearRegression-Bike-CaseStudy",
      highlights: [
        "Multi-variable linear regression modeling",
        "Feature engineering and selection",
        "Statistical significance testing",
        "Business insights and recommendations"
      ]
    },
    {
      title: "Multi-Agent LLM Discussion System",
      description: "An advanced multi-agent system facilitating intelligent discussions between multiple AI agents with different roles and perspectives. Features dynamic conversation flow and collaborative problem-solving capabilities.",
      tech: ["LangChain", "Multi-Agent Systems", "LLM", "Python", "AI Orchestration", "Conversation Management"],
      category: "AI/ML",
      icon: MessageSquare,
      github: "https://github.com/MudassarHakim/Multi-Agent-LLM-Discussion",
      highlights: [
        "Multi-agent conversation orchestration",
        "Role-based AI agent specialization", 
        "Dynamic discussion flow management",
        "Collaborative AI problem-solving framework"
      ]
    }
  ];

  const streamlitApps = [
    {
      title: "Multi-Agent AI System",
      description: "A sophisticated multi-agent AI system built with LangChain, Groq, and CrewAI for collaborative problem-solving and intelligent task orchestration across multiple specialized agents.",
      tech: ["LangChain", "Groq", "CrewAI", "Multi-Agent AI", "Python"],
      url: "https://multi-agent-langchain-groq-crewai-mudassar.lovable.app",
      featured: true,
      views: "15 views"
    },
    {
      title: "PayFlow Unified Kit",
      description: "A comprehensive payment processing solution that unifies multiple payment methods and providers into a single, streamlined interface for seamless transaction management.",
      tech: ["Payment Processing", "API Integration", "React", "TypeScript"],
      url: "https://payflow-unified-kit-mudassar-hakim.netlify.app/",
      views: "12 views"
    },
    {
      title: "STAR Answer Formatter & Evaluator",
      description: "An AI-powered tool that helps professionals format and evaluate behavioral interview answers using the STAR (Situation, Task, Action, Result) method.",
      tech: ["Streamlit", "NLP", "GPT Integration", "Python"],
      url: "https://behavioral-interview-answer-mudasarhakim.streamlit.app/",
      views: "9 views"
    },
    {
      title: "Gemini ATS Resume Optimizer",
      description: "Resume optimization tool powered by Google's Gemini AI to improve ATS (Applicant Tracking System) compatibility and increase job application success rates.",
      tech: ["Streamlit", "Gemini AI", "Resume Analysis", "Python"],
      url: "https://resume-markdown-formatter-mudasar-hakim.streamlit.app/",
      views: "7 views"
    },
    {
      title: "CalmBot+",
      description: "A mental wellness chatbot designed to provide emotional support and relaxation techniques using AI-powered conversational interfaces.",
      tech: ["Streamlit", "AI Chatbot", "Mental Health", "Python"],
      url: "https://calmbot-app.streamlit.app/",
      views: "4 views"
    },
    {
      title: "Arwa Lumiere",
      description: "An elegant web application showcasing creative design and modern web technologies.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      url: "https://arwa-lumiere.lovable.app/",
      views: "3 views"
    }
  ];

  const mediumArticles = [
    {
      title: "Mastering Prompt Engineering",
      subtitle: "A Guide to System, User, and Assistant Roles in OpenAI API",
      description: "Comprehensive guide on prompt engineering techniques, covering system, user, and assistant roles in OpenAI API for optimal AI interactions.",
      readTime: "5 min read",
      date: "Jun 8, 2025",
      url: "https://medium.com/@mudassar.hakim/mastering-prompt-engineering-a-guide-to-system-user-and-assistant-roles-in-openai-api-28fe5fbf1d81",
      tags: ["AI", "Prompt Engineering", "OpenAI", "GPT"]
    },
    {
      title: "Building a Multi-Agent AI System",
      subtitle: "A Complete Guide to Secure Frontend-Backend Integration",
      description: "Comprehensive tutorial on building secure multi-agent AI systems with proper frontend-backend integration patterns, security best practices, and scalable architecture design.",
      readTime: "8 min read",
      date: "Nov 15, 2024",
      url: "https://medium.com/@mudassar.hakim/building-a-multi-agent-ai-system-a-complete-guide-to-secure-frontend-backend-integration-with-26a5a3aa0236",
      tags: ["Multi-Agent AI", "System Architecture", "Security", "Integration"]
    },
    {
      title: "Why Your \"Nano Banana\" is Awesome, But Stable Diffusion is a Whole Different Beast",
      subtitle: "Understanding the Magic Behind Stable Diffusion's Image Generation",
      description: "Deep dive into Stable Diffusion's architecture, comparing its diffusion-based approach with other image generation models and exploring the core components that make it tick.",
      readTime: "8 min read",
      date: "Sep 14, 2025",
      url: "https://medium.com/@mudassar.hakim/why-your-nano-banana-is-awesome-but-stable-diffusion-is-a-whole-different-beast-69ef1aef4387",
      tags: ["AI", "Stable Diffusion", "Image Generation", "Deep Learning"]
    },
    {
      title: "Mastering System Design",
      subtitle: "10 Key Pillars Every Engineer Should Know",
      description: "Essential system design principles and architectural patterns that every software engineer should master for building scalable applications.",
      readTime: "3 min read",
      date: "May 20, 2025",
      url: "https://medium.com/@mudassar.hakim/mastering-system-design-10-key-pillars-every-engineer-should-know-f647f04e3243",
      tags: ["System Design", "Architecture", "Scalability", "Engineering"]
    },
    {
      title: "Prompting, Fine-tuning, or RAG?",
      subtitle: "A Practical Guide to Smarter AI Customization",
      description: "Comprehensive guide to choosing the right AI customization approach for your specific use case, comparing prompting, fine-tuning, and RAG strategies.",
      readTime: "5 min read", 
      date: "Dec 12, 2024",
      url: "https://medium.com/@mudassar.hakim/prompting-fine-tuning-or-rag-a-practical-guide-to-smarter-ai-customization-f1ed479534f3",
      tags: ["AI", "RAG", "Fine-tuning", "Prompting"]
    },
    {
      title: "Building a Movie Recommendation System with Content-Based Filtering",
      subtitle: "Step-by-Step Guide to Content Filtering Implementation",
      description: "Detailed walkthrough of building a content-based movie recommendation system using Python, covering data processing, feature extraction, and similarity computation.",
      readTime: "5 min read",
      date: "Oct 13, 2025",
      url: "https://medium.com/@mudassar.hakim/movie-recommendation-system-content-filtering-10bf2d09459e",
      tags: ["Machine Learning", "Recommendation Systems", "Python", "Content Filtering"]
    }
  ];

  const stackOverflowPosts = [
    {
      title: "Spring Security Method Security Annotation @Secured is Not Working",
      description: "Comprehensive solution for configuring Spring Security method-level security with @Secured annotations",
      url: "https://stackoverflow.com/questions/31186826/spring-security-method-security-annotation-secured-is-not-working-java-con/31187395#31187395",
      tags: ["Spring Security", "Java", "Configuration"]
    },
    {
      title: "How to View Memory Usage in Eclipse (Beginner)",
      description: "Step-by-step guide to monitor and analyze memory usage in Eclipse IDE for better development experience",
      url: "https://stackoverflow.com/questions/31254187/how-to-view-memory-usage-in-eclipse-beginner/31255323#31255323",
      tags: ["Eclipse", "Memory Management", "IDE"]
    },
    {
      title: "Component Scan Not Scanning Sub Packages",
      description: "Solution for Spring Framework component scanning issues when dealing with nested package structures",
      url: "https://stackoverflow.com/questions/37915751/component-scan-not-scanning-sub-packages/37916238#37916238",
      tags: ["Spring Framework", "Component Scan", "Package Structure"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects & Publications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects, research work, and thought leadership in software engineering, 
            AI/ML, and system design
          </p>
        </div>

        {/* GitHub Projects */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Github className="h-6 w-6" />
              Open Source Projects
            </h3>
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/MudassarHakim?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View More
              </a>
            </Button>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.highlights.map((highlight, hlIndex) => (
                          <li key={hlIndex} className="flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Streamlit Applications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Play className="h-6 w-6" />
            Live Applications
          </h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {streamlitApps.map((app, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {app.title}
                      {app.featured && (
                        <Badge className="ml-2 bg-gradient-to-r from-primary to-primary-dark">
                          Featured
                        </Badge>
                      )}
                    </CardTitle>
                    <span className="text-xs text-muted-foreground">{app.views}</span>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {app.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {app.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="default" size="sm" asChild className="w-full">
                      <a href={app.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Try Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Medium Articles */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <FileText className="h-6 w-6" />
              Technical Publications
            </h3>
            <Button variant="outline" size="sm" asChild>
              <a href="https://medium.com/@mudassar.hakim" target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4 mr-2" />
                View More
              </a>
            </Button>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {mediumArticles.map((article, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="space-y-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="font-medium text-foreground/80">
                      {article.subtitle}
                    </CardDescription>
                    <CardDescription className="text-sm leading-relaxed">
                      {article.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {article.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{article.readTime}</span>
                      <span>{article.date}</span>
                    </div>
                    
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href={article.url} target="_blank" rel="noopener noreferrer">
                        <FileText className="h-4 w-4 mr-2" />
                        Read Article
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* StackOverflow Contributions */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <HelpCircle className="h-6 w-6" />
            StackOverflow Contributions
          </h3>
          <div className="mb-6">
            <Card className="bg-gradient-to-r from-orange-500/5 to-orange-600/5 border-orange-500/20">
              <CardContent className="py-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-orange-500/10">
                    <HelpCircle className="h-8 w-8 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Active Community Contributor</h4>
                    <p className="text-muted-foreground">Helping developers solve complex technical challenges</p>
                  </div>
                  <div className="ml-auto">
                    <Button variant="outline" asChild>
                      <a href="https://stackoverflow.com/users/1685051/mudassar" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Profile
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {stackOverflowPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-orange-500/20">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-orange-500 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs border-orange-500/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="outline" size="sm" asChild className="w-full hover:bg-orange-500/5">
                      <a href={post.url} target="_blank" rel="noopener noreferrer">
                        <HelpCircle className="h-4 w-4 mr-2" />
                        View Answer
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-primary-dark/5 border-primary/20">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always excited to work on innovative projects that combine cutting-edge technology 
                with real-world impact. Let's discuss how we can create something amazing together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild>
                  <a href="#contact">
                    Get In Touch
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/MudassarHakim" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View All Projects
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;