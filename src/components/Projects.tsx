import { useState, useMemo, useCallback, useEffect } from 'react';
import { ExternalLink, Github, FileText, Brain, TrendingUp, MessageSquare, Filter, ChevronLeft, ChevronRight, Layout, Layers, Cpu, Database } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Projects Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: false,
    slidesToScroll: 1
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((api: any) => {
    setSelectedIndex(api.selectedScrollSnap());
    setPrevBtnEnabled(api.canScrollPrev());
    setNextBtnEnabled(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const githubProjects = [
    {
      title: "Shop Assist ChatBot",
      description: "An intelligent e-commerce chatbot that helps customers with product recommendations, order tracking, and customer service.",
      tech: ["Python", "NLP", "Machine Learning", "TensorFlow"],
      category: "NLP",
      icon: MessageSquare,
      link: "https://github.com/MudassarHakim/ShopAssistChatBot",
      highlights: ["NLP for queries", "Rec engine", "Order tracking"]
    },
    {
      title: "DocuVision RAG",
      description: "End-to-end RAG system for querying visually rich PDFs, images, and text using Vision Language Models.",
      tech: ["RAG", "Python", "FastAPI", "Vision LLM"],
      category: "RAG",
      icon: Brain,
      link: "https://rag-qa-project-t7pa.onrender.com/",
      highlights: ["Visual extraction", "Context-aware QA", "Complex docs"]
    },
    {
      title: "Advance RAG Strategy",
      description: "Advanced RAG featuring Re-Ranking, Fusion Retrieval, RRF, and HyDe techniques for superior accuracy.",
      tech: ["RAG", "RRF", "HyDe", "Re-Ranking"],
      category: "RAG",
      icon: Layers,
      link: "https://github.com/MudassarHakim/Advance-RAG-ReRanking-FusionRetreival-RRF-HyDe",
      highlights: ["Fusion (RRF)", "HyDe implementation", "Re-ranking"]
    },
    {
      title: "Chonkie Chunkers",
      description: "Tutorials for using Chonkie chunkers in RAG pipelines for optimal context management.",
      tech: ["NLP", "Chunking", "Chonkie", "RAG"],
      category: "NLP",
      icon: Layout,
      link: "https://github.com/MudassarHakim/chonkie-chunkers-tutorials",
      highlights: ["Context optimization", "Chunking strategies", "Tutorials"]
    },
    {
      title: "Awesome Prompt Engineering",
      description: "Curated collection of best practices for effective prompt engineering with LLMs.",
      tech: ["Prompting", "LLM", "OpenAI"],
      category: "LLM",
      icon: Brain,
      link: "https://github.com/MudassarHakim/Awesome-Prompt-Engineering",
      highlights: ["System roles", "Zero/Few-shot", "Chain-of-thought"]
    },
    {
      title: "SmolAgents Examples",
      description: "Examples of building lightweight AI agents using SmolAgents, focusing on modularity.",
      tech: ["SmolAgents", "AI Agents", "Python"],
      category: "Agents",
      icon: MessageSquare,
      link: "https://github.com/MudassarHakim/smolagents_examples",
      highlights: ["Lightweight agents", "HF integration", "Modular design"]
    },
    {
      title: "LlamaIndex Tutorials",
      description: "Deep dive into LlamaIndex for building powerful RAG applications and data systems.",
      tech: ["LlamaIndex", "RAG", "Data Indexing"],
      category: "RAG",
      icon: Brain,
      link: "https://github.com/MudassarHakim/llama-index-tutorials",
      highlights: ["Vector storage", "Data connectors", "Query engine"]
    },
    {
      title: "SpringAI Ollama Integration",
      description: "Java-based AI applications using Spring AI to integrate with Ollama and OpenAI.",
      tech: ["Spring AI", "Java", "Ollama", "OpenAI"],
      category: "Java",
      icon: Cpu,
      link: "https://github.com/MudassarHakim/SpringAI_Ollama_OpenAI",
      highlights: ["Java AI ecosystem", "Local LLMs", "Spring Boot"]
    },
    {
      title: "Document Parsers RAG",
      description: "specialized system for extracting structured data from diverse file formats for RAG.",
      tech: ["Parsing", "RAG", "Python", "PDF"],
      category: "RAG",
      icon: FileText,
      link: "https://github.com/MudassarHakim/document-parsers-rag",
      highlights: ["High-perf parsing", "Extraction", "OCR support"]
    },
    {
      title: "Azure AI Agents Lab",
      description: "Microsoft Azure AI Agents hands-on laboratory for building enterprise intelligent assistants.",
      tech: ["Azure AI", "Agents", "Microsoft"],
      category: "Azure",
      icon: Brain,
      link: "https://github.com/MudassarHakim/Microsoft-Azure-AI-Agents-Hands-on-Lab",
      highlights: ["Enterprise agents", "Azure Foundry", "Scalability"]
    },
    {
      title: "Semantic Kernel Fundamentals",
      description: "Mastering Azure AI Foundry and Semantic Kernel for AI-driven development.",
      tech: ["Semantic Kernel", "Azure", "AI Foundry"],
      category: "Azure",
      icon: Cpu,
      link: "https://github.com/MudassarHakim/AI-Developer---Azure-AI-Foundry-and-Semantic-Kernel-Fundamentals",
      highlights: ["Kernel orchestration", "Integration", "Modular functions"]
    },
    {
      title: "Common Debit Card Service",
      description: "Microservices system for managing debit card services with high security.",
      tech: ["Java", "Spring Boot", "DevOps"],
      category: "Java",
      icon: TrendingUp,
      link: "https://github.com/MudassarHakim/common-debit-card",
      highlights: ["Microservices", "Secure handling", "API design"]
    },
    {
      title: "Simple RAG LangChain",
      description: "A straightforward implementation of RAG using the LangChain framework.",
      tech: ["LangChain", "RAG", "Vector Search"],
      category: "RAG",
      icon: MessageSquare,
      link: "https://github.com/MudassarHakim/simple-rag-lagchain",
      highlights: ["LangChain core", "Efficient retrieval", "QA systems"]
    },
    {
      title: "Multi AI Agent (CrewAI)",
      description: "Complex multi-agent system built with CrewAI, LangChain, and Groq.",
      tech: ["CrewAI", "LangChain", "Multi-Agent"],
      category: "Agents",
      icon: Layers,
      link: "https://github.com/MudassarHakim/Multi_AI_Agent_using_LangChain_Groq_CrewAI",
      highlights: ["Collaboration", "Parallel tasks", "Groq speed"]
    },
    {
      title: "ALS Recommendation System",
      description: "Predictive model for product recommendations using Alternating Least Squares (ALS).",
      tech: ["PySpark", "ALS", "Matrix Factor"],
      category: "Data Science",
      icon: TrendingUp,
      link: "https://github.com/MudassarHakim/ALS_Alternating_Least_Squares",
      highlights: ["Big data ML", "Matrix factorization", "Accuracy"]
    },
    {
      title: "Collaborative Filtering ML",
      description: "Machine learning module exploring diverse collaborative filtering techniques.",
      tech: ["ML", "Python", "Recommender"],
      category: "Data Science",
      icon: Database,
      link: "https://github.com/MudassarHakim/Collaborative_Filtering",
      highlights: ["User-item interaction", "Similarity metrics", "Personalization"]
    },
    {
      title: "Fine-Tuning with QLoRA",
      description: "Fine-tuning Large Language Models using QLoRA techniques for domain adaptation.",
      tech: ["Fine-tuning", "QLoRA", "PyTorch"],
      category: "LLM",
      icon: Cpu,
      link: "https://github.com/MudassarHakim/Fine-Tuning-QLoRA",
      highlights: ["Low-rank adaptation", "Quantization", "Efficiency"]
    },
    {
      title: "n8n Gmail AI Agent",
      description: "Automation workflow with n8n using AI agents to manage and respond to Gmail.",
      tech: ["n8n", "AI Agent", "Workflow"],
      category: "Automation",
      icon: MessageSquare,
      link: "https://github.com/MudassarHakim/N8N_GmailAutoEmailAIAgent",
      highlights: ["Email triage", "n8n orchestration", "AI replies"]
    },
    {
      title: "Jewellery E-commerce Site",
      description: "Full-featured responsive e-commerce platform for jewellery retailers.",
      tech: ["React", "JavaScript", "Frontend"],
      category: "Full Stack",
      icon: Layout,
      link: "https://github.com/MudassarHakim/jewellery_site",
      highlights: ["Responsive UI", "Product management", "Cart system"]
    },
    {
      title: "Melanoma Detection",
      description: "Deep learning system for automated detection of melanoma from medical images.",
      tech: ["AI", "CNN", "Vision"],
      category: "Computer Vision",
      icon: Brain,
      link: "https://github.com/MudassarHakim/IIITB-Melanoma-assignment",
      highlights: ["Medical analysis", "CNN architecture", "Automated"]
    },
    {
      title: "PayFlow Unified Kit",
      description: "Payment processing solution that unifies multiple payment methods into one.",
      tech: ["React", "TypeScript", "Fintech"],
      category: "Full Stack",
      icon: TrendingUp,
      link: "https://payflow-unified-kit-mudassar-hakim.netlify.app/",
      highlights: ["Unified integration", "Status tracking", "Scalable"]
    },
    {
      title: "GitHub Copilot Intro",
      description: "Practical exercises to boost productivity using GitHub Copilot and AI coding tools.",
      tech: ["Copilot", "AI Tools", "DX"],
      category: "Tools",
      icon: Github,
      link: "https://github.com/MudassarHakim/skills-getting-started-with-github-copilot",
      highlights: ["Productivity", "AI-assisted coding", "Prompting"]
    },
    {
      title: "Spring AI Demo",
      description: "Exploring the capabilities of Spring AI with various LLM providers and data sources.",
      tech: ["Spring AI", "Java", "LLM"],
      category: "Java",
      icon: Cpu,
      link: "https://github.com/MudassarHakim/Spring_AI_Demo",
      highlights: ["Provider integration", "Vector DB", "Java AI"]
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
      tags: ["AI", "Prompting", "OpenAI"]
    },
    {
      title: "Why Re-Rankers Decide RAG Quality",
      subtitle: "Choosing Between Open-Source, Cohere, and Voyage",
      description: "Exploring the critical role of re-rankers in RAG and comparing top industry solutions.",
      readTime: "7 min read",
      date: "Dec 12, 2025",
      url: "https://medium.com/@mudassar.hakim/why-re-rankers-decide-rag-quality-choosing-between-open-source-cohere-and-voyage-1536fe4ca808",
      tags: ["RAG", "Re-Ranking", "AI"]
    },
    {
      title: "Inside the RAG Retrieval Pipeline",
      subtitle: "Bi-Encoders, Cross-Encoders, and Two-Stage Retrieval",
      description: "Deep dive into the architecture of modern retrieval pipelines for LLM applications.",
      readTime: "9 min read",
      date: "Dec 10, 2025",
      url: "https://medium.com/@mudassar.hakim/inside-the-rag-retrieval-pipeline-bi-encoders-cross-encoders-re-rankers-two-stage-retrieval-c391bea7eae4",
      tags: ["RAG", "Architecture", "NLP"]
    },
    {
      title: "Designing Retrieval in RAG",
      subtitle: "Dense, Sparse, and the RRF Merge Layer",
      description: "A technical guide to implementing hybrid search with Reciprocal Rank Fusion.",
      readTime: "8 min read",
      date: "Dec 5, 2025",
      url: "https://medium.com/@mudassar.hakim/designing-retrieval-in-rag-dense-sparse-and-the-rrf-merge-layer-bc176207de50",
      tags: ["RAG", "Search", "Hybrid"]
    },
    {
      title: "Retrieval Is the Bottleneck",
      subtitle: "HyDE, Query Expansion, and Multi-Query RAG",
      description: "Explaining production techniques to solve retrieval issues in RAG systems.",
      readTime: "10 min read",
      date: "Nov 28, 2025",
      url: "https://medium.com/@mudassar.hakim/retrieval-is-the-bottleneck-hyde-query-expansion-and-multi-query-rag-explained-for-production-c1842bed7f8a",
      tags: ["RAG", "Production", "LLM"]
    },
    {
      title: "Late Chunking in RAG",
      subtitle: "Stop Cutting Text — Start Cutting Meaning",
      description: "Introduction to late chunking techniques for maintaining semantic context in RAG.",
      readTime: "6 min read",
      date: "Nov 20, 2025",
      url: "https://medium.com/@mudassar.hakim/late-chunking-in-rag-stop-cutting-text-start-cutting-meaning-ad1f859b4473",
      tags: ["RAG", "Context", "NLP"]
    },
    {
      title: "Decoding the RAG Paper",
      subtitle: "Why Hybrid Memory Matters for Modern NLP",
      description: "A fundamental review of the original RAG paper and its impact on AI systems.",
      readTime: "8 min read",
      date: "Nov 12, 2025",
      url: "https://medium.com/@mudassar.hakim/decoding-the-rag-paper-why-hybrid-memory-matters-for-modern-nlp-systems-e013aba94e49",
      tags: ["RAG", "Research", "NLP"]
    },
    {
      title: "Machine Learning Foundations",
      subtitle: "Random Variables and Probability Explained",
      description: "A simplified guide to the mathematical foundations of machine learning.",
      readTime: "12 min read",
      date: "Oct 25, 2025",
      url: "https://medium.com/@mudassar.hakim/a-simplified-foundation-for-machine-learning-understanding-random-variables-and-probability-b5b7eee027e0",
      tags: ["ML", "Math", "Foundations"]
    },
    {
      title: "Building a Multi-Agent AI System",
      subtitle: "Secure Frontend-Backend Integration",
      description: "Tutorial on building secure multi-agent AI systems with proper integration patterns.",
      readTime: "8 min read",
      date: "Nov 15, 2024",
      url: "https://medium.com/@mudassar.hakim/building-a-multi-agent-ai-system-a-complete-guide-to-secure-frontend-backend-integration-with-26a5a3aa0236",
      tags: ["Multi-Agent AI", "Architecture", "Security"]
    },
    {
      title: "Stable Diffusion Explained",
      subtitle: "The Magic Behind Image Generation",
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

  const categories = useMemo(() => {
    const cats = new Set(githubProjects.map(p => p.category));
    return ['All', ...Array.from(cats)].sort();
  }, [githubProjects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return githubProjects;
    return githubProjects.filter(p => p.category === activeFilter);
  }, [activeFilter, githubProjects]);

  const pairedProjects = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < filteredProjects.length; i += 2) {
      pairs.push(filteredProjects.slice(i, i + 2));
    }
    return pairs;
  }, [filteredProjects]);

  const pairedArticles = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < mediumArticles.length; i += 2) {
      pairs.push(mediumArticles.slice(i, i + 2));
    }
    return pairs;
  }, [mediumArticles]);

  // Publications Carousel
  const [pubEmblaRef, pubEmblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: false,
    slidesToScroll: 1
  });

  const [pubPrevBtnEnabled, setPubPrevBtnEnabled] = useState(false);
  const [pubNextBtnEnabled, setPubNextBtnEnabled] = useState(false);
  const [pubSelectedIndex, setPubSelectedIndex] = useState(0);

  const onPubSelect = useCallback((api: any) => {
    setPubSelectedIndex(api.selectedScrollSnap());
    setPubPrevBtnEnabled(api.canScrollPrev());
    setPubNextBtnEnabled(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!pubEmblaApi) return;
    onPubSelect(pubEmblaApi);
    pubEmblaApi.on('select', onPubSelect);
    pubEmblaApi.on('reInit', onPubSelect);
  }, [pubEmblaApi, onPubSelect]);

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
                onClick={() => {
                  setActiveFilter(category);
                  emblaApi?.scrollTo(0);
                }}
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

        {/* Project Carousel Wrapper */}
        <div className="relative mb-24 px-4 sm:px-10">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {pairedProjects.map((pair, slideIndex) => (
                <div key={slideIndex} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4">
                  <div className="flex flex-col gap-6">
                    {pair.map((project, itemIndex) => (
                      <Card key={itemIndex} className="group hover:shadow-xl transition-all duration-500 border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden flex flex-col min-h-[380px]">
                        <div className="relative h-28 overflow-hidden bg-muted flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                          <div className="absolute inset-0 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110">
                            <project.icon className="h-10 w-10 text-primary/20 group-hover:text-primary/40" />
                          </div>
                        </div>
                        <CardHeader className="p-4 flex-shrink-0">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-base group-hover:text-primary transition-colors duration-300 line-clamp-1">
                              {project.title}
                            </CardTitle>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/10 hover:text-primary transition-colors" asChild>
                              <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3.5 w-3.5" />
                              </a>
                            </Button>
                          </div>
                          <CardDescription className="text-[11px] line-clamp-2 mt-1 font-medium italic">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 flex-grow flex flex-col justify-between">
                          <div className="space-y-3">
                            <div className="flex flex-wrap gap-1">
                              {project.tech.map((t, i) => (
                                <Badge key={i} variant="outline" className="text-[8px] px-1 py-0 uppercase tracking-wider font-bold border-primary/20 bg-primary/5 text-primary">
                                  {t}
                                </Badge>
                              ))}
                            </div>
                            <div>
                              <h4 className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Highlights</h4>
                              <ul className="text-[9px] space-y-0.5 text-muted-foreground">
                                {project.highlights.map((h, i) => (
                                  <li key={i} className="flex items-start gap-1.5 line-clamp-1">
                                    <span className="w-1 h-1 rounded-full bg-primary mt-1 flex-shrink-0" />
                                    {h}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    {/* Placeholder for single item in last pair */}
                    {pair.length === 1 && <div className="min-h-[380px]" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 bg-background/80 backdrop-blur-md shadow-lg border-primary/20 hover:border-primary/50 text-primary transition-all z-10 hidden sm:flex disabled:opacity-30"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 bg-background/80 backdrop-blur-md shadow-lg border-primary/20 hover:border-primary/50 text-primary transition-all z-10 hidden sm:flex disabled:opacity-30"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Carousel Progress */}
          <div className="flex justify-center gap-1.5 mt-8">
            {pairedProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-1 rounded-full transition-all duration-300 ${selectedIndex === i ? 'w-8 bg-primary' : 'w-2 bg-primary/20 hover:bg-primary/40'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Technical Publications Section */}
        <div id="publications" className="mb-24 scroll-mt-24">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">Technical Publications</h3>
            </div>
            <Button variant="outline" size="sm" asChild className="hidden sm:flex">
              <a href="https://medium.com/@mudassar.hakim" target="_blank" rel="noopener noreferrer">
                View All on Medium
              </a>
            </Button>
          </div>

          <div className="relative px-4 sm:px-10">
            <div className="overflow-hidden" ref={pubEmblaRef}>
              <div className="flex">
                {pairedArticles.map((pair, slideIndex) => (
                  <div key={slideIndex} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4">
                    <div className="flex flex-col gap-6">
                      {pair.map((article, index) => (
                        <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden flex flex-col min-h-[280px]">
                          <CardHeader className="flex-1 p-5">
                            <div className="flex items-center justify-between mb-3 text-[10px] text-muted-foreground uppercase tracking-wider font-bold">
                              <span>{article.readTime}</span>
                              <span>{article.date}</span>
                            </div>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2 mb-2 leading-tight">
                              {article.title}
                            </CardTitle>
                            <CardDescription className="text-xs font-semibold text-foreground/80 my-2 line-clamp-1 italic">
                              {article.subtitle}
                            </CardDescription>
                            <CardDescription className="text-[11px] line-clamp-3">
                              {article.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="p-5 pt-0 mt-auto">
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {article.tags.map((tag, i) => (
                                <Badge key={i} variant="secondary" className="text-[9px] px-1.5 py-0 font-medium bg-muted/50 text-muted-foreground">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <Button variant="outline" size="sm" className="w-full text-[10px] font-bold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all h-8" asChild>
                              <a href={article.url} target="_blank" rel="noopener noreferrer">Read Article</a>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                      {pair.length === 1 && <div className="min-h-[280px]" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => pubEmblaApi && pubEmblaApi.scrollPrev()}
              disabled={!pubPrevBtnEnabled}
              className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 bg-background/80 backdrop-blur-md shadow-lg border-primary/20 hover:border-primary/50 text-primary transition-all z-10 hidden sm:flex disabled:opacity-30"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => pubEmblaApi && pubEmblaApi.scrollNext()}
              disabled={!pubNextBtnEnabled}
              className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 bg-background/80 backdrop-blur-md shadow-lg border-primary/20 hover:border-primary/50 text-primary transition-all z-10 hidden sm:flex disabled:opacity-30"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="flex justify-center gap-1.5 mt-8">
              {pairedArticles.map((_, i) => (
                <button
                  key={i}
                  onClick={() => pubEmblaApi?.scrollTo(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${pubSelectedIndex === i ? 'w-8 bg-primary' : 'w-2 bg-primary/20 hover:bg-primary/40'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="scroll-mt-24 text-center">
          <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-3">
            <TrendingUp className="h-8 w-8 text-orange-500" />
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