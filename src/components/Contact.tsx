import { Mail, Phone, MapPin, Github, Linkedin, FileText, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mudassar.hakim.jobs@gmail.com",
      href: "mailto:mudassar.hakim.jobs@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9167870011",
      href: "tel:+919167870011"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/MudassarHakim",
      description: "View my code repositories and open source contributions"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mudassar-ahamer-hakim-281b8b9/",
      description: "Connect with me professionally"
    },
    {
      icon: FileText,
      label: "Medium Blog",
      href: "https://medium.com/@mudassar.hakim",
      description: "Read my technical articles and insights"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss new opportunities, collaborate on exciting projects, or simply 
              connect with a fellow technology enthusiast? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6 animate-slide-up">
              {/* Contact Details */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        {info.href !== "#" ? (
                          <a href={info.href} className="font-medium text-foreground hover:text-primary transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <div className="font-medium text-foreground">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl">Connect Online</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <link.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {link.label}
                        </div>
                        <div className="text-sm text-muted-foreground">{link.description}</div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="shadow-elegant bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Currently Open</h3>
                  <p className="text-sm text-muted-foreground">
                    Available for exciting opportunities in engineering leadership, 
                    consulting, or innovative technology projects.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Me</CardTitle>
                  <p className="text-muted-foreground">
                    Ready to discuss opportunities, collaborations, or just connect? 
                    I'd love to hear from you.
                  </p>
                </CardHeader>
                <CardContent className="text-center py-12">
                  <div className="space-y-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Mail className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Let's Start a Conversation
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Click the button below to get in touch. I'll respond to your inquiry as soon as possible.
                    </p>
                    <Button size="lg" asChild className="shadow-elegant">
                      <a href="https://forms.gle/p7yw6Q7AMdGhLuCE6" target="_blank" rel="noopener noreferrer">
                        <Send className="mr-2 h-4 w-4" />
                        Contact Me
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-fade-in">
            <Card className="shadow-elegant bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Build Something Amazing Together?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I'm always excited to discuss new challenges, share insights, and explore 
                  opportunities to create innovative solutions that make a real impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="shadow-elegant">
                    <a href="mailto:mudassar.hakim.jobs@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Me Directly
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="https://www.linkedin.com/in/mudassar-ahamer-hakim-281b8b9/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;