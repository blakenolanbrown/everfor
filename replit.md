# EVERfor Family Legacy Platform

## Overview

EVERfor is a professional family legacy video preservation platform that connects families with videography services to capture and preserve precious family stories before they're lost forever. The application is built as a modern single-page web application with a focus on emotional storytelling and premium service offerings. Services are offered in three tiers: Essential ($5K), Signature ($10K), and Eternal ($20K).

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Minimalist, timeless aesthetic over heavy-handed emotional messaging.
Content tone: Reverent and subtle rather than pushy about urgency.
Brand positioning: High-end legacy video services with sophisticated, cinematic quality.

## System Architecture

The application follows a full-stack TypeScript architecture with a clear separation between client and server concerns:

- **Frontend**: React-based single-page application with modern UI components
- **Backend**: Express.js server with RESTful API architecture
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Styling**: Tailwind CSS with a sophisticated design system
- **State Management**: React Query for server state management
- **Build System**: Vite for fast development and optimized production builds

## Key Components

### Frontend Architecture
- **React with TypeScript**: Type-safe component development
- **Wouter**: Lightweight client-side routing
- **React Query**: Server state management and caching
- **Shadcn/ui**: Premium UI component library built on Radix UI
- **Tailwind CSS**: Utility-first styling with custom brand colors

### Backend Architecture
- **Express.js**: Lightweight web server framework
- **TypeScript**: Type safety across the entire backend
- **Drizzle ORM**: Type-safe database query builder
- **In-memory storage**: Temporary storage solution for development

### Database Schema
The application uses a simple lead capture schema:
- **leads table**: Stores contact form submissions with fields for name, email, phone, package selection, and message
- **PostgreSQL**: Production database with UUID primary keys and timestamp tracking

### UI Design System
- **Brand Colors**: Gold (#E6B73A), Navy (#3A4A66), Cream (#FDFCF5)
- **Typography**: Playfair Display for headings, system fonts for body text
- **Component Library**: Comprehensive set of reusable UI components

## Data Flow

1. **User Interaction**: Visitors browse the marketing site and submit contact forms
2. **Form Submission**: Contact data is validated using Zod schemas and sent to the API
3. **Data Storage**: Lead information is stored in the database via Drizzle ORM
4. **Response Handling**: Success/error feedback provided through toast notifications
5. **Admin Access**: Lead data can be retrieved via API endpoints for management

## External Dependencies

### Core Framework Dependencies
- **React ecosystem**: React, React DOM, React Query for frontend
- **Express.js**: Web server framework
- **Drizzle**: Database ORM and migrations
- **Radix UI**: Headless UI primitives for accessibility

### Styling and UI
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide Icons**: Consistent iconography
- **Class Variance Authority**: Component variant management

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript/TypeScript bundler

### Database
- **@neondatabase/serverless**: PostgreSQL database driver
- **Drizzle Kit**: Database migration and introspection tools

## Deployment Strategy

The application is configured for deployment with:

- **Build Process**: Vite builds the client, ESBuild bundles the server
- **Environment Variables**: DATABASE_URL for database connection
- **Static Asset Serving**: Express serves built client files in production
- **Database Migrations**: Drizzle Kit handles schema changes

### Development vs Production
- **Development**: Vite dev server with HMR, in-memory storage fallback
- **Production**: Built static assets served by Express, PostgreSQL database

The architecture supports easy scaling from development to production while maintaining type safety and developer experience throughout the stack.

## Recent Changes

**August 18, 2025 - Self-Hosted Video Infrastructure**
- ✓ Set up complete object storage system for video hosting
- ✓ Created professional video player with brand-matched controls
- ✓ Implemented adaptive video serving with loading states
- ✓ Configured founder video for direct website hosting (66.42MB optimized)
- ✓ Eliminated YouTube redirects - visitors stay engaged on site
- ✓ Enhanced conversion optimization through seamless video experience

**July 31, 2025 - Video Integration & Content Refinement**
- ✓ Integrated live Calendly booking system with real URL (blakenolanbrown/legacy-video-discovery-call)
- ✓ Added couples pricing section with 25% discount ($7,500 for two Essential sessions)
- ✓ Connected Jack & Nita's actual YouTube videos with authentic thumbnails
- ✓ Updated package naming: Essential/Premium/Elite → Essential/Signature/Eternal
- ✓ Rewrote "Why I Created EVERfor" with powerful, personal narrative about grandmother's loss
- ✓ Implemented consistent placeholder design across all video elements
- ✓ Refined messaging: "EVERfor them. EVERfor you." and removed "cinematic" references
- ✓ Enhanced text contrast in couples pricing section for better readability
- ✓ Positioned couples pricing strategically after main service packages for maximum impact

**July 30, 2025 - Website Redesign & Content Management**
- ✓ Transformed from bright/aggressive design to calming, sophisticated dark color scheme
- ✓ Implemented muted color palette (deep charcoal, navy, gold accents) for welcoming atmosphere  
- ✓ Fixed readability issues: Enhanced subheading visibility and button prominence
- ✓ Changed messaging to "Their stories deserve to live forever" - reverent, non-urgent tone
- ✓ Updated all call-to-action buttons to "Book a Legacy Session" for clarity and directness
- ✓ Created centralized content management system in `client/src/config/content.ts`
- ✓ Added easy video link updating system with YouTube integration
- ✓ Implemented configurable profile picture and bio system  
- ✓ Created comprehensive content guide (`CONTENT_GUIDE.md`) for easy updates
- ✓ Set contact email to blake@everfor.family and removed phone number
- ✓ Removed startup metrics (families served/years experience) for authentic messaging
- ✓ Fixed footer text readability with proper light grey colors
- ✓ Refined footer tagline to focus on essence over artistry
- ✓ Optimized video gallery subtitle formatting for better visual flow