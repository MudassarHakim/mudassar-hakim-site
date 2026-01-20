import { useState, useMemo } from 'react';
import { ExternalLink, Github, Play, FileText, Brain, TrendingUp, MessageSquare, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const githubProjects = [
    {
      title: "Shop Assist ChatBot",
      description: "An intelligent e-commerce chatbot that helps customers with product recommendations, order tracking, and customer service. Built with advanced NLP capabilities.",
      tech: ["Python", "NLP", "Machine Learning", "TensorFlow"],
      category: "NLP",
      icon: MessageSquare,
      link: "https://github.com/MudassarHakim/ShopAssistChatBot",
      highlights: [
        "Natural Language Processing for customer queries",
        "Product recommendation engine",
        "Real-time order tracking integration"
      ]
    },
    {
      title: "DocuVision RAG",
      description: "End-to-end Retrieval Augmented Generation (RAG) system for querying visually rich PDFs, images, and text using Vision Language Models.",
      tech: ["RAG", "Python", "FastAPI", "Vision LLM"],
      category: "RAG",
      icon: Brain,
      link: "https://rag-qa-project-t7pa.onrender.com/",
      highlights: [
        "AI-driven visual knowledge extraction",
        "Context-aware question answering",
        "Support for complex document structures"
      ]
    },
    {
      title: "Melanoma Detection",
      description: "A deep learning-based medical image analysis system for automated melanoma detection from dermoscopic images. High accuracy classification.",
      tech: ["Deep Learning", "CNN", "Computer Vision", "Python"],
      category: "Computer Vision",
      icon: Brain,
      link: "https://github.com/MudassarHakim/IIITB-Melanoma-assignment",
      highlights: [
        "CNN-based image classification",
        "Medical-grade accuracy analysis",
        "Automated preprocessing pipeline"
      ]
    },
    {
      title: "Bike Sharing Demand",
      description: "Linear regression case study analyzing bike-sharing demand patterns using statistical modeling and comprehensive analysis.",
      tech: ["Python", "Pandas", "Scikit-learn", "Full Stack"],
      category: "Full Stack",
      icon: TrendingUp,
      link: "https://github.com/MudassarHakim/IIITB-LinearRegression-Bike-CaseStudy",
      highlights: [
        "Multi-variable regression modeling",
        "Feature engineering and selection",
        "Predictive demand analysis"
      ]
    },
    {
      title: "Multi-Agent Discussion",
      description: "Advanced multi-agent system facilitating intelligent discussions between AI agents with different roles and perspectives.",
      tech: ["LangChain", "LLM", "Python", "AI Orchestration"],
      category: "LLM",
      icon: MessageSquare,
      link: "https://github.com/MudassarHakim/Multi-Agent-LLM-Discussion",
      highlights: [
        "Role-based AI agent specialization",
        "Dynamic conversation orchestration",
        "Collaborative problem solving"
      ]
    },
    {
      title: "PayFlow Unified Kit",
      description: "A comprehensive payment processing solution that unifies multiple payment methods into a single, streamlined interface.",
      tech: ["React", "TypeScript", "Full Stack", "API"],
      category: "Full Stack",
      icon: TrendingUp,
      link: "https://payflow-unified-kit-mudassar-hakim.netlify.app/",
      highlights: [
        "Unified payment gateway integration",
        "Seamless transaction management",
        "Real-time payment status tracking"
      ]
    }
  ];

  const mediumArticles = [
    {
      title: "Mastering Prompt Engineering",
      subtitle: "A Guide to System, User, and Assistant Roles in OpenAI API",
      description: "Comprehensive guide on prompt engineering techniques for optimal AI interactions.",
      readTime: "5 min read",
      date: "Jun 8, 2025",
      url: "https://medium.com/@mudassar.hakim/mastering-prompt-engineering-a-guide-to-system-user-and-assistant-roles-in-openai-api-28fe5fbf1d81",
      tags: ["AI", "Prompt Engineering", "OpenAI"]
    },
    {
      title: "Building a Multi-Agent AI System",
      subtitle: "A Complete Guide to Secure Frontend-Backend Integration",
      description: "Tutorial on building secure multi-agent AI systems with proper integration patterns.",
      readTime: "8 min read",
      date: "Nov 15, 2024",
      url: "https://medium.com/@mudassar.hakim/building-a-multi-agent-ai-system-a-complete-guide-to-secure-frontend-backend-integration-with-26a5a3aa0236",
      tags: ["Multi-Agent AI", "Architecture", "Security"]
    },
    {
      title: "Why Your \"Nano Banana\" is Awesome, But Stable Diffusion is a Beast",
      subtitle: "Understanding Magic Behind Stable Diffusion's Image Generation",
      description: "Deep dive into Stable Diffusion's architecture and image generation capabilities.",
      readTime: "8 min read",
      date: "Sep 14, 2025",
      url: "https://medium.com/@mudassar.hakim/why-your-nano-banana-is-awesome-but-stable-diffusion-is-a-whole-different-beast-69ef1aef4387",
      tags: ["AI", "Stable Diffusion", "DL"]
    }
  ];

  const stackOverflowPosts = [
    {
      title: "Spring Security Method Security Annotation @Secured is Not Working",
      description: "Comprehensive solution for configuring Spring Security method-level security.",
      url: "https://stackoverflow.com/questions/31186826/spring-security-method-security-annotation-secured-is-not-working-java-con/31187395#31187395",
      tags: ["Spring Security", "Java"]
    },
    {
      title: "How to View Memory Usage in Eclipse (Beginner)",
      description: "Step-by-step guide to monitor and analyze memory usage in Eclipse IDE.",
      url: "https://stackoverflow.com/questions/31254187/how-to-view-memory-usage-in-eclipse-beginner/31255323#31255323",
      tags: ["Eclipse", "IDE", "Memory"]
    }
  ];

  // Dynamically derive categories from projects
  const categories = useMemo(() => {
    const cats = new Set(githubProjects.map(p => p.category));
    return ['All', ...Array.from(cats)].sort();
  }, [githubProjects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return githubProjects;
    return githubProjects.filter(p => p.category === activeFilter);
  }, [activeFilter, githubProjects]);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Github className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Open Source Projects</h2>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            <Filter className="h-4 w-4 text-muted-foreground mr-2 hidden sm:block" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border whitespace-nowrap ${activeFilter === category
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20'
                    : 'bg-background hover:bg-muted text-muted-foreground border-border'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden flex flex-col">
              <div className="relative h-48 overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                <div className="absolute inset-0 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110">
                  <project.icon className="h-20 w-20 text-primary/20 group-hover:text-primary/40" />
                </div>
              </div>
              <CardHeader className="flex-1">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <CardDescription className="text-sm line-clamp-3 mt-2 font-medium">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <Badge key={i} variant="outline" className="text-[10px] uppercase tracking-wider font-bold border-primary/20 bg-primary/5 text-primary">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Highlights</h4>
                    <ul className="text-xs space-y-1 text-muted-foreground">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Publications */}
        <div id="publications" className="mb-24 scroll-mt-24">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              Technical Publications
            </h3>
            <Button variant="outline" size="sm" asChild>
              <a href="https://medium.com/@mudassar.hakim" target="_blank" rel="noopener noreferrer">
                View All on Medium
              </a>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediumArticles.map((article, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden flex flex-col">
                <CardHeader className="flex-1">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-semibold text-foreground/80 my-2">
                    {article.subtitle}
                  </CardDescription>
                  <CardDescription className="text-xs line-clamp-3">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-4 uppercase tracking-wider font-bold">
                    <span>{article.readTime}</span>
                    <span>{article.date}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all" asChild>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read Article</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* StackOverflow Contributions */}
        <div className="scroll-mt-24 text-center">
          <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2">
            <TrendingUp className="h-6 w-6 text-orange-500" />
            StackOverflow Contributions
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {stackOverflowPosts.map((post, index) => (
              <Card key={index} className="group border-border/50 bg-background/50 hover:border-orange-500/30 transition-all duration-300 text-left">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-orange-500 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full text-xs font-bold uppercase tracking-wider hover:bg-orange-500 hover:text-white border-orange-500/20 text-orange-500 transition-all" asChild>
                    <a href={post.url} target="_blank" rel="noopener noreferrer">View Detailed Answer</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12">
            <Button variant="ghost" className="text-muted-foreground hover:text-primary transition-colors" asChild>
              <a href="https://stackoverflow.com/users/1685051/mudassar" target="_blank" rel="noopener noreferrer">
                View my full StackOverflow profile for more help & contributions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;