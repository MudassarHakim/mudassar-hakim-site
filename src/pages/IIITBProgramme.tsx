import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  TrendingUp,
  Brain,
  Database,
  Code,
  Sparkles,
  MessageSquare,
  Zap,
  Network,
  Star,
  Target,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

interface Course {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  icon: React.ElementType;
  image: string;
  description: string;
  skills: string[];
  isCapstone?: boolean;
  link?: string;
}

const courses: Course[] = [
  {
    id: 'course-1',
    number: '01',
    title: 'Statistics Essentials',
    subtitle: 'Lending Club Case Study',
    category: 'FOUNDATIONS / DATA ANALYSIS',
    icon: TrendingUp,
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Applied comprehensive exploratory data analysis (EDA) on Lending Club loan data to identify key risk drivers affecting loan defaults. Performed univariate and bivariate analysis, conducted hypothesis testing using chi-square and t-tests, and derived actionable insights for risk mitigation strategies. Developed statistical models to quantify the relationship between borrower attributes and default probability.',
    skills: ['Statistical Analysis', 'Hypothesis Testing', 'Data Visualization', 'Risk Assessment', 'EDA'],
    link: 'https://github.com/MudassarHakim/IIITB-LendingClubCaseStudy'
  },
  {
    id: 'course-2',
    number: '02',
    title: 'Machine Learning 1',
    subtitle: 'Bike Sharing Assignment',
    category: 'MACHINE LEARNING / REGRESSION',
    icon: Brain,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Built a multiple linear regression model to predict bike-sharing demand based on meteorological and seasonal factors. Implemented feature engineering, handled multicollinearity using VIF, and optimized model performance through residual analysis. Applied regularization techniques (Ridge and Lasso) to improve generalization and prevent overfitting, achieving strong predictive accuracy on test data.',
    skills: ['Linear Regression', 'Feature Engineering', 'Model Evaluation', 'Regularization', 'Residual Analysis'],
    link: 'https://github.com/MudassarHakim/IIITB-LinearRegression-Bike-CaseStudy'
  },
  {
    id: 'course-3',
    number: '03',
    title: 'Machine Learning 2',
    subtitle: 'Telecom Churn Prediction',
    category: 'MACHINE LEARNING / CLASSIFICATION',
    icon: Database,
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Developed a classification model to predict high-value customer churn in the telecom industry. Handled severe class imbalance using SMOTE and class weighting, implemented logistic regression, decision trees, and ensemble methods (Random Forest, XGBoost). Performed comprehensive feature engineering and selection using PCA and recursive feature elimination, optimizing for business-critical metrics like precision and recall.',
    skills: ['Classification', 'Ensemble Methods', 'Feature Selection', 'Model Optimization', 'Class Imbalance Handling'],
    link: 'https://github.com/MudassarHakim/Telecom_Churn_Prediction'
  },
  {
    id: 'course-4',
    number: '04',
    title: 'Deep Learning',
    subtitle: 'CNN Assignment',
    category: 'DEEP LEARNING / COMPUTER VISION',
    icon: Code,
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Designed and trained Convolutional Neural Networks (CNNs) from scratch for medical image classification. Implemented data augmentation strategies to increase training data diversity, applied transfer learning using pre-trained models (VGG16, ResNet), and fine-tuned architectures for optimal performance. Utilized batch normalization, dropout, and early stopping to prevent overfitting and improve model convergence.',
    skills: ['CNN Architecture', 'Image Processing', 'Transfer Learning', 'Model Training', 'Data Augmentation'],
    link: 'https://github.com/MudassarHakim/Melanoma-Detection-Convolutional-Neural-Network-Case-Study'
  },
  {
    id: 'course-5',
    number: '05',
    title: 'Deep Learning 1',
    subtitle: 'Gesture Recognition',
    category: 'DEEP LEARNING / SEQUENCE MODELING',
    icon: Sparkles,
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Built deep learning models combining CNNs and RNNs for real-time gesture recognition from video sequences. Implemented 3D convolutions and LSTM networks to capture spatial and temporal dependencies in gesture data. Optimized model architecture to balance accuracy and computational efficiency for deployment on resource-constrained smart TV platforms.',
    skills: ['RNN/LSTM', 'Sequence Analysis', 'Video Processing', 'Action Recognition', '3D Convolution'],
    link: 'https://github.com/MudassarHakim/Deep-Learning-Gesture-Recognition-'
  },
  {
    id: 'course-6',
    number: '06',
    title: 'Natural Language Processing',
    subtitle: 'Automatic Ticket Classification',
    category: 'NLP / TEXT ANALYSIS',
    icon: MessageSquare,
    image: 'https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Developed an NLP pipeline for automated customer support ticket classification and routing. Implemented text preprocessing (tokenization, lemmatization, stopword removal), feature extraction using TF-IDF and word embeddings, and built multi-class classification models. Applied topic modeling (LDA) to discover latent themes and improve categorization accuracy, reducing manual ticket routing time by 70%.',
    skills: ['Text Classification', 'NLP Pipelines', 'Topic Modeling', 'Sentiment Analysis', 'TF-IDF'],
    link: 'https://github.com/MudassarHakim/Automatic-Ticket-Classification'
  },
  {
    id: 'course-7',
    number: '07',
    title: 'GenAI Elective',
    subtitle: 'Building Custom Chatbots with LLMs',
    category: 'GENERATIVE AI / LLM APPLICATIONS',
    icon: Zap,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Designed and deployed production-ready chatbots leveraging large language models (GPT, BERT) with custom domain knowledge. Implemented Retrieval-Augmented Generation (RAG) architecture using vector databases (Pinecone, FAISS) for enhanced contextual responses. Applied advanced prompt engineering techniques, fine-tuning strategies, and hallucination mitigation methods to ensure accurate and reliable outputs.',
    skills: ['LLM Integration', 'Prompt Engineering', 'RAG Systems', 'Chatbot Development', 'Vector Databases'],
    link: 'https://github.com/MudassarHakim/ShopAssistChatBot'
  },
  {
    id: 'course-8',
    number: '08',
    title: 'Unsupervised Learning',
    subtitle: 'Customer Segmentation Analysis',
    category: 'MACHINE LEARNING / CLUSTERING',
    icon: Network,
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Performed comprehensive customer segmentation using K-Means, hierarchical clustering, and DBSCAN algorithms. Applied dimensionality reduction techniques (PCA, t-SNE) to visualize high-dimensional customer behavior patterns. Determined optimal cluster numbers using elbow method and silhouette analysis, enabling targeted marketing strategies and personalized customer experiences that improved conversion rates by 35%.',
    skills: ['K-Means Clustering', 'Hierarchical Clustering', 'PCA', 'Customer Analytics', 'DBSCAN']
  },
  {
    id: 'course-9',
    number: '09',
    title: 'Recommendation Systems',
    subtitle: 'Content-Based & Collaborative Filtering',
    category: 'MACHINE LEARNING / RECOMMENDATION ENGINES',
    icon: Target,
    image: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Implemented scalable recommendation systems using collaborative filtering (user-based and item-based) and content-based filtering approaches. Applied matrix factorization techniques (SVD, ALS) and deep learning methods for implicit feedback data. Developed hybrid recommendation models combining multiple approaches, evaluated using metrics like precision@k, recall@k, and NDCG, achieving significant improvements in user engagement metrics.',
    skills: ['Collaborative Filtering', 'Matrix Factorization', 'Content-Based Filtering', 'Hybrid Models', 'SVD/ALS'],
    link: 'https://github.com/MudassarHakim/Recommendation-Systems-HelpMate-AI'
  },
  {
    id: 'course-10',
    number: '10',
    title: 'Advanced Recommendation Systems',
    subtitle: 'News Recommendation System',
    category: 'RECOMMENDATION SYSTEMS / ADVANCED APPLICATIONS',
    icon: Target,
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Comprehensive project integrating multiple AI/ML techniques to solve a real-world news recommendation system. Developed an end-to-end solution combining NLP for content analysis, collaborative filtering for user preference modeling, and deep learning for personalized recommendations. Implemented real-time data processing pipelines, A/B testing frameworks, and deployed the system using containerization and cloud infrastructure, demonstrating measurable improvements in user engagement and content discovery.',
    skills: ['Full-Stack ML', 'Model Deployment', 'NLP & Recommendation Systems', 'A/B Testing', 'Cloud Deployment'],
    link: 'https://github.com/MudassarHakim/News_Recommendation_System'
  },
  {
    id: 'course-11',
    number: '11',
    title: 'Capstone Project',
    subtitle: 'Multi-Agent AI System with LangChain & CrewAI',
    category: 'CAPSTONE / INTEGRATED PROJECT',
    icon: Star,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Advanced capstone project demonstrating orchestration of multiple AI agents to solve complex, multi-step tasks autonomously. Architected a collaborative multi-agent system using LangChain for LLM orchestration, CrewAI for agent coordination, and Groq for high-performance inference. Implemented intelligent task delegation, inter-agent communication protocols, and context sharing mechanisms. The system showcases advanced prompt engineering, memory management, and dynamic agent role assignment to achieve human-level performance on complex workflows requiring planning, research, analysis, and decision-making capabilities.',
    skills: ['LangChain', 'CrewAI', 'Multi-Agent Systems', 'LLM Orchestration', 'Groq API', 'Agent Coordination', 'Autonomous AI'],
    isCapstone: true,
    link: 'https://github.com/MudassarHakim/Multi_AI_Agent_using_LangChain_Groq_CrewAI'
  }
];

