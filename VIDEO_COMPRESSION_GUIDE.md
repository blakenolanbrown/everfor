# EVERfor Video Compression Guide

## Overview
Your 4K H.265 500MB founder video needs optimization for web delivery. Here are the exact settings to use in DaVinci Resolve.

## Recommended Compression Settings

### Primary Web Version (1080p)
**Target:** 50-80MB file size, professional quality

**DaVinci Resolve Settings:**
```
Format: MP4
Codec: H.264
Resolution: 1920x1080
Frame Rate: [Match your original - likely 24fps or 30fps]
Bitrate: 10 Mbps (Variable, 2-pass)
Profile: High
Level: 4.1
GOP Size: 30
B-frames: 3
Audio: AAC 128kbps stereo
```

### Mobile/Fallback Version (720p)
**Target:** 25-40MB file size, good quality

**DaVinci Resolve Settings:**
```
Format: MP4
Codec: H.264
Resolution: 1280x720
Frame Rate: [Match original]
Bitrate: 5 Mbps (Variable, 2-pass)
Profile: High
Level: 3.1
GOP Size: 30
B-frames: 2
Audio: AAC 96kbps stereo
```

## Step-by-Step Export in DaVinci Resolve

### For 1080p Version:
1. **Deliver Page** → **Add to Render Queue**
2. **Format:** MP4
3. **Codec:** H.264
4. **Resolution:** Custom → 1920x1080
5. **Frame Rate:** Same as timeline
6. **Quality:**
   - Restrict to: 10000 kbps
   - Encoding profile: High
   - Keyframe distance: 30
7. **Audio:** Linear PCM → AAC, 48kHz, Stereo, 128kbps
8. **Filename:** `founder-video-1080p.mp4`

### For 720p Version:
1. Repeat above steps but change:
   - **Resolution:** 1280x720
   - **Bitrate:** 5000 kbps
   - **Audio:** 96kbps
   - **Filename:** `founder-video-720p.mp4`

## Upload Instructions

After exporting both versions:

1. **Open Object Storage panel** in Replit
2. **Navigate to:** `public/videos/` directory
3. **Upload both files:**
   - `founder-video-1080p.mp4`
   - `founder-video-720p.mp4`

The video player will automatically serve the best quality based on user's connection and device capabilities.

## Quality Comparison

| Version | File Size | Quality | Use Case |
|---------|-----------|---------|----------|
| Original 4K H.265 | 500MB | Excellent | Too large for web |
| 1080p H.264 | 50-80MB | High | Desktop/laptop users |
| 720p H.264 | 25-40MB | Good | Mobile users, slower connections |

## Benefits of This Approach

- **90% smaller file sizes** while maintaining visual quality
- **Faster loading** across all devices and connections
- **Better browser compatibility** with H.264
- **Adaptive streaming** - browser chooses best version
- **Professional presentation** with custom player controls

## Advanced Tips

- **2-pass encoding** provides better quality at same file size
- **Variable bitrate** optimizes for content complexity
- **Metadata optimization** ensures fast startup
- **Progressive download** allows viewing while downloading

Your videos will load quickly and look professional while keeping visitors engaged on your site instead of waiting for large files to buffer.