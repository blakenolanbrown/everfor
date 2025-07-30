import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock, Heart, Video, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    message: ""
  });

  const { toast } = useToast();

  const submitLead = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/leads", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        package: "",
        message: ""
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and email address.",
        variant: "destructive",
      });
      return;
    }
    submitLead.mutate(formData);
  };

  const openCalendly = () => {
    // TODO: Integrate with actual Calendly URL
    window.open("https://calendly.com/everfor-family", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-navy text-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Let's Begin Your Legacy
          </h2>
          <div className="text-xl text-cream/80 max-w-3xl mx-auto text-center">
            <p className="mb-2">Every moment matters. Every story deserves to be preserved.</p>
            <p>Let's capture your family's legacy together.</p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-navy-light rounded-2xl p-8">
            <h3 className="font-playfair text-2xl font-semibold mb-6">Get In Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</Label>
                <Input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required 
                  className="w-full px-4 py-3 bg-cream text-navy rounded-lg focus:ring-2 focus:ring-gold focus:outline-none" 
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</Label>
                <Input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required 
                  className="w-full px-4 py-3 bg-cream text-navy rounded-lg focus:ring-2 focus:ring-gold focus:outline-none"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</Label>
                <Input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-cream text-navy rounded-lg focus:ring-2 focus:ring-gold focus:outline-none"
                />
              </div>
              
              <div>
                <Label htmlFor="package" className="block text-sm font-medium mb-2">Interested Package</Label>
                <Select value={formData.package} onValueChange={(value) => setFormData({...formData, package: value})}>
                  <SelectTrigger className="w-full px-4 py-3 bg-cream text-navy rounded-lg focus:ring-2 focus:ring-gold focus:outline-none">
                    <SelectValue placeholder="Please select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="essential">Essential ($5,000)</SelectItem>
                    <SelectItem value="premium">Premium ($10,000)</SelectItem>
                    <SelectItem value="elite">Elite ($20,000)</SelectItem>
                    <SelectItem value="consultation">Free Consultation First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">Tell us about your family's story</Label>
                <Textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-cream text-navy rounded-lg focus:ring-2 focus:ring-gold focus:outline-none resize-none"
                  placeholder="Share what makes your family's legacy special..."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={submitLead.isPending}
                className="w-full bg-gradient-to-r from-gold to-gold-light text-navy font-semibold py-4 rounded-full hover:shadow-lg transition-all duration-300"
              >
                <Send className="mr-2 h-4 w-4" />
                {submitLead.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-semibold mb-6">Ready to Get Started?</h3>
              <div className="text-cream/80 leading-relaxed mb-6">
                <p className="mb-2">Time is precious, and every day we wait is another day of stories that might be lost.</p>
                <p>Let's schedule your consultation and begin preserving your family's most treasured memories.</p>
              </div>
              
              <Button 
                onClick={openCalendly}
                className="bg-gradient-to-r from-gold to-gold-light text-navy font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 mb-8"
              >
                <Video className="mr-2 h-4 w-4" />
                Book Free Video Consultation
              </Button>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-gold h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-cream/80">hello@everfor.family</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-gold h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-cream/80">(555) 123-EVER</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                  <Clock className="text-gold h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Response Time</div>
                  <div className="text-cream/80">Within 24 hours</div>
                </div>
              </div>
            </div>
            
            {/* Urgency Message */}
            <div className="bg-burgundy/20 border border-burgundy/30 rounded-xl p-6 mt-8">
              <div className="flex items-start">
                <Heart className="text-burgundy text-xl mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-cream mb-2">Don't Wait Too Long</h4>
                  <p className="text-cream/80 text-sm leading-relaxed">
                    Every week, families reach out wishing they had started this process sooner. 
                    The best time to preserve your family's stories is now, while everyone is healthy 
                    and the memories are fresh.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
