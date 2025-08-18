import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Play } from "lucide-react";
import VideoPlayer from "./video-player";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string | null;
}

const videoData = {
  featured: {
    title: "EVERfor them. EVERfor you.",
    description: "Experience how we transform intimate family conversations into cinematic treasures that will be cherished for generations.",
    videoUrl: "/public-objects/videos/founder-video.mp4", // Will be your uploaded video
    thumbnail: "https://img.youtube.com/vi/lqMzsYgysL4/maxresdefault.jpg",
    isHosted: true // Flag to indicate self-hosted video
  },
  wisdom: {
    title: "The Wisdom of Generations",
    description: "A heartwarming conversation between grandmother and granddaughter, preserving decades of life lessons.",
    videoUrl: "",
    thumbnail: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450",
    isHosted: false
  },
  traditions: {
    title: "Family Traditions Live On",
    description: "A multi-generational family sharing their traditions and values around the dinner table.",
    videoUrl: "",
    thumbnail: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450",
    isHosted: false
  },
  "love-story": {
    title: "A Love Story Remembered",
    description: "An elderly couple reminiscing about their decades-long love story and the lessons they've learned.",
    videoUrl: "",
    thumbnail: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450",
    isHosted: false
  }
};

export default function VideoModal({ isOpen, onClose, videoId }: VideoModalProps) {
  const video = videoId && videoData[videoId as keyof typeof videoData];

  if (!video) return null;

  const playVideo = () => {
    // Video will be played directly in the modal using the VideoPlayer component
    console.log(`Playing: ${video.title}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-navy p-0 border-0">
        <div className="relative">
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-cream rounded-full"
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="aspect-video">
            {video.isHosted ? (
              <VideoPlayer 
                src={video.videoUrl}
                title={video.title}
                poster={video.thumbnail}
                className="w-full h-full"
                autoPlay={false}
                controls={true}
              />
            ) : (
              <div className="bg-navy flex items-center justify-center relative w-full h-full">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover opacity-80" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button 
                    onClick={() => window.open(video.videoUrl, '_blank')}
                    className="w-20 h-20 bg-gold/90 rounded-full flex items-center justify-center hover:bg-gold hover:scale-110 transition-all duration-300 p-0"
                  >
                    <Play className="text-navy text-2xl ml-1 h-8 w-8" />
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-8">
            <h3 className="font-cormorant text-2xl font-semibold text-cream mb-3">
              {video.title}
            </h3>
            <p className="text-cream/80 leading-relaxed">
              {video.description}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
