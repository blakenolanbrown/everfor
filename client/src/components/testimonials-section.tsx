import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface TestimonialsSectionProps {
  onBookingClick: () => void;
}

const testimonials = [
  {
    quote: "We almost waited too long. Dad passed just three months after we filmed his stories with EVERfor. Now we have his voice, his laughter, and his wisdom preserved forever. This is the most precious gift our family has ever received.",
    author: "Sarah M.",
    package: "Premium Package Client",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "The way Blake captured Mom's stories was magical. She felt so comfortable sharing things she'd never told us before. The final film moves me to tears every time—it's pure artistry combined with deep respect for her legacy.",
    author: "Michael R.",
    package: "Elite Package Client",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  }
];

export default function TestimonialsSection({ onBookingClick }: TestimonialsSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-charcoal mb-6">
            What Families Are Saying
          </h2>
          <p className="text-xl text-warm-gray">
            The true measure of our work is in the hearts we touch and the legacies we preserve.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-cream rounded-2xl p-8 relative">
              <div className="text-gold text-6xl font-crimson absolute top-4 left-6 opacity-30">"</div>
              <div className="pt-8">
                <p className="text-deep-charcoal text-lg leading-relaxed font-crimson italic mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.author} testimonial`} 
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <div className="font-semibold text-deep-charcoal">{testimonial.author}</div>
                    <div className="text-warm-gray text-sm">{testimonial.package}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-warm-gray mb-6">
            Ready to preserve your family's most precious stories?
          </p>
          <Button 
            onClick={onBookingClick}
            className="bg-gradient-to-r from-gold to-gold-light text-navy font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Your Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
