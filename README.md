# Observer

[![Status](https://img.shields.io/badge/Status-Active%20Development-blue)](https://github.com/yuvrajprajapatii/observer-project)
[![License](https://img.shields.io/badge/License-Proprietary-red)](https://github.com/yuvrajprajapatii/observer-project/blob/main/LICENSE)

## AI-Powered Personalized Career Guidance Platform

### Overview
Observer is an AI-driven platform designed to help students from all backgrounds discover their true potential through personalized interest mapping, hybrid career pathways, and customized learning roadmaps.

<details>
<summary>Quick Demo (Click to Expand)</summary>

> **Imagine a student logging in and instantly receiving a tailored career roadmap based on their interests in AI and environmental science.**  
> 
> ![Demo GIF Placeholder](https://via.placeholder.com/800x400?text=Observer+Demo) <!-- Replace with actual GIF URL when available -->
> 
> *Note: Demo visuals coming soon in Phase 2!*

</details>

### Vision
To democratize access to world-class career guidance by providing early exposure to global opportunities, interdisciplinary career paths, and personalized learning resources regardless of geographical or socioeconomic barriers.

### Current Status
This project is currently **under active development**. Core features are being built iteratively.

| Phase | Status | Description |
|-------|--------|-------------|
| **Phase 1** | Completed | Authentication system and database architecture |
| **Phase 2** | In Progress | Interest discovery and AI-powered profiling |
| **Phase 3** | Planned | Subject synergy mapping and dynamic roadmap generation |

### Technology Stack
| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Database** | MongoDB + Prisma ORM |
| **Authentication** | NextAuth.js |
| **Styling** | Tailwind CSS |
| **Deployment** | Vercel (planned) |

### Project Structure
```
observer-project/
├── app/
│   ├── (auth)/          # Authentication routes
│   ├── api/             # API endpoints
│   ├── dashboard/       # User dashboard pages
│   └── globals.css      # Global styles
├── components/
│   ├── ui/              # Reusable UI components
│   ├── forms/           # Form components
│   └── layout/          # Layout components
├── lib/
│   ├── auth.ts          # Auth utilities
│   ├── db.ts            # Database connection
│   └── utils.ts         # General utilities
├── prisma/
│   └── schema.prisma    # Database schema
├── public/              # Static assets
└── types/               # TypeScript definitions
```

## Getting Started (Local Development)

### Prerequisites
- Node.js 18+ ([Install with nvm](https://github.com/nvm-sh/nvm) if needed)
- npm or yarn
- MongoDB Atlas account or local MongoDB instance
- OAuth credentials (Google/GitHub) for social login (optional)

### Setup Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yuvrajprajapatii/observer-project.git
   cd observer-project
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   ```bash
   cp .env.example .env
   ```
   - Edit `.env` with your MongoDB URI, OAuth secrets, etc.

4. **Set Up Database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the Development Server**
   ```bash
   npm run dev
   ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Pro Tip:** Use `npm run build` to test production builds locally.

## Key Features

### Implemented
- User authentication with multiple providers (Email, Google, GitHub)
- Responsive design system with Tailwind CSS
- Database models for users, interests, and profiles
- Structured API routes for core operations

### In Development
- Interest discovery assessment (AI-driven quizzes)
- AI-powered career path recommendations
- Personalized learning roadmap generator
- Resource aggregation engine (articles, courses, videos)

### Planned
- Multi-language support
- Mentorship matching system
- Progress tracking and analytics dashboard
- Parental dashboard and controls

## Security and Privacy
- **Environment Variables:** All sensitive credentials (e.g., API keys) are stored in `.env` (never committed to Git).
- **Data Encryption:** User data encrypted at rest using MongoDB's built-in encryption.
- **Authentication:** Secure session management via NextAuth.js.
- **Age Compliance:** Parental consent mechanisms for users under 13.
- **Data Rights:** GDPR-compliant deletion options (planned for Phase 3).

> **Note:** This is a development version. Production will include rate limiting, OWASP best practices, and audit logs.

## Contributing
This project is currently in **private development** by solo developer [Yuvraj Prajapati](https://yuvrajprajapati.com). Public contributions will be welcomed after the initial release (target: Q1 2026).

- **Interested in Collaborating?** Reach out via email or the contact form on [yuvrajprajapati.com](https://yuvrajprajapati.com).
- **Guidelines:** Follow standard GitHub flow (fork, branch, PR). See [CONTRIBUTING.md](https://github.com/yuvrajprajapatii/observer-project/blob/main/CONTRIBUTING.md) (coming soon).

## License
**Proprietary License**  
Copyright © 2025 [Yuvraj Prajapati](https://yuvrajprajapati.com)  

This software is under private development. A public open-source license (e.g., MIT) will be applied upon stable release. All rights reserved.

## Support
- **Issues & Bugs:** [Create a GitHub Issue](https://github.com/yuvrajprajapatii/observer-project/issues)
- **General Questions:** Visit the [project page](https://yuvrajprajapati.com/projects/observer) or email support@yuvrajprajapati.com
- **Discussions:** Join the conversation on [X (Twitter)](https://x.com/yuvrajprajapati) or LinkedIn.

### 🌟 Complete Vision & Mission
For the full story behind Observer's mission to transform global education accessibility, check out the detailed [project section](https://yuvrajprajapati.com/projects/observer).

---

⭐ **Star this repo if you're excited about personalized AI career guidance!**  
Built with ❤️ by [Yuvraj Prajapati](https://yuvrajprajapati.com) | [Follow Updates](https://github.com/yuvrajprajapatii/observer-project/releases)
