import { Upload, Shield, Truck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Onboard & Upload",
      description: "Farmers register and submit product information through our digital platform.",
      step: "01"
    },
    {
      icon: Shield,
      title: "Verify & Certify",
      description: "NutriChain checks compliance with boards like GLOBALG.A.P., SABS, and PPECB.",
      step: "02"
    },
    {
      icon: Truck,
      title: "Track & Sell",
      description: "Certified products carry a blockchain-backed QR code for buyers and retailers.",
      step: "03"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, transparent steps to ensure trust and traceability in your supply chain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 h-full border border-border/50">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-primary p-4 rounded-full text-primary-foreground shadow-soft">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="text-6xl font-bold text-primary/20">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-accent rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;