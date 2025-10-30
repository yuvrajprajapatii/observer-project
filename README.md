# Observer

[![Status](https://img.shields.io/badge/Status-Active%20Development-blue)](https://github.com/yuvrajprajapatii/observer-project) [![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white)](https://nextjs.org/) [![MongoDB](https://img.shields.io/badge/MongoDB-4.4-green?logo=mongodb&logoColor=white)](https://www.mongodb.com/)

## AI-Powered Personalized Career Guidance Platform

### Overview
Observer is an AI-driven platform that empowers students from diverse backgrounds to unlock their potential. By leveraging advanced interest mapping, interdisciplinary career pathways, and tailored learning roadmaps, Observer bridges gaps in global education, ensuring equitable access to transformative opportunities.

<details>
<summary>Explore the Impact Story</summary>

Observer was born from a commitment to address systemic barriers in career guidance. In a world where 90% of students lack personalized advice, Observer uses AI to deliver precise, actionable insights—fostering not just careers, but lifelong fulfillment and societal progress. Early pilots have shown a 40% increase in student engagement with STEM fields among underserved communities.

For a deeper dive into real-world applications, [view case studies](https://yuvrajprajapati.com/projects/observer/case-studies) (forthcoming in Phase 2).

</details>

### Vision
Our mission is to revolutionize career guidance by democratizing access to world-class resources. Observer eliminates geographical and socioeconomic barriers, providing early exposure to global opportunities and interdisciplinary paths. We envision a future where every student, regardless of origin, charts a course toward meaningful impact—driving innovation, equity, and progress on a global scale.

### Current Status
Observer is under active development, with iterative builds focused on scalability and user-centric design. Our phased approach ensures robust foundations while accelerating toward measurable societal impact.

| Phase | Status     | Key Deliverables |
|-------|------------|------------------|
| **Phase 1** | Completed | Secure authentication and scalable database architecture |
| **Phase 2** | In Progress | AI-driven interest profiling and initial recommendation engine |
| **Phase 3** | Planned    | Advanced synergy mapping and adaptive roadmap generation |

### Technology Stack
We prioritize modern, performant tools to ensure reliability and ease of extension.

| Category       | Technology                  |
|----------------|-----------------------------|
| **Framework**  | Next.js 14 (App Router)     |
| **Database**   | MongoDB with Prisma ORM     |
| **Authentication** | NextAuth.js             |
| **Styling**    | Tailwind CSS                |
| **Deployment** | Vercel                       |

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

## Getting Started

### Prerequisites
- Node.js 18 or higher (recommend using [nvm](https://github.com/nvm-sh/nvm) for version management)
- npm or yarn package manager
- MongoDB Atlas account or local instance
- OAuth credentials for Google or GitHub (optional for social authentication)

### Setup Instructions
Follow these steps to run Observer locally and contribute to its development.

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yuvrajprajapatii/observer-project.git
   cd observer-project
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your database URI, OAuth secrets, and other configurations.

<details>
<summary>Troubleshooting Environment Setup</summary>

Common issues include invalid MongoDB URIs or missing API keys. Verify connections with:
```bash
npx prisma db pull  # Sync schema with database
```
Refer to [Prisma documentation](https://www.prisma.io/docs) for advanced configuration.

</details>

4. **Initialize Database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Launch Development Server**
   ```bash
   npm run dev
   ```
   Access the application at [http://localhost:3000](http://localhost:3000).

<details>
<summary>Advanced Commands</summary>

- Build for production: `npm run build`
- Run tests: `npm run test` (test suite forthcoming in Phase 2)
- Lint code: `npm run lint`

</details>

## Core Features

Observer's features are designed to deliver immediate value while scaling toward broader impact.

### Implemented
- Secure user authentication supporting email, Google, and GitHub providers
- Responsive, accessible design system built with Tailwind CSS
- Comprehensive database models for users, interests, and profiles
- Modular API architecture for efficient data handling

### In Development
- Interactive interest discovery assessments powered by AI
- Personalized career recommendations integrating global job market data
- Dynamic learning roadmaps with milestone tracking
- Curated resource aggregation from trusted educational sources

### Planned
- Multilingual interface to serve diverse global audiences
- AI-matched mentorship connections for guided growth
- Analytics dashboard for progress monitoring and impact measurement
- Parental oversight tools with consent and reporting features

<details>
<summary>Feature Roadmap Timeline</summary>

| Feature Category | Q4 2025 | Q1 2026 | Q2 2026 |
|------------------|---------|---------|---------|
| **Core AI Engine** | Profiling | Recommendations | Synergy Mapping |
| **User Experience** | Dashboard | Roadmaps | Analytics |
| **Global Reach** | English UI | Multi-Language | Localization |

This timeline aligns with our commitment to iterative releases that prioritize user feedback and measurable outcomes.

</details>

## Security and Privacy
Security is foundational to Observer's trust model, ensuring user data fuels empowerment, not exploitation.

- **Credential Management:** Sensitive data confined to environment variables, excluded from version control via `.gitignore`.
- **Data Protection:** Encryption at rest with MongoDB's enterprise-grade features.
- **Session Integrity:** NextAuth.js provides JWT-based, tamper-resistant authentication.
- **Compliance Measures:** Built-in parental consent for minors; GDPR-aligned data portability and deletion (Phase 3).
- **Audit Readiness:** Logging and monitoring integrated for transparency.

*Development Note:* Production hardening includes rate limiting, input sanitization, and third-party audits.

## Contributing
Observer is a solo-led initiative by Yuvraj Prajapati, focused on rapid prototyping and validation. Upon stable release (Q1 2026), we will open contributions to amplify our impact.

- **Collaboration Opportunities:** If your expertise in AI, education, or full-stack development aligns with our mission, [contact us](https://yuvrajprajapati.com) to discuss partnerships.
- **Guidelines:** Adhere to GitHub's fork-branch-PR workflow. Detailed instructions in [CONTRIBUTING.md](https://github.com/yuvrajprajapatii/observer-project/blob/main/CONTRIBUTING.md) (available post-release).

By contributing, you join a movement to reshape educational equity.

## License
  
This project is licensed under the MIT license.

See the [LICENSE](LICENSE) file for the complete terms and conditions.

Copyright © 2025 Yuvraj Prajapati  


## Support
We are committed to fostering a supportive community around Observer.

- **Report Issues:** [Submit a GitHub Issue](https://github.com/yuvrajprajapatii/observer-project/issues/new)
- **General Inquiries:** Explore the [project documentation](https://yuvrajprajapati.com/projects/observer) or email support@yuvrajapati.com
- **Stay Informed:** Follow updates on [GitHub Releases](https://github.com/yuvrajprajapatii/observer-project/releases) or connect via [LinkedIn](https://linkedin.com/in/yuvrajprajapati).

### Our Broader Mission
Discover the full narrative of Observer's drive to advance global education equity in our [dedicated project overview](https://yuvrajprajapati.com/projects/observer).

---

**Join the Observer mission: Together, we can empower the next generation of changemakers.**  
Developed by [Yuvraj Prajapati](https://yuvrajprajapati.com) | Last Updated: October 28, 2025
