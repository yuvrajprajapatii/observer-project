Observer

AI-Powered Personalized Career Guidance Platform

Overview

Observer is an AI-driven platform designed to help students from all backgrounds discover their true potential through personalized interest mapping, hybrid career pathways, and customized learning roadmaps.

Vision

To democratize access to world-class career guidance by providing early exposure to global opportunities, interdisciplinary career paths, and personalized learning resources regardless of geographical or socioeconomic barriers.

Current Status

This project is currently under active development. Core features are being built iteratively.

Development Phases

- Phase 1 (Completed): Authentication system and database architecture
- Phase 2 (In Progress): Interest discovery and AI-powered profiling
- Phase 3 (Planned): Subject synergy mapping and dynamic roadmap generation

Technology Stack

- Framework: Next.js 14 with App Router
- Database: MongoDB with Prisma ORM
- Authentication: NextAuth.js
- Styling: Tailwind CSS
- Deployment: Vercel (planned)

Project Structure

observer-project/
├── app/
│ ├── (auth)/
│ ├── api/
│ ├── dashboard/
│ └── globals.css
├── components/
│ ├── ui/
│ ├── forms/
│ └── layout/
├── lib/
│ ├── auth.ts
│ ├── db.ts
│ └── utils.ts
├── prisma/
│ └── schema.prisma
├── public/
└── types/


Getting Started (Local)

Prerequisites

- Node.js 18+ (use `nvm` if needed)
- npm or yarn
- MongoDB Atlas or local MongoDB
- OAuth credentials (Google / GitHub) if using social login

Setup

1. Clone the repo
   ```bash
   git clone https://github.com/yuvrajprajapatii/observer-project.git

   cd observer-project

Install dependencies

npm install

Set up environment variables:

cp .env.example .env

Configure your environment variables in the .env file.


Set up the database:

npx prisma generate
npx prisma db push


Run the development server:

npm run dev


Open http://localhost:3000 to view the application.

Key Features

Implemented

User authentication with multiple providers

Responsive design system

Database models for users and interests

API route structure

In Development

Interest discovery assessment

AI-powered career path recommendations

Personalized learning roadmap

Resource aggregation engine

Planned

Multi-language support

Mentorship matching system

Progress tracking and analytics

Parental dashboard and controls

Security and Privacy

- All sensitive credentials are stored in environment variables (never committed to Git)

- User data is encrypted at rest (MongoDB encryption)

- Authentication uses NextAuth with secure session management

- Parental consent mechanisms for users under 13

- GDPR-compliant data deletion options (planned)

Note: This is a development version. Production deployment will include additional hardening.

Contributing

This project is currently in private development by solo developer Yuvraj Prajapati. Public contributions will be welcomed after the initial release. For collaboration inquiries, please contact the project maintainer.

License

Proprietary License
 
Copyright (c) 2025 Yuvraj Prajapati

This software is currently under private development.

A public license will be specified upon release.

All rights reserved.

Support

For technical support or questions about this project:

Create an issue in the GitHub repository: github.com/yuvrajprajapatii/observer-project

Contact the developer directly via: yuvrajprajapati.com

Complete Vision & Mission

For the complete vision statement, detailed project goals, and the full story behind Observer's mission to transform global education accessibility, visit:project section at yuvrajprajapati.com