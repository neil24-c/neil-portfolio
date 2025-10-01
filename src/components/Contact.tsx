import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Github, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_c8b1w6g',
        'template_mypg6y9',
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        '7uwGWMDKs2FC-6CZr'
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7204034835",
      href: "tel:+917204034835",
      color: "tech-blue"
    },
    {
      icon: Mail,
      label: "Email",
      value: "neiltimon2428@gmail.com",
      href: "mailto:neiltimon2428@gmail.com",
      color: "tech-orange"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "neil24-c",
      href: "https://github.com/neil24-c",
      color: "tech-purple"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="border-border/50 shadow-card animate-fade-in h-fit">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-tech-blue" />
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="mt-2 border-border/50 focus:border-tech-blue/50 transition-colors"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="mt-2 border-border/50 focus:border-tech-blue/50 transition-colors"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={6}
                    required
                    className="mt-2 border-border/50 focus:border-tech-blue/50 transition-colors resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-primary text-white hover:opacity-90 transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in-left">
            <Card className="border-border/50 shadow-card">
              <CardHeader>
                <CardTitle>Let's Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-8">
                  I'm always open to discussing new opportunities, innovative projects, 
                  or just having a chat about technology and its potential to solve real-world problems.
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={index}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center p-4 rounded-lg border border-border/50 hover:border-current transition-all duration-300 hover:scale-105 group"
                        style={{ borderColor: `hsl(var(--${item.color}) / 0.3)` }}
                      >
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110"
                          style={{ background: `hsl(var(--${item.color}) / 0.1)` }}
                        >
                          <IconComponent 
                            className="w-6 h-6"
                            style={{ color: `hsl(var(--${item.color}))` }}
                          />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{item.label}</p>
                          <p className="text-muted-foreground">{item.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="border-border/50 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-tech-green rounded-full animate-pulse"></div>
                  <div>
                    <p className="font-medium text-foreground">Available for Work</p>
                    <p className="text-sm text-muted-foreground">
                      Open to new opportunities and collaborations
                    </p>
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