import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Data Analyst Intern",
      company: "Archdiocese Communication Centre",
      period: "Jun 2023 – Nov 2023",
      location: "Bengaluru",
      type: "Internship",
      description: [
        "Built and maintained service user data logs and analytics systems",
        "Analyzed usage patterns and generated insights for community reports",
        "Created data visualization dashboards to track service performance",
        "Provided actionable insights for improving community service delivery"
      ],
      skills: ["Data Analysis", "Excel", "Data Visualization", "Report Generation"]
    },
    {
      role: "Program Coordinator & Mentor (Volunteer)",
      company: "U&I NGO",
      period: "Aug 2024 – Present",
      location: "Bengaluru",
      type: "Volunteer",
      description: [
        "Designed and implemented structured learning programs for 50+ underprivileged children",
        "Developed innovative educational methodologies to enhance learning outcomes",
        "Led cross-functional team coordination for community outreach initiatives",
        "Applied systematic problem-solving approaches to address educational challenges"
      ],
      skills: ["Program Development", "Team Leadership", "Educational Design", "Community Engagement"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional journey and volunteer work that shaped my skills and perspective
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-border/50 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 items-start">
                  {/* Left Column - Role & Company */}
                  <div className="md:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">{exp.role}</h3>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <Building className="w-4 h-4 mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                      <Badge 
                        variant={exp.type === "Volunteer" ? "default" : "secondary"}
                        className={exp.type === "Volunteer" ? "gradient-primary text-white" : ""}
                      >
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Description */}
                    <div className="space-y-2 mb-6">
                      {exp.description.map((item, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-tech-blue mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Skills */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-foreground flex items-center">
                      <Users className="w-4 h-4 mr-2 text-tech-blue" />
                      Key Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIdx) => (
                        <Badge key={skillIdx} variant="outline" className="border-tech-blue/30 text-tech-blue hover:bg-tech-blue/10">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;