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
    <div className="min-h-screen bg-cream">
      <Navigation onBookingClick={openBookingModal} />
      <HeroSection onBookingClick={openBookingModal} onVideoClick={openVideoModal} />
      
      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
              The Golden Thread of Your Legacy
            </h2>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
              Like a golden thread weaving through time, your family's stories connect generations. 
              We capture these precious moments before they slip away forever.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/40 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-heart text-gold text-2xl"></i>
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-navy mb-4">Intimate Storytelling</h3>
              <p className="text-warm-gray leading-relaxed">
                We create a comfortable space where your loved ones can share their most treasured memories 
                and life lessons naturally.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/40 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-video text-gold text-2xl"></i>
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-navy mb-4">Cinematic Quality</h3>
              <p className="text-warm-gray leading-relaxed">
                Professional-grade equipment and artistic direction ensure your family's stories 
                are preserved with the reverence they deserve.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/40 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-infinity text-gold text-2xl"></i>
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-navy mb-4">Timeless Preservation</h3>
              <p className="text-warm-gray leading-relaxed">
                Your legacy videos are delivered in multiple formats and archived securely, 
                ensuring they last for generations to come.
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
