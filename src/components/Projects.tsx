import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Smartphone, Eye, Database } from "lucide-react";
const Projects = () => {
  const projects = [{
    title: "Smart Doorbell System",
    description: "An advanced IoT-based smart doorbell system utilizing Raspberry Pi and ESP32-CAM technology for live video capture and remote notification services. This innovative design features real-time video streaming, motion detection algorithms, and mobile alert systems. Currently under patent application review by Cambridge Institute of Technology for its novel architectural implementation.",
    icon: Smartphone,
    techStack: ["Python", "ESP32", "Raspberry Pi", "Wi-Fi", "Arduino IDE", "OpenCV"],
    features: ["Live video streaming", "Motion detection alerts", "Remote access via mobile", "Night vision capability"],
    category: "IoT",
    repoUrl: "https://github.com/neil24-c/smartdoorbell-IoT"
  }, {
    title: "YOLOv5 Affine Detection System",
    description: "Advanced object detection system with support for rotation and distortion in edge devices. Optimized for real-time performance on resource-constrained hardware.",
    icon: Eye,
    techStack: ["YOLOv5", "OpenCV", "TensorFlow", "Python", "Computer Vision"],
    features: ["Rotation-invariant detection", "Edge device optimization", "Real-time processing", "Multi-object tracking"],
    category: "AI/ML",
    repoUrl: "https://github.com/neil24-c/smart-affine-yolo"
  }, {
    title: "Student DBMS with Flask",
    description: "Comprehensive MySQL-based database management system for college operations. Features student records, course management, and administrative tools.",
    icon: Database,
    techStack: ["Flask", "MySQL", "SQL", "Python", "HTML/CSS", "Bootstrap"],
    features: ["Student record management", "Course administration", "Grade tracking", "Report generation"],
    category: "Web Development",
    repoUrl: "https://github.com/neil24-c/database-student"
  }, {
    title: "Cyber Security in Healthcare Networks",
    description: "Using XGBoost algorithm to build an ML model for real-time threat detection in networks. Analyzes source and destination IPs to detect various types of network attacks in file sets.",
    icon: Database,
    techStack: ["XGBoost", "Python", "Machine Learning", "Network Security", "IP Analysis"],
    features: ["Real-time threat detection", "Network attack identification", "IP traffic analysis", "ML-based security monitoring"],
    category: "AI/ML",
    repoUrl: "https://github.com/neil24-c/cyber-security"
  }, {
    title: "IoT Smart Parking System with Quantum Computing",
    description: "Revolutionary smart parking system leveraging IoT sensors and quantum computing algorithms for optimal space allocation and traffic flow management. Currently under development and analysis.",
    icon: Smartphone,
    techStack: ["IoT", "Quantum Computing", "Python", "Sensors", "Data Analysis"],
    features: ["Quantum optimization algorithms", "Real-time parking availability", "IoT sensor integration", "Traffic flow analysis"],
    category: "IoT"
  }];
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "IoT":
        return "tech-blue";
      case "AI/ML":
        return "tech-purple";
      case "Web Development":
        return "tech-orange";
      default:
        return "tech-green";
    }
  };
  return <section id="projects" className="py-20 px-4 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions I've built to solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => {
          const IconComponent = project.icon;
          const categoryColor = getCategoryColor(project.category);
          return <Card key={index} className="border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in group h-full flex flex-col" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <CardHeader className="pb-4 flex-shrink-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{
                  background: `hsl(var(--${categoryColor}) / 0.1)`
                }}>
                      <IconComponent className="w-6 h-6" style={{
                    color: `hsl(var(--${categoryColor}))`
                  }} />
                    </div>
                    <Badge variant="outline" className="border-current" style={{
                  borderColor: `hsl(var(--${categoryColor}) / 0.3)`,
                  color: `hsl(var(--${categoryColor}))`
                }}>
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-3">{project.title}</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-medium text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{
                      backgroundColor: `hsl(var(--${categoryColor}))`
                    }}></div>
                          {feature}
                        </li>)}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="font-medium text-foreground mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIdx) => <Badge key={techIdx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>)}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 mt-auto pt-4">
                    {project.repoUrl ? (
                      <Button variant="outline" size="sm" className="flex-1 border-border/50 hover:scale-105 transition-all duration-300" style={{
                        borderColor: `hsl(var(--${categoryColor}) / 0.3)`,
                        color: `hsl(var(--${categoryColor}))`
                      }} asChild>
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" className="flex-1 border-border/50 opacity-60 cursor-not-allowed" disabled>
                        <Github className="w-4 h-4 mr-2" />
                        In Progress
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="border-border/50 shadow-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Want to see more?</h3>
              <p className="text-muted-foreground mb-6">
                These are just a few highlights. Check out my GitHub for more projects and contributions.
              </p>
              <Button className="gradient-primary text-white hover:opacity-90 transition-all duration-300 hover:scale-105" asChild>
                <a href="https://github.com/neil24-c" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View All Projects
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Projects;