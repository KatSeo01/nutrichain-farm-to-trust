import { Award, RefreshCw, ShoppingCart, Settings, BarChart, Handshake } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Award,
      title: "Certification & Verification",
      description: "Affordable, digital-first certification processes for all producers."
    },
    {
      icon: RefreshCw,
      title: "Subscriptions",
      description: "Ongoing compliance monitoring and automated renewals."
    },
    {
      icon: ShoppingCart,
      title: "Transaction Fees",
      description: "Marketplace for verified produce with secure payment processing."
    },
    {
      icon: Settings,
      title: "SaaS Licensing",
      description: "Technology solutions for governments and agricultural cooperatives."
    },
    {
      icon: BarChart,
      title: "Data Services",
      description: "Market insights for retailers, banks, and policymakers."
    },
    {
      icon: Handshake,
      title: "Partnerships & Grants",
      description: "Scaling farmer access via NGOs and corporate partnerships."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions for every step of your supply chain journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-primary/30 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-gold p-3 rounded-lg w-fit mb-4 shadow-gold">
                <service.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;