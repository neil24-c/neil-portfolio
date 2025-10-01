import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, PenTool, Trophy, Mic, Heart, Palette } from "lucide-react";

const Hobbies = () => {
  const hobbyCategories = [
    {
      category: "Sports & Coaching",
      icon: Trophy,
      color: "tech-blue",
      hobbies: ["Football Coaching", "Team Leadership", "Sports Strategy"]
    },
    {
      category: "Creative Arts",
      icon: Palette,
      color: "tech-purple",
      hobbies: ["Sketching", "Digital Art", "Creative Design"]
    },
    {
      category: "Music & Performance",
      icon: Music,
      color: "tech-orange",
      hobbies: ["Beatboxing", "Drumming", "Music Composition", "Live Performance"]
    },
    {
      category: "Writing & Poetry",
      icon: PenTool,
      color: "tech-green",
      hobbies: ["Lyricist", "Poetry Writing", "Creative Writing", "Storytelling"]
    }
  ];

  return (
    <section id="hobbies" className="py-20 px-4 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">Hobbies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beyond coding and tech, I explore creativity through various artistic and athletic pursuits
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbyCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
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
                  
                  <div className="space-y-2">
                    {category.hobbies.map((hobby, hobbyIndex) => (
                      <Badge 
                        key={hobbyIndex} 
                        variant="outline" 
                        className="w-full justify-center border-border/50 hover:border-current transition-all duration-300 hover:scale-105"
                        style={{ 
                          borderColor: `hsl(var(--${category.color}) / 0.3)`,
                          color: `hsl(var(--${category.color}))`
                        }}
                      >
                        {hobby}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Creative Passion Statement */}
        <div className="mt-16 text-center">
          <Card className="border-border/50 shadow-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-tech-purple mr-2" />
                <h3 className="text-xl font-semibold">Creative Balance</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I believe in maintaining a creative balance alongside technical pursuits. Whether I'm coaching 
                young footballers, composing music, sketching ideas, or writing poetry, these hobbies fuel my 
                creativity and bring fresh perspectives to my technical problem-solving approach.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;