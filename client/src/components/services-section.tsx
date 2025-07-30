import { Button } from "@/components/ui/button";
import { Gem, Crown, Star, Check } from "lucide-react";

interface ServicesSectionProps {
  onBookingClick: () => void;
}

const packages = [
  {
    id: "essential",
    name: "Essential",
    price: "$5,000",
    description: "Perfect for capturing core family stories",
    icon: Gem,
    features: [
      "2-hour intimate storytelling session",
      "Professional lighting & audio setup",
      "15-minute edited legacy film",
      "Digital delivery in multiple formats",
      "Cloud backup & archival"
    ],
    isPopular: false
  },
  {
    id: "premium",
    name: "Premium",
    price: "$10,000",
    description: "Comprehensive storytelling experience",
    icon: Crown,
    features: [
      "4-hour storytelling sessions (2 visits)",
      "Cinema-quality equipment & crew",
      "30-minute cinematic legacy film",
      "Raw interview footage included",
      "Custom music & color grading",
      "Physical keepsake package"
    ],
    isPopular: true
  },
  {
    id: "elite",
    name: "Elite",
    price: "$20,000",
    description: "The ultimate legacy preservation",
    icon: Star,
    features: [
      "6-hour storytelling sessions (3 visits)",
      "Multi-location filming options",
      "60-minute documentary-style film",
      "Family history research integration",
      "Luxury presentation package"
    ],
    isPopular: false
  }
];

export default function ServicesSection({ onBookingClick }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
            Choose Your Legacy Package
          </h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            Each package is designed to honor your family's unique story with the care and artistry it deserves.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => {
            const IconComponent = pkg.icon;
            const isPopular = pkg.isPopular;
            
            return (
              <div 
                key={pkg.id}
                className={`relative ${
                  isPopular 
                    ? 'bg-navy border-2 border-gold rounded-2xl golden-border' 
                    : 'bg-cream border border-gold/20 rounded-2xl'
                } p-8 service-card-hover transition-all duration-300`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gold text-navy px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${
                    isPopular 
                      ? 'bg-gradient-to-br from-gold to-gold-light' 
                      : 'bg-gradient-to-br from-gold/20 to-gold/40'
                  } rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`${
                      isPopular ? 'text-navy' : 'text-gold'
                    } text-xl h-6 w-6`} />
                  </div>
                  <h3 className={`font-playfair text-2xl font-bold ${
                    isPopular ? 'text-cream' : 'text-navy'
                  } mb-2`}>
                    {pkg.name}
                  </h3>
                  <div className={`text-4xl font-bold text-gold mb-1`}>
                    {pkg.price}
                  </div>
                  <p className={`${
                    isPopular ? 'text-cream/80' : 'text-warm-gray'
                  }`}>
                    {pkg.description}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-gold mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                      <span className={`${
                        isPopular ? 'text-cream' : 'text-navy'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={onBookingClick}
                  className="w-full bg-gradient-to-r from-gold to-gold-light text-navy font-semibold py-4 rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Choose {pkg.name}
                </Button>
              </div>
            );
          })}
        </div>
        
        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-warm-gray mb-4">
            All packages include lifetime technical support and format updates as technology evolves.
          </p>
          <Button 
            variant="link"
            onClick={onBookingClick}
            className="text-gold hover:text-gold-dark font-semibold underline"
          >
            Not sure which package? Schedule a free consultation →
          </Button>
        </div>
      </div>
    </section>
  );
}
