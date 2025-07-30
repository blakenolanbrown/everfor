import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Video, Mail } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const openCalendly = () => {
    // TODO: Replace with actual Calendly URL
    window.open("https://calendly.com/everfor-family", "_blank");
    onClose();
  };

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-cream">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl text-navy text-center">
            Schedule Your Consultation
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 pt-4">
          <p className="text-warm-gray text-center">
            Choose how you'd like to connect with us to begin your family's legacy journey.
          </p>
          
          <div className="space-y-4">
            <Button 
              onClick={openCalendly}
              className="w-full bg-gradient-to-r from-gold to-gold-light text-navy font-semibold py-4 rounded-full hover:shadow-lg transition-all duration-300"
            >
              <Video className="mr-2 h-5 w-5" />
              Book Video Consultation
            </Button>
            
            <Button 
              onClick={openCalendly}
              variant="outline"
              className="w-full border-gold text-gold hover:bg-gold hover:text-navy font-semibold py-4 rounded-full transition-all duration-300"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Phone Call
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="ghost"
              className="w-full text-navy hover:text-gold font-semibold py-4 rounded-full transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Message Instead
            </Button>
          </div>
          
          <div className="bg-gold/10 border border-gold/20 rounded-xl p-4 mt-6">
            <p className="text-navy text-sm text-center">
              <strong>Free consultation:</strong> We'll discuss your family's story, answer questions, 
              and help you choose the perfect package.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
