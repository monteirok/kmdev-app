# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server  
- `npm run lint` - Run ESLint linter

## Project Architecture

This is a Next.js 15 portfolio website built with TypeScript, React 19, and Tailwind CSS. The project uses the App Router pattern and is deployed on Vercel with analytics integration.

### Key Technologies
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **UI Components**: Radix UI primitives via shadcn/ui
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics and Speed Insights
- **Animations**: Framer Motion

### Project Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - React components including custom and shadcn/ui components
- `components/ui/` - shadcn/ui component library
- `lib/` - Utility functions and configurations
- `hooks/` - Custom React hooks
- `public/` - Static assets and images

### Component Architecture
The site follows a single-page application pattern with main sections:
- `HeroSection` - Landing/introduction area
- `ProjectsSection` - Portfolio projects display
- `ContactSection` - Contact information
- `Footer` - Site footer

### Design System
- Uses shadcn/ui for consistent component patterns
- Tailwind CSS for styling with CSS variables for theming
- Dark theme with black background and gray accents
- Responsive design with mobile-first approach

### Build Configuration  
- TypeScript and ESLint errors are ignored during builds (configured in next.config.mjs)
- Images are unoptimized for deployment flexibility
- Tailwind configured with custom color tokens and animations

This is a v0.dev generated project that syncs automatically with the v0.dev platform.