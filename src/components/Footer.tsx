import { Github, Mail, Phone, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-muted/50 to-background border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
              Neil Anthony
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tech enthusiast and problem solver passionate about building innovative solutions 
              that make a real difference in the world.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="icon"
                className="border-border/50 hover:border-tech-blue/50 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://github.com/neil24-c" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-border/50 hover:border-tech-orange/50 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="mailto:neiltimon2428@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-border/50 hover:border-tech-blue/50 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="tel:+917204034835">
                  <Phone className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 neiltimon2428@gmail.com</p>
              <p>📞 +91 7204034835</p>
              <p>📍 Bengaluru, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground flex items-center">
              © {currentYear} Neil Anthony. Built with{" "}
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              using React & TypeScript
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to Top ↑
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;