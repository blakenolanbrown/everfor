import { Button } from "@/components/ui/button";
import { Play, Clock } from "lucide-react";
import { siteContent } from "@/config/content";

interface VideoGalleryProps {
  onVideoClick: (videoId?: string) => void;
}

export default function VideoGallery({ onVideoClick }: VideoGalleryProps) {
  const { videoGallery } = siteContent;
  
  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
            {videoGallery.title}
          </h2>
          <div className="text-xl text-warm-gray max-w-3xl mx-auto text-center">
            <p>Every conversation tells a story worth remembering.</p>
            <p>See how we help families capture these precious moments</p>
            <p>with cinematic quality and heartfelt authenticity.</p>
          </div>
        </div>
        
        {/* Featured Video */}
        <div className="mb-12">
          <div className="relative bg-navy rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <div className="aspect-video bg-navy flex items-center justify-center relative">
              <img 
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=900" 
                alt="Elderly man sharing stories with family" 
                className="w-full h-full object-cover opacity-80" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  onClick={() => onVideoClick("featured")}
                  className="w-20 h-20 bg-gold/90 rounded-full flex items-center justify-center hover:bg-gold hover:scale-110 transition-all duration-300 p-0"
                >
                  <Play className="text-navy text-2xl ml-1 h-8 w-8" />
                </Button>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-playfair text-2xl font-semibold text-cream mb-3">
                EVERfor them. EVERfor you.
              </h3>
              <p className="text-cream leading-relaxed">
                Experience how we transform intimate family conversations into cherished treasures for generations.
              </p>
            </div>
          </div>
        </div>
        
        {/* Video Thumbnails Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoGallery.videos.map((video) => (
            <div 
              key={video.id}
              onClick={() => onVideoClick(video.id)}
              className="group cursor-pointer"
            >
              <div className="relative bg-navy rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <div className="w-full h-full bg-gradient-to-br from-navy to-deep-charcoal flex items-center justify-center">
                    <Play className="text-gold h-12 w-12 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-playfair text-lg font-bold text-navy mb-1">{video.title}</h4>
                  <p className="text-white text-sm">{video.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
