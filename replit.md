# LeveL7 MSP & Digital Marketing Agency

## Overview

LeveL7 is a comprehensive MSP (Managed Service Provider) and digital marketing agency website built for small service businesses. The application features a modern, dark-themed design with gradient elements and provides information about business automation, lead management, and technology services. The site includes a contact form system that captures leads and integrates with external webhooks for automated processing.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom color palette and dark theme design
- **State Management**: TanStack Query for server state and React hooks for local state
- **Design System**: Custom design based on SurrealDB aesthetic with purple/pink/blue gradient color scheme

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **API Pattern**: RESTful endpoints with JSON responses
- **Request Handling**: Express middleware for logging, JSON parsing, and error handling
- **Development Setup**: Hot reloading with Vite integration for full-stack development

### Data Storage Solutions
- **Primary Database**: PostgreSQL (configured via Drizzle but can be provisioned separately)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL driver
- **Fallback Storage**: In-memory storage implementation for development/testing

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Contact Submissions Table**: Lead capture with fields for name, email, company, phone, service interest, and message
- **Data Validation**: Zod schemas for runtime type checking and API validation

### Authentication and Authorization
- **Current Implementation**: Basic user schema exists but no active authentication flow
- **Session Management**: Connect-pg-simple configured for PostgreSQL session storage
- **Security**: Input validation through Zod schemas and sanitized database queries

### API Structure
- **Contact Endpoint**: POST `/api/contact` for lead submission with webhook integration
- **Error Handling**: Centralized error middleware with structured JSON responses
- **Logging**: Request/response logging with performance metrics
- **Validation**: Schema-based request validation with detailed error messages

### Development and Build Process
- **Development**: Concurrent frontend (Vite) and backend (tsx) development servers
- **Production Build**: Vite builds frontend to `dist/public`, esbuild bundles backend to `dist/`
- **Type Safety**: Full TypeScript coverage with shared types between frontend and backend
- **Path Aliases**: Configured aliases for clean imports (@/, @shared/, @assets/)

## External Dependencies

### Core Technologies
- **Database**: PostgreSQL via Neon Database serverless
- **UI Framework**: Radix UI primitives for accessible components
- **HTTP Client**: Native fetch API for server requests
- **Form Handling**: React Hook Form with Hookform resolvers

### Third-Party Services
- **Webhook Integration**: Configurable webhook URL for lead forwarding (WEBHOOK_URL environment variable)
- **Font Service**: Google Fonts (Inter font family)
- **Development Tools**: Replit integration for development environment

### Build and Development Tools
- **Bundler**: Vite for frontend, esbuild for backend
- **CSS Processing**: PostCSS with Tailwind CSS and Autoprefixer
- **Code Quality**: TypeScript for type safety, ESLint configuration ready
- **Asset Management**: Vite asset handling with attached_assets directory

### Design and UI Libraries
- **Component Library**: Comprehensive shadcn/ui components (50+ components)
- **Icons**: Lucide React icon library
- **Styling Utilities**: Class Variance Authority (CVA) for component variants
- **Animations**: Tailwind CSS animations with custom transitions

### Data and State Management
- **Query Management**: TanStack React Query for server state caching
- **Form Validation**: Zod for schema validation and type inference
- **Date Handling**: date-fns for date manipulation utilities
- **Carousel/Sliders**: Embla Carousel for interactive components