import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import neilPortrait from "/lovable-uploads/e68c819e-c571-41b6-9c38-db182ddbc8ad.png";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-in-left text-center lg:text-left">
            <div className="space-y-2">
              <p className="text-tech-blue font-medium tracking-wide">Hey! I Am</p>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Neil Anthony
                </span>
              </h1>
               <p className="text-xl md:text-2xl text-tech-orange font-medium">
                 Tech Enthusiast, AI Engineer & Prompt Engineer
               </p>
            </div>

             <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
               I'm a curious, hands-on builder with a passion for solving real-world problems using tech. 
               Expert prompt engineer and highly efficient in using AI tools like GPT for innovative solutions.
             </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("#projects")}
                className="gradient-primary text-white hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-glow"
                size="lg"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                className="border-border/50 hover:border-tech-blue/50 transition-all duration-300 hover:scale-105"
                size="lg"
              >
                Contact Me
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4 justify-center lg:justify-start">
              <Button
                variant="outline"
                size="icon"
                className="border-border/50 hover:border-tech-blue/50 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://github.com/neil24-c" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-border/50 hover:border-tech-blue/50 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="mailto:neiltimon2428@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-border/50 hover:border-tech-blue/50 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://drive.google.com/uc?export=download&id=1F8V9EdyzlvIjqmZOYxi69C_X1LrVt3Rw" target="_blank" title="Download Resume">
                  <Download className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-tech-blue to-tech-purple rounded-2xl blur-xl opacity-30 animate-glow"></div>
              <div className="relative bg-gradient-to-br from-muted/50 to-card rounded-2xl p-8 shadow-card backdrop-blur-sm border border-border/50">
                <img
                  src={neilPortrait}
                  alt="Neil Anthony"
                  className="w-80 h-96 object-cover rounded-xl shadow-soft"
                />
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-card border border-border/50 rounded-lg px-3 py-2 shadow-soft animate-float">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-tech-green rounded-full"></div>
                    <span className="text-sm font-medium">Available</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-card border border-border/50 rounded-lg px-3 py-2 shadow-soft animate-float" style={{ animationDelay: "1s" }}>
                  <span className="text-sm font-medium text-tech-blue">Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;