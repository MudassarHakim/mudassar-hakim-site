import { Github, Linkedin, Mail, FileText, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/MudassarHakim",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mudassar-ahamer-hakim-281b8b9/",
      label: "LinkedIn"
    },
    {
      icon: FileText,
      href: "https://medium.com/@mudassar.hakim",
      label: "Medium"
    },
    {
      icon: Mail,
      href: "mailto:mudassar.hakim.jobs@gmail.com",
      label: "Email"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold mb-4 hover:opacity-80 transition-opacity"
            >
              Mudassar Hakim
            </button>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Software Engineering Leader specializing in building scalable solutions, 
              leading high-performing teams, and driving digital transformation across 
              Fortune 500 companies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p>
                <a 
                  href="mailto:mudassar.hakim.jobs@gmail.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  mudassar.hakim.jobs@gmail.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:+919167870011"
                  className="hover:text-primary-foreground transition-colors"
                >
                  +91 9167870011
                </a>
              </p>
              <p>Pune, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} Mudassar Hakim. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-1 text-primary-foreground/80 text-sm">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>using React & TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;