# AI Assistant Chatbot

A powerful AI-powered chatbot platform that enables real-time conversations with AI agents, built with modern web technologies and featuring comprehensive admin capabilities.

## Features

### 🤖 Core Functionality

- **Real-time AI Chat**: 1-on-1 conversations with AI agents powered by OpenAI Completions API
- **Custom Chatbots**: Create unique chatbots with shareable links for public access
- **Intelligent Responses**: AI agents respond to user queries with contextual understanding

### 🔐 Authentication & Security

- **Google Authentication**: Seamless user login via Clerk Auth integration
- **Secure Sessions**: Protected user sessions and data management

### 📊 Admin Dashboard

- **Chatbot Management**: Create, edit, and configure new AI chatbots
- **Prompt Engineering**: Customize AI behavior through editable prompts
- **Chat History**: View and analyze all previous conversations
- **Admin Controls**: Comprehensive oversight of all platform activities

### 🎨 User Experience

- **Modern UI/UX**: Beautiful interface built with Shadcn and DaisyUI components
- **Responsive Design**: Optimized for desktop and mobile experiences
- **Real-time Updates**: Instant message delivery and response handling

## Tech Stack

### Frontend

- **Next.js** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Modern component library
- **DaisyUI** - Additional UI components

### Backend & Database

- **PostgreSQL** - Primary database (hosted on Neon)
- **GraphQL** - API query language
- **Apollo Client** - GraphQL client for data fetching
- **StepZen** - GraphQL API generation from PostgreSQL

### Authentication & APIs

- **Clerk** - Authentication and user management
- **OpenAI API** - AI completions and responses
- **IBM API** - PostgreSQL integration services

### Performance & Optimization

- **Next.js Caching** - Optimized data fetching and response times
- **Server Components** - Efficient server-side rendering
- **Server Actions** - Streamlined server-side operations

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (Neon account recommended)
- OpenAI API key
- Clerk account for authentication
- StepZen account for GraphQL API

## Key Components

### Server Components vs Client Components

- **Server Components**: Used for data fetching, authentication checks, and static content
- **Client Components**: Interactive elements, real-time chat, form submissions

### Caching Strategy

- **Next.js Cache**: Optimized data fetching with automatic revalidation
- **Apollo Cache**: GraphQL query results cached for performance
- **Server Actions**: Efficient server-side operations with built-in caching
