import { Sprout, Search, Globe2 } from "lucide-react";

const Impact = () => {
  const impacts = [
    {
      icon: Sprout,
      title: "Sustainability",
      description: "Promoting environmentally responsible farming practices",
      metric: "Carbon Footprint Reduced",
      emoji: "🌱"
    },
    {
      icon: Search,
      title: "Transparency",
      description: "Complete visibility throughout the supply chain",
      metric: "100% Traceable",
      emoji: "🔍"
    },
    {
      icon: Globe2,
      title: "Market Access",
      description: "Connecting farmers to global premium markets",
      metric: "Export Markets Unlocked",
      emoji: "🌍"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-accent">Impact</span>
          </h2>
          <p className="text-2xl font-semibold text-primary mb-4">
            Empowering 1M+ African farmers by 2030
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Creating sustainable change through technology, transparency, and trust
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div 
              key={index}
              className="group text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 group-hover:border-primary/30">
                <div className="text-6xl mb-4">{impact.emoji}</div>
                
                <div className="bg-gradient-primary p-4 rounded-full w-fit mx-auto mb-6 shadow-soft">
                  <impact.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {impact.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {impact.description}
                </p>
                
                <div className="text-sm font-semibold text-accent bg-accent/10 px-4 py-2 rounded-full">
                  {impact.metric}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1M+</div>
            <div className="text-sm text-muted-foreground">Farmers Targeted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Countries Reached</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Blockchain Verified</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;