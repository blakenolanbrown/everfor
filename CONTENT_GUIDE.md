# EVERfor Content Update Guide

This guide shows you how to easily update all the text, videos, and images on your website.

## Quick Updates

All content is managed through one file: `client/src/config/content.ts`

### Updating Video Gallery

1. **Get your YouTube video ID**:
   - From `https://youtube.com/watch?v=ABC123` → the ID is `ABC123`

2. **Update the videos in content.ts**:
   ```typescript
   videos: [
     {
       id: "1",
       title: "Your Video Title",
       description: "Brief description of the video",
       thumbnailUrl: "https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg",
       videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
       duration: "5:30"
     }
   ]
   ```

### Updating Profile Picture

1. **Add your photo**:
   - Place your photo in the `client/public/` folder (e.g., `profile.jpg`)

2. **Update the path in content.ts**:
   ```typescript
   profile: {
     imageUrl: "/profile.jpg", // Your filename here
     name: "Your Name",
     title: "Your Title"
   }
   ```

### Updating Text Content

All text can be changed directly in `content.ts`:

- **Hero section**: Change `hero.title`, `hero.subtitle`, etc.
- **Navigation**: Update menu items and button text
- **Services**: Modify package names, prices, and descriptions
- **Process steps**: Update the "How It Works" section

### Examples

**Change the main headline**:
```typescript
hero: {
  title: "Your new headline",
  titleHighlight: "continues here.",
}
```

**Update service pricing**:
```typescript
packages: [
  {
    name: "Basic",
    price: "$3,000",
    // ... other details
  }
]
```

**Add your contact information**:
```typescript
profile: {
  name: "Jane Smith",
  title: "Family Legacy Filmmaker",
  bio: "Your personal story and background..."
}
```

## That's It!

The website automatically updates when you save the `content.ts` file. No coding knowledge required - just change the text between the quotes and save the file.