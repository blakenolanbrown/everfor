import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import VideoGallery from "@/components/video-gallery";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import BookingModal from "@/components/booking-modal";
import VideoModal from "@/components/video-modal";
import { useState } from "react";
import { Calendar, Video, Heart } from "lucide-react";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  const openVideoModal = (videoId?: string) => {
    setSelectedVideo(videoId || "featured");
    setIsVideoModalOpen(true);
  };
  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-soft-beige">
      <Navigation onBookingClick={openBookingModal} />
      <HeroSection onBookingClick={openBookingModal} onVideoClick={openVideoModal} />
      
      {/* What Is EVERfor Section */}
      <section className="py-20 bg-cream/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-medium text-deep-charcoal mb-8">
              A legacy you can see, hear, and feel.
            </h2>
            <div className="text-lg text-warm-gray max-w-3xl mx-auto leading-relaxed space-y-3">
              <p>Not a home video.</p>
              <p>Not a journal in a drawer.</p>
              <p>EVERfor captures a person—who they are, how they speak, what they believe.</p>
              <p>A timeless record of their story, filmed with care, reverence, and cinematic precision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white/70">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-medium text-deep-charcoal mb-8">
              How It Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/40 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="text-gold text-2xl h-8 w-8" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-navy mb-4">Schedule</h3>
              <p className="text-warm-gray leading-relaxed">
                A simple call to understand your family's needs
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/40 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Video className="text-gold text-2xl h-8 w-8" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-navy mb-4">Film</h3>
              <p className="text-warm-gray leading-relaxed">
                We interview and film with reverent, cinematic care
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/40 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="text-gold text-2xl h-8 w-8" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-navy mb-4">Deliver</h3>
              <p className="text-warm-gray leading-relaxed">
                You receive a beautifully edited heirloom to share for generations
              </p>
            </div>
          </div>
        </div>
      </section>

      <VideoGallery onVideoClick={openVideoModal} />
      <ServicesSection onBookingClick={openBookingModal} />
      <AboutSection onBookingClick={openBookingModal} />
      <TestimonialsSection onBookingClick={openBookingModal} />
      <ContactSection />
      <Footer onBookingClick={openBookingModal} />
      
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={closeVideoModal} 
        videoId={selectedVideo} 
      />
    </div>
  );
}
