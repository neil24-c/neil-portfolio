import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, AlertTriangle, Target, Lightbulb } from "lucide-react";

const SWOT = () => {
  const analysis = {
    strengths: [
      "Demonstrated ability to translate theoretical knowledge into practical solutions",
      "Self-motivated learner with consistent skill development across multiple domains",
      "Strong foundation in emerging technologies (AI/ML, IoT, Quantum Computing)",
      "Proven leadership through volunteer work and mentorship roles",
      "Effective communication skills developed through teaching and presentations",
      "Creative problem-solving approach enhanced by diverse artistic interests"
    ],
    weaknesses: [
      "Limited exposure to large-scale enterprise development environments",
      "Still developing experience in team-based software development workflows",
      "Ongoing academic commitments may require careful time management",
      "Some technical projects are in development phase, requiring completion for full validation"
    ],
    opportunities: [
      "Growing industry demand for AI/ML professionals with practical experience",
      "Potential for specialization in emerging fields like quantum computing applications",
      "Opportunity to contribute to healthcare technology through cybersecurity expertise",
      "Scope for bridging technical and creative domains in innovative product development",
      "Mentorship experiences translate well to technical team leadership roles",
      "Patent application demonstrates innovation potential valued by employers"
    ],
    threats: [
      "Rapidly evolving technology landscape requires continuous learning commitment",
      "Competitive job market demands consistent skill advancement and differentiation",
      "Need to balance academic excellence with practical experience acquisition",
      "Industry preference for candidates with established professional track records"
    ]
  };

  const sections = [
    {
      title: "Strengths",
      items: analysis.strengths,
      icon: TrendingUp,
      color: "tech-green",
      description: "Core competencies and demonstrated capabilities"
    },
    {
      title: "Areas for Growth", 
      items: analysis.weaknesses,
      icon: AlertTriangle,
      color: "tech-orange",
      description: "Honest self-assessment of development areas"
    },
    {
      title: "Opportunities",
      items: analysis.opportunities,
      icon: Target,
      color: "tech-blue", 
      description: "Market potential and growth pathways"
    },
    {
      title: "Challenges",
      items: analysis.threats,
      icon: Shield,
      color: "tech-purple",
      description: "External factors requiring strategic consideration"
    }
  ];

  return (
    <section id="swot" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">Self-Assessment</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A thoughtful evaluation of my current capabilities, growth areas, and strategic positioning for professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card 
                key={index} 
                className="border-border/50 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-xl mb-2">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                      style={{ background: `hsl(var(--${section.color}) / 0.1)` }}
                    >
                      <IconComponent 
                        className="w-5 h-5" 
                        style={{ color: `hsl(var(--${section.color}))` }}
                      />
                    </div>
                    {section.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground ml-13">{section.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start">
                        <div 
                          className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                          style={{ backgroundColor: `hsl(var(--${section.color}))` }}
                        ></div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Professional Development Philosophy */}
        <div className="mt-16">
          <Card className="border-border/50 shadow-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-tech-blue mr-3" />
                <h3 className="text-xl font-semibold">Development Philosophy</h3>
              </div>
              <div className="text-center space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I believe in honest self-reflection as the foundation for continuous improvement. While I'm proud of my 
                  technical achievements and leadership experiences, I recognize that professional growth requires acknowledging 
                  areas for development alongside celebrating strengths.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="text-left">
                    <h4 className="font-medium text-foreground mb-3 flex items-center">
                      <Badge variant="outline" className="border-tech-green/30 text-tech-green mr-2 text-xs">
                        Commitment
                      </Badge>
                      My Approach
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Embrace challenges as opportunities for skill enhancement</li>
                      <li>• Seek mentorship and feedback to accelerate learning</li>
                      <li>• Balance confidence with humility in professional interactions</li>
                    </ul>
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium text-foreground mb-3 flex items-center">
                      <Badge variant="outline" className="border-tech-blue/30 text-tech-blue mr-2 text-xs">
                        Vision
                      </Badge>
                      Growth Goals
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Transition from academic projects to industry-scale solutions</li>
                      <li>• Develop expertise in collaborative development methodologies</li>
                      <li>• Contribute meaningfully to team objectives and organizational goals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SWOT;