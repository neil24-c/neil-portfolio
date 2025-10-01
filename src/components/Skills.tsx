import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Wrench, Cpu, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming",
      icon: Code2,
      color: "tech-blue",
      skills: ["Python", "C", "HTML", "CSS"]
    },
    {
      category: "Tools & Libraries",
      icon: Wrench,
      color: "tech-purple",
      skills: ["OpenCV", "YOLOv5", "NumPy", "MySQL", "Qiskit", "IBM Quantum", "Flask", "Pandas", "Scikit-learn", "TensorFlow"]
    },
    {
      category: "Hardware & IoT",
      icon: Cpu,
      color: "tech-orange",
      skills: ["Raspberry Pi", "ESP32", "PIR Sensors", "DHT11", "Gas Sensors"]
    },
    {
      category: "Soft Skills",
      icon: Users,
      color: "tech-green",
      skills: ["Git", "PowerPoint", "Public Speaking", "Event Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies, tools, and capabilities I've mastered throughout my journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in group h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                         style={{ background: `hsl(var(--${category.color}) / 0.1)` }}>
                      <IconComponent 
                        className="w-8 h-8 transition-all duration-300 group-hover:scale-110" 
                        style={{ color: `hsl(var(--${category.color}))` }}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-2 flex-1 flex flex-col justify-start">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="w-full justify-center border-border/50 hover:border-current transition-all duration-300 hover:scale-105"
                        style={{ 
                          borderColor: `hsl(var(--${category.color}) / 0.3)`,
                          color: `hsl(var(--${category.color}))`
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="border-border/50 shadow-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Always Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm constantly expanding my skill set and staying updated with the latest technologies. 
                Passionate about IoT, AI, Computer Vision, and Quantum Computing, with hands-on experience 
                in building real-world solutions.
              </p>
              <div className="flex justify-center mt-6 space-x-4">
                <Badge variant="outline" className="border-tech-blue/30 text-tech-blue">
                  Machine Learning
                </Badge>
                <Badge variant="outline" className="border-tech-purple/30 text-tech-purple">
                  Quantum Computing
                </Badge>
                <Badge variant="outline" className="border-tech-orange/30 text-tech-orange">
                  Computer Vision
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;