// Content Configuration File
// Update this file to change videos, images, and text content

export const siteContent = {
  // Hero Section
  hero: {
    title: "Their stories deserve",
    titleHighlight: "to live forever.",
    subtitle: "Gentle, reverent conversations that become timeless keepsakes.|Preserve the voices and wisdom of those you cherish most.",
    primaryButtonText: "Book a Legacy Session",
    secondaryButtonText: "See Our Work"
  },

  // Navigation
  navigation: {
    brandName: "EVERfor",
    menuItems: [
      { label: "Home", href: "hero" },
      { label: "Services", href: "services" },
      { label: "Gallery", href: "gallery" },
      { label: "How It Works", href: "process" },
      { label: "Contact", href: "contact" }
    ],
    ctaButtonText: "Book a Legacy Session"
  },

  // Video Gallery - Easy to update video links
  videoGallery: {
    title: "Preserving Stories, One Family at a Time",
    subtitle: "Every conversation tells a story worth remembering.|See how we help families capture these precious moments|with cinematic quality and heartfelt authenticity.",
    videos: [
      {
        id: "1",
        title: "Sarah Elizabeth Mitchell",
        description: "Signature",
        thumbnailUrl: "", // Will use placeholder design
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your YouTube video ID
        duration: "12:34"
      },
      {
        id: "2", 
        title: "Robert William Johnson",
        description: "Essential",
        thumbnailUrl: "", // Will use placeholder design
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your YouTube video ID
        duration: "8:22"
      },
      {
        id: "3",
        title: "Margaret Rose Thompson", 
        description: "Eternal",
        thumbnailUrl: "", // Will use placeholder design
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your YouTube video ID
        duration: "15:45"
      }
    ]
  },

  // Profile Picture and About Section - Easy to update
  profile: {
    name: "Your Name",
    title: "Legacy Storyteller & Filmmaker",
    imageUrl: "/api/placeholder/300/300", // Replace with your actual profile photo path
    bio: "With over a decade of experience in documentary filmmaking, I specialize in capturing the intimate stories that define our families. Every session is approached with reverence, patience, and a deep understanding of the precious nature of these conversations."
  },

  // Service Packages
  services: {
    title: "Thoughtfully Crafted Packages",
    subtitle: "Each package is designed to honor your family's story with the care and attention it deserves.",
    packages: [
      {
        name: "Essential",
        price: "$5,000",
        duration: "Half-day session",
        features: [
          "2-3 hour intimate conversation",
          "Professional lighting & audio",
          "Single edited video (30-45 minutes)",
          "Digital delivery & cloud backup",
          "Basic color correction & audio enhancement"
        ]
      },
      {
        name: "Signature", 
        price: "$10,000",
        duration: "Full-day experience",
        features: [
          "6-8 hour comprehensive session",
          "Cinematic multi-camera setup",
          "Multiple edited segments",
          "Professional documentary-style editing",
          "Custom music & sound design",
          "Physical keepsake box with USB drive"
        ]
      },
      {
        name: "Eternal",
        price: "$20,000", 
        duration: "Multi-day storytelling",
        features: [
          "Multiple sessions over several days",
          "Extended family participation",
          "Location shooting (home, meaningful places)",
          "Archival photo/video integration",
          "Professional documentary production",
          "Multiple format deliverables",
          "Lifetime storage & access guarantee"
        ]
      }
    ]
  },

  // How It Works Section
  process: {
    title: "A Gentle Process, Extraordinary Results",
    subtitle: "We believe the best stories emerge when families feel completely comfortable and unhurried.",
    steps: [
      {
        number: "01",
        title: "Schedule & Plan",
        description: "We start with a thoughtful conversation about your family's story, what matters most to preserve, and how we can create the perfect environment for authentic sharing."
      },
      {
        number: "02", 
        title: "Film with Care",
        description: "In the comfort of your chosen space, we create a warm, intimate setting where stories flow naturally. Our unobtrusive approach ensures genuine moments are captured beautifully."
      },
      {
        number: "03",
        title: "Deliver Memories", 
        description: "Your finished video is crafted with the same care as the conversation itself—thoughtfully edited, beautifully presented, and delivered as a treasured keepsake for generations."
      }
    ]
  }
};

// To update video links:
// 1. Get your YouTube video ID from the URL (e.g., from https://youtube.com/watch?v=ABC123, the ID is "ABC123")
// 2. Replace "dQw4w9WgXcQ" with your video ID in both videoUrl and thumbnailUrl
// 3. Update title, description, and duration for each video

// To update profile picture:
// 1. Add your photo to the client/public folder (e.g., client/public/profile.jpg)
// 2. Update profile.imageUrl to "/profile.jpg" (or your chosen filename)

// All text content can be easily modified by changing the strings in this file