import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Calendar, MapPin, Download } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "Cambridge Institute of Technology, Bengaluru",
      period: "Expected Apr 2026",
      status: "Current"
    },
    {
      degree: "Pre-University - PCMB",
      institution: "St. Joseph's PU College, Bengaluru",
      period: "May 2022",
      status: "Completed"
    },
    {
      degree: "Schooling",
      institution: "St. Joseph's Boys High School",
      period: "2020",
      status: "Completed"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, education, and what drives me
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Bio Section */}
          <div className="space-y-6 animate-fade-in">
            <Card className="border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <div className="w-8 h-8 rounded-full gradient-primary mr-3"></div>
                  My Journey
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                     I'm a passionate technologist who believes in the transformative power of combining technical expertise 
                     with purposeful innovation. As an expert prompt engineer and AI specialist, I've developed proficiency 
                     in leveraging cutting-edge tools like GPT to architect solutions that address real-world challenges. 
                     My approach centers on translating complex technical concepts into practical applications that create 
                     meaningful impact.
                   </p>
                   <p>
                     My technical journey began with an innate curiosity about system architectures and has evolved into 
                     building sophisticated IoT ecosystems, AI-powered detection systems, and secure network solutions. 
                     What sets me apart is my ability to bridge the gap between theoretical knowledge and practical 
                     implementation, evidenced by patent-pending innovations and successful project deployments across 
                     multiple technological domains.
                   </p>
                   <p>
                     Beyond technical pursuits, I'm committed to knowledge transfer and community development through 
                     mentorship roles and volunteer initiatives. I maintain that the most impactful technology solutions 
                     emerge from diverse perspectives and collaborative approaches. My creative background in music, arts, 
                     and sports coaching enhances my problem-solving methodology and team leadership capabilities.
                   </p>
                  <div className="mt-6">
                    <Button
                      asChild
                      className="gradient-primary text-white hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-glow"
                    >
                      <a href="https://drive.google.com/uc?export=download&id=1F8V9EdyzlvIjqmZOYxi69C_X1LrVt3Rw" target="_blank">
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6 animate-slide-in-left h-full">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 text-tech-blue mr-3" />
              Education Timeline
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="border-border/50 shadow-card hover:shadow-soft transition-all duration-300 hover:scale-102">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full gradient-secondary flex items-center justify-center text-white font-semibold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                          <Badge 
                            variant={edu.status === "Current" ? "default" : "secondary"}
                            className={edu.status === "Current" ? "gradient-primary text-white" : ""}
                          >
                            {edu.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-2 flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {edu.institution}
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {edu.period}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;