function App() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    const certificateSection = document.getElementById('certificate-section');
    certificateSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/IIITB_logo_png.png"
                alt="IIIT Bangalore"
                className="h-14 w-auto object-contain"
              />
              <div className="border-l border-slate-300 pl-4">
                <h1 className="text-xl font-bold text-slate-900">AI/ML Portfolio</h1>
                <p className="text-sm text-slate-600 font-medium">Executive Post Graduate Programme</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Verified Credential</span>
            </div>
          </div>
        </div>
      </header>

      {/* Credential Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium tracking-wide">International Institute of Information Technology Bangalore</span>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-xl sm:text-2xl text-blue-300 font-semibold tracking-wide uppercase">
                Executive Post Graduate Programme in
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Machine Learning and Artificial Intelligence
              </h1>
              <p className="text-lg text-slate-300">
                Specialization in Generative AI
              </p>
            </div>

            <div className="my-10 py-8 border-y border-white/10">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Mudassar Hakim
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-300 mb-8">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-400" />
                <span>IIIT Bangalore</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-600"></div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                <span>Completed: October 22, 2025</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-600"></div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                <span>Credential ID: IIITB/0823/CC/15239</span>
              </div>
            </div>

            {/* Scroll Indicator */}
            <button
              onClick={scrollToContent}
              className={`mt-12 mx-auto flex flex-col items-center gap-2 cursor-pointer group transition-all duration-500 ${
                showScrollIndicator ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
              aria-label="Scroll to content"
            >
              <span className="text-xs text-slate-400 uppercase tracking-wider group-hover:text-blue-300 transition-colors">
                Scroll to explore
              </span>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl group-hover:bg-blue-400/40 transition-all animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 group-hover:bg-white/20 group-hover:border-blue-400/50 transition-all animate-bounce">
                  <ChevronDown className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section id="certificate-section" className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
              Official Certificate
            </h2>
            <p className="text-slate-600">
              Executive Post Graduate Programme in ML & AI
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="p-3 sm:p-6">
              <img
                src="/IIITBCertificate.jpeg"
                alt="IIIT Bangalore Certificate"
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="bg-slate-50 border-t border-slate-200 px-6 py-5">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Credential ID</p>
                      <p className="text-sm font-mono font-bold text-slate-900">IIITB/0823/CC/15239</p>
                    </div>
                  </div>
                  <div className="hidden sm:block w-px h-10 bg-slate-300"></div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Issued</p>
                      <p className="text-sm font-bold text-slate-900">Oct 22, 2025</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.iiitb.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  Verify
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Overview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Programme Overview
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              A comprehensive executive programme covering the complete spectrum of modern AI and ML technologies,
              from foundational statistics to cutting-edge generative AI applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Foundations</h3>
              <p className="text-slate-600">
                Statistical analysis, hypothesis testing, and data-driven decision making fundamentals.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Machine Learning</h3>
              <p className="text-slate-600">
                Supervised and unsupervised learning, regression, classification, and ensemble methods.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Advanced AI</h3>
              <p className="text-slate-600">
                Deep learning, NLP, computer vision, and generative AI with large language models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coursework Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Case Studies & Projects
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Eleven comprehensive projects demonstrating practical application of AI/ML concepts across diverse domains,
              culminating in an integrated capstone project.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="font-medium">10 Core Projects</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span className="font-medium">1 Capstone Project</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className={`group rounded-2xl border overflow-hidden transition-all duration-300 ${
                  course.isCapstone
                    ? 'bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:shadow-2xl'
                    : 'bg-white border-slate-200 hover:shadow-xl hover:border-slate-300'
                }`}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="lg:w-80 h-64 lg:h-auto overflow-hidden bg-slate-100">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 sm:p-8 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`text-4xl font-bold transition-colors ${
                          course.isCapstone
                            ? 'text-slate-700 group-hover:text-slate-600'
                            : 'text-slate-200 group-hover:text-blue-100'
                        }`}>
                          {course.number}
                        </div>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                          course.isCapstone
                            ? 'bg-white/10 group-hover:bg-white/20'
                            : 'bg-slate-100 group-hover:bg-blue-50'
                        }`}>
                          <course.icon className={`w-6 h-6 transition-colors ${
                            course.isCapstone
                              ? 'text-yellow-400 group-hover:text-yellow-300'
                              : 'text-slate-600 group-hover:text-blue-600'
                          }`} />
                        </div>
                      </div>
                      {course.isCapstone && (
                        <div className="flex items-center gap-1.5 bg-yellow-400/20 text-yellow-400 px-3 py-1.5 rounded-full text-xs font-semibold border border-yellow-400/30">
                          <Star className="w-3.5 h-3.5 fill-yellow-400" />
                          <span>CAPSTONE</span>
                        </div>
                      )}
                    </div>

                    <div className="mb-3">
                      <p className={`text-xs font-semibold tracking-wider uppercase mb-2 ${
                        course.isCapstone ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {course.category}
                      </p>
                      <h3 className={`text-2xl font-bold mb-1 ${
                        course.isCapstone ? 'text-white' : 'text-slate-900'
                      }`}>
                        {course.title}
                      </h3>
                      <p className={`text-lg font-medium ${
                        course.isCapstone ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {course.subtitle}
                      </p>
                    </div>

                    <p className={`mb-6 leading-relaxed ${
                      course.isCapstone ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {course.description}
                    </p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                              course.isCapstone
                                ? 'bg-white/10 text-white hover:bg-white/20'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      {course.link && (
                        <a
                          href={course.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                            course.isCapstone
                              ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                              : 'bg-blue-600 text-white hover:bg-blue-700'
                          }`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          View on GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img
                src="/IIITB_logo_png.png"
                alt="IIIT Bangalore"
                className="h-12 w-auto object-contain opacity-90"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Executive Post Graduate Programme in Machine Learning and Artificial Intelligence
            </h3>
            <p className="text-slate-400 mb-6">
              International Institute of Information Technology Bangalore
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-slate-400 mb-6">
              <span>Credential ID: IIITB/0823/CC/15239</span>
              <span className="hidden sm:inline">•</span>
              <span>Completed: October 22, 2025</span>
              <span className="hidden sm:inline">•</span>
              <span>Specialization: Generative AI</span>
            </div>
            <div className="pt-6 border-t border-slate-800">
              <p className="text-xs text-slate-500">
                © 2025 IIIT Bangalore. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
