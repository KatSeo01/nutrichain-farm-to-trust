import { Shield, Users, TrendingUp, Globe } from "lucide-react";
import qrMockupImage from "@/assets/qr-blockchain-mockup.jpg";

const Trust = () => {
  const features = [
    {
      icon: Shield,
      title: "Immutable Blockchain Verification",
      description: "Every transaction and certification is permanently recorded on the blockchain, ensuring complete transparency and preventing fraud."
    },
    {
      icon: Users,
      title: "Aligned with Certification Boards",
      description: "We work directly with GLOBALG.A.P., SABS, PPECB, and other recognized certification bodies for seamless compliance."
    },
    {
      icon: TrendingUp,
      title: "Affordable for Smallholder Farmers",
      description: "Digital-first processes reduce costs while maintaining the highest standards of certification and verification."
    },
    {
      icon: Globe,
      title: "Unlocks Premium Export Markets",
      description: "Certified products gain access to international markets with verified quality and origin documentation."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why <span className="text-primary">NutriChain</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building trust through technology, transparency, and verified quality standards
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-right">
            <img 
              src={qrMockupImage}
              alt="QR code mockup showing blockchain verification process"
              className="w-full h-96 object-cover rounded-xl shadow-medium"
            />
          </div>

          <div className="space-y-8 animate-fade-in">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex gap-4 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gradient-primary p-3 rounded-lg shadow-soft flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;