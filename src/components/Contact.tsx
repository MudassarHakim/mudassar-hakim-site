import { Mail, Phone, Github, Linkedin, FileText, Send, Calendar, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

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
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/MudassarHakim",
      color: "hover:bg-gray-900 hover:text-white"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mudassar-ahamer-hakim-281b8b9/",
      color: "hover:bg-[#0A66C2] hover:text-white"
    },
    {
      icon: FileText,
      label: "Medium",
      href: "https://medium.com/@mudassar.hakim",
      color: "hover:bg-black hover:text-white"
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-secondary/30 via-background to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to discuss new opportunities, collaborate on exciting projects, or simply 
              connect with a fellow technology enthusiast?
            </p>
          </div>

          {/* Availability Badge - Prominent */}
          <div className="flex justify-center mb-10 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-green-700 dark:text-green-400">
                Available for opportunities
              </span>
            </div>
          </div>

          {/* Main Grid - Primary Actions */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {/* Contact Details Card */}
            <Card className="shadow-elegant overflow-hidden animate-slide-up">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl lg:text-2xl flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    {info.href ? (
                      <a
                        href={info.href}
                        className="flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-secondary/50 transition-all duration-200"
                      >
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-0.5">
                            {info.label}
                          </div>
                          <div className="font-medium text-foreground truncate group-hover:text-primary transition-colors">
                            {info.value}
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-3 -mx-3">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-0.5">
                            {info.label}
                          </div>
                          <div className="font-medium text-foreground truncate">
                            {info.value}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Primary CTA Card - Schedule Meeting */}
            <Card className="shadow-elegant overflow-hidden animate-slide-up bg-gradient-to-br from-primary/5 via-background to-accent/5 border-primary/20" style={{ animationDelay: '0.1s' }}>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl lg:text-2xl flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-blue-600" />
                  </div>
                  Schedule a Meeting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Book a time that works for you. Let's discuss engineering leadership opportunities, 
                  consulting projects, or innovative technology collaborations.
                </p>
                <div className="flex flex-row gap-3">
                  <Button
                    size="lg"
                    className="flex-1 shadow-elegant bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                    asChild
                  >
                    <a
                      href="https://calendar.app.google/kUtLxQjh4meuidVWA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <Calendar className="h-4 w-4" />
                      Book a Call
                      <ArrowUpRight className="h-4 w-4 ml-auto sm:ml-0" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href="https://forms.gle/p7yw6Q7AMdGhLuCE6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Links - Horizontal Layout */}
          <Card className="shadow-elegant mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Connect Online</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 rounded-xl border border-border/50 hover:border-transparent transition-all duration-200 group ${link.color}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                      <link.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{link.label}</div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bottom CTA - Simplified */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Card className="shadow-elegant bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border-primary/20">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                      Ready to Build Something Amazing?
                    </h3>
                    <p className="text-muted-foreground">
                      Let's explore opportunities to create innovative solutions together.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <Button size="lg" asChild className="shadow-elegant">
                      <a href="mailto:mudassar.hakim.jobs@gmail.com" className="gap-2">
                        <Mail className="h-4 w-4" />
                        Email Me
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a
                        href="https://www.linkedin.com/in/mudassar-ahamer-hakim-281b8b9/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
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

export default Contact;