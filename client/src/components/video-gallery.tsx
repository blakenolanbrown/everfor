import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface VideoGalleryProps {
  onVideoClick: (videoId?: string) => void;
}

const videoThumbnails = [
  {
    id: "wisdom",
    title: "The Wisdom of Generations",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450"
  },
  {
    id: "traditions",
    title: "Family Traditions Live On",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450"
  },
  {
    id: "love-story",
    title: "A Love Story Remembered",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450"
  }
];

export default function VideoGallery({ onVideoClick }: VideoGalleryProps) {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
            Preview Our Work
          </h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            See how we transform intimate family conversations into cinematic treasures.
          </p>
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
                "Stories of a Lifetime" - Featured Legacy Film
              </h3>
              <p className="text-cream/80 leading-relaxed">
                Experience how we transform intimate family conversations into cinematic treasures 
                that will be cherished for generations.
              </p>
            </div>
          </div>
        </div>
        
        {/* Video Thumbnails Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoThumbnails.map((video) => (
            <div 
              key={video.id}
              onClick={() => onVideoClick(video.id)}
              className="group cursor-pointer"
            >
              <div className="relative bg-navy rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <img 
                    src={video.image} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-gold/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="text-navy ml-1 h-5 w-5" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-cream text-sm">{video.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
