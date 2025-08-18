import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  title: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  controls?: boolean;
}

export default function VideoPlayer({ 
  src, 
  title, 
  poster, 
  className = "", 
  autoPlay = false,
  controls = true 
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    
    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!isFullscreen) {
      video.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const time = (parseFloat(e.target.value) / 100) * duration;
    video.currentTime = time;
    setCurrentTime(time);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div 
      className={`relative group bg-black rounded-xl overflow-hidden ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        className="w-full h-full object-cover"
        onClick={togglePlay}
        data-testid="video-player"
      >
        Your browser does not support the video tag.
      </video>

      {/* Custom Controls */}
      {controls && (
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          {/* Play/Pause Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              onClick={togglePlay}
              variant="ghost"
              size="icon"
              className="w-20 h-20 bg-gold/90 hover:bg-gold rounded-full text-navy hover:scale-110 transition-all duration-300"
              data-testid="button-play-pause"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 ml-0" />
              ) : (
                <Play className="w-8 h-8 ml-1" />
              )}
            </Button>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            {/* Progress Bar */}
            <div className="mb-3">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #E6B73A 0%, #E6B73A ${progress}%, rgba(255,255,255,0.3) ${progress}%, rgba(255,255,255,0.3) 100%)`
                }}
                data-testid="video-progress"
              />
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Button
                  onClick={togglePlay}
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-gold"
                  data-testid="button-play-pause-bottom"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </Button>

                <Button
                  onClick={toggleMute}
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-gold"
                  data-testid="button-mute"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </Button>

                <span className="text-white text-sm" data-testid="text-time">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-white text-sm font-medium">{title}</span>
                
                <Button
                  onClick={toggleFullscreen}
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-gold"
                  data-testid="button-fullscreen"
                >
                  {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}