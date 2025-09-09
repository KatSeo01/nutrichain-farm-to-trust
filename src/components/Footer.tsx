import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact", href: "#contact" }
  ];

  const partners = [
    "GLOBALG.A.P.",
    "SABS",
    "PPECB",
    "AU-IBAR",
    "NEPAD"
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Nutri<span className="text-accent">Chain</span>
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed max-w-md">
              Africa's first blockchain-powered food & pharma traceability and certification platform. 
              Building trust from source to shelf.
            </p>
            <div className="flex items-center gap-4 text-background/70">
              <Mail className="h-5 w-5" />
              <span>hello@nutrichain.africa</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Partners</h4>
            <ul className="space-y-3">
              {partners.map((partner, index) => (
                <li key={index} className="text-background/80 text-sm">
                  {partner}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 NutriChain. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-accent text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-accent text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;