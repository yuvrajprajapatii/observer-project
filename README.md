# Observer

[![Status](https://img.shields.io/badge/Status-Active%20Development-blue)](https://github.com/yuvrajprajapatii/observer-project)

## AI-Powered Career Guidance Platform (Early Stage)

### Overview

Observer is an early-stage platform helping students discover career paths aligned with their interests and strengths. Built with modern full-stack technology, Observer provides a foundation for exploring personalized career guidance and learning resources at scale.

**Current Stage**: Alpha (Phase 1 - Foundation Building)  
**Target Users**: Students aged 10-24 seeking career exploration  
**Launch Timeline**: Phase 2 (AI features) targeting Q2 2026

---

## The Problem We're Addressing

Career guidance and access to high-quality learning resources remain severely limited for millions of students worldwide, particularly those from rural and underprivileged backgrounds. Our research shows that these students not only lack mentorship and structured counseling but also miss out on exposure to the world’s best free learning resources—the same open courses, research tools, and digital platforms that empower learners in affluent regions to thrive.

This lack of access creates a widening divide: countless talented and curious minds are left behind, unable to explore their true interests or develop the skills demanded by modern industries. As a result, we lose a generation of potential innovators, thinkers, and problem-solvers—not because they lack ability, but because they were never connected to the right opportunities at the right time.

Observer is designed to change this. By leveraging technology and data-driven personalization, our platform identifies each learner’s evolving interests and connects them with curated, world-class, and entirely free educational resources—from MIT OpenCourseWare and Khan Academy to cutting-edge AI and quantum computing repositories. Through adaptive learning pathways, personalized guidance, and community support, we aim to discover hidden talent, nurture it with the best knowledge available globally, and direct it toward meaningful careers.

By democratizing access to the world’s finest learning resources and tailoring them to every learner’s unique curiosity, Observer not only uplifts individuals but also helps the world reclaim lost potential—fueling innovation, equity, and progress across all industries


---

## Our Approach

Observer focuses on three core areas:

1. **Foundation** (Phase 1 - Active): Secure authentication, database infrastructure, and basic profile management
2. **Intelligence** (Phase 2 - Planned Q1-Q2 2026): AI-driven interest assessment and career recommendations
3. **Experience** (Phase 3 - Planned 2026+): Advanced roadmap generation, learning resources, and mentorship matching

Each phase is validated before moving forward. We're prioritizing **quality and security** over rapid feature launches.

---

## Current Status

| Phase | Status | Key Features | Timeline |
|---|---|---|---|
| **Phase 1** | Active Development | ✅ User authentication (email, Google, GitHub) | Sep 2025 - Jan 2026 |
| | | ✅ Database infrastructure (MongoDB + Prisma) | |
| | | ✅ User profile management | |
| | | ⏳ Security hardening & testing (in progress) | |
| **Phase 2** | Planned | Interest assessment engine | Q1-Q2 2026 |
| | | Career recommendation system | |
| | | API documentation & tools | |
| **Phase 3** | Future | Learning roadmaps & resources | 2026+ |
| | | Mentorship matching | |
| | | Multi-language support | |

---

## Technology Stack

Carefully selected for reliability, scalability, and ease of development:

| Component | Technology | Version | Reasoning |
|---|---|---|---|
| **Framework** | Next.js | 14+ | Modern React with built-in optimization |
| **Database** | MongoDB + Prisma | Latest | Flexible schema with type safety |
| **Authentication** | NextAuth.js | v5 (Auth.js) | Industry-standard OAuth/JWT handling |
| **Styling** | Tailwind CSS | Latest | Utility-first CSS framework |
| **Deployment** | Vercel | - | Seamless Next.js deployment |
| **ORM** | Prisma | Latest | Strong typing, built-in validation |

**Important**: NextAuth.js is at v5 (Auth.js). This uses modern OAuth 2.0 standards.


---

## Security Implementation

### Current Protections (Phase 1)

✅ **Authentication**
- NextAuth.js handles OAuth 2.0 / JWT securely
- Passwords hashed with bcrypt (via NextAuth)
- Session tokens are httpOnly cookies

✅ **Database**
- MongoDB encryption at rest (Atlas)
- Prisma ORM prevents SQL injection (N/A for NoSQL, but prevents operator injection via schema validation)

✅ **Environment Variables**
- Sensitive credentials in `.env.local` 


### In Development (Phase 2)

**Rate Limiting**: Protect against brute-force attacks  
 **Input Sanitization**: Comprehensive validation across all endpoints  
**CSRF Protection**: Enhanced cross-site request forgery defenses  
 **Security Audit**: Third-party review before Phase 2 launch

### Not Yet Implemented

**Testing Suite**: Coming in Phase 2  
**GDPR Compliance**: Parental consent for minors (Phase 3)  
**Audit Logging**: Coming in Phase 2  

**⚠️ Important**: This project is early-stage. Do not use with real student data until Phase 2 security hardening is complete.

---

## Roadmap & Timelines

### Phase 1: Foundation (Sep 2025 - Jan 2026)

**Goals**:
- ✅ Secure authentication system
- ✅ User profile management
- 🔄 Comprehensive test suite (in progress)
- 🔄 Security hardening (in progress)

**Deliverables**: Production-ready authentication layer with documented API

### Phase 2: Intelligence (Q1-Q2 2026)

**Goals**:
- Interest assessment questionnaire
- Career recommendation engine (initial version)
- Enhanced security & rate limiting
- Full API documentation

**Deliverables**: AI-driven features with user testing

### Phase 3: Experience (2026+)

**Goals**:
- Personalized learning roadmaps
- Resource aggregation
- Mentorship matching
- Multi-language support
- GDPR & parental consent

**Deliverables**: Production-ready platform for global use


---

## Sustainability & Team

**Current Status**: Solo-led initiative by Yuvraj Prajapati

**Future Plans**: 
- Open contribution model planned for Q1 2026 (post-Phase 1 stabilization)
- Seeking technical partners interested in education + AI


---

## Security & Privacy

### Data Protection

- **In Transit**: HTTPS/TLS required; handled by Vercel
- **At Rest**: MongoDB encryption enabled (Atlas)
- **Access Control**: Role-based via session management

### Privacy Commitments

- User data is never sold or shared with third parties
- OAuth credentials deleted after authentication
- Users can request data deletion (subject to legal requirements)

### Compliance Status

| Standard | Status | Notes |
|---|---|---|
| **GDPR** | Phase 3 | Parental consent & data portability planned |
| **FERPA** | Not Compliant |  Only outside regulated education environments |
| **COPPA** | Phase 3 | Parental consent for <13 not yet implemented |

**⚠️ Legal**: Don't process student data from FERPA-regulated institutions until compliance is certified.

---

## Contributing

### Current Stage

Observer is pre-1.0 and not yet accepting external contributions. However, we welcome:

- **Bug Reports**: Submit via GitHub Issues
- **Feature Ideas**: Discuss in Discussions section

### Future Contribution Guidelines

Detailed contribution guidelines will be published when accepting external PRs (planned Q1 2026).

### Collaboration Opportunities

Interested in partnering on Observer?

- **AI/ML Specialists**: Help build recommendation engine
- **Education Experts**: Advise on career pathway data
- **Security Engineers**: Conduct audits, improve hardening
- **Product Designers**: UX/UI improvements

**Contact**: Yuvraj Prajapati | [contact us](https://yuvrajprajapati.com)

---


## Performance & Scalability

### Current Metrics

- **Response Time**: 200-500ms for authenticated endpoints (development)
- **Database**: Single MongoDB Atlas cluster (free tier)
- **Concurrent Users**: Estimated 100-500 (not load-tested yet)


**Note**: Performance benchmarks coming after Phase 1 completion.

---

## License

MIT License - See [LICENSE](LICENSE) file


Copyright © 2025 Yuvraj Prajapati


---

## Support & Contact

| Channel | Purpose |
|---|---|
| **GitHub Issues** | Bug reports, feature requests |
| **Email** | [Email me](mailto:yuvrajxconnect@gmail.com) |


---

## Project Status Summary

**TL;DR**: Observer is a carefully built but early-stage platform exploring AI-powered career guidance. We're focused on:

1. **Security First**: Building trust with students and parents
2. **Honest Roadmap**: Realistic timelines, no hype
3. **Quality Over Speed**: Thorough testing before features ship


**Join the conversation**: Follow updates on GitHub Releases or connect via email.

---

## Changelog

**v0.1.0-alpha** (October 2025)
- Initial project setup
- Authentication system (email, Google, GitHub)
- User profile management
- Database schema foundation

**Next**: Security hardening (January 2026)

---

**Last Updated**: October 28, 2025  
**Maintained By**: Yuvraj Prajapati  

> Thank you
