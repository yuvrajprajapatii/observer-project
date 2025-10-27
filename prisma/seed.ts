// prisma/seed.ts - Demo loader for Observer
// Loops creates to sidestep Mongo createMany quirks—no skipDuplicates.
// Idempotent-ish: Logs if dupes, but focuses on fresh setup.

import { PrismaClient, ResourceType, Prisma } from '@prisma/client' // Enums + error types
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Refreshing Observer demo...')

  // User: Upsert safe
  const hashedPassword = await bcrypt.hash('password123', 10)
  const user = await prisma.user.upsert({
    where: { email: 'demo@example.com' },
    update: {},
    create: {
      email: 'demo@example.com',
      name: 'Demo Student',
      passwordHash: hashedPassword,
      age: 14,
      grade: 9,
      location: 'India',
      role: 'STUDENT',
    },
  })
  console.log(`✅ User set: ${user.name} (${user.email})`)

  // Paths: Loop create (Mongo-friendly)
  const careerPaths = [
    {
      title: 'Quantum Computing Entrepreneur',
      description:
        'Fuse physics breakthroughs with startup grit to quantum-ify the world.',
      subjectSynergies: ['Physics', 'Business', 'Computer Science'],
      roadmap: {
        years: [
          { year: '9-10', milestones: ['Physics basics', 'Python intro'] },
          { year: '11-12', milestones: ['Quantum mechanics', 'Biz models'] },
          {
            year: 'Undergrad',
            milestones: ['Physics/CS major', 'Startup clubs'],
          },
          { year: 'Graduate', milestones: ['Quantum deep-dive', 'MVP launch'] },
        ],
      },
      requiredSkills: ['Quantum math', 'Coding', 'Pitching', 'Teamwork'],
      challenges: ['Steep learning curve', 'Funding hurdles', 'Tech unknowns'],
      opportunities: ['India quantum hubs', 'VC interest', 'Global patents'],
      roleModels: [
        { name: 'Elon Musk', why: 'Physics → SpaceX empire' },
        { name: 'Peter Diamandis', why: 'Med + Eng → XPRIZE wins' },
      ],
      realWorldApps: ['Faster AI', 'Secure nets', 'Med sims'],
      difficulty: 'advanced',
      avgDuration: 12,
    },
    {
      title: 'EdTech Innovator in STEM',
      description: 'Craft tools that spark science curiosity for every kid.',
      subjectSynergies: ['Computer Science', 'Education', 'Design'],
      roadmap: {
        years: [
          { year: '9-10', milestones: ['Code games', 'Kid learning psych'] },
          { year: '11-12', milestones: ['App prototypes', 'UX sketches'] },
          { year: 'Undergrad', milestones: ['CS core', 'Ed internships'] },
          {
            year: 'Early Career',
            milestones: ['Edtech gigs', 'Portfolio apps'],
          },
        ],
      },
      requiredSkills: ['React dev', 'User tests', 'Story design', 'Metrics'],
      challenges: ['Kid engagement', 'Budget constraints', 'Scale pains'],
      opportunities: ['Ed boom in India', 'Impact funds', 'Freelance gigs'],
      roleModels: [
        { name: 'Sal Khan', why: 'Math + Tech → Free global school' },
        { name: 'Susan Wojcicki', why: 'Econ + Leadership → YouTube growth' },
      ],
      realWorldApps: ['AI tutors', 'VR labs', 'Quiz platforms'],
      difficulty: 'intermediate',
      avgDuration: 8,
    },
  ]

  for (const pathData of careerPaths) {
    try {
      await prisma.careerPath.create({ data: pathData })
      console.log(`✅ Path added: ${pathData.title}`)
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        console.log(`⚠️ Path exists: ${pathData.title} (skipped)`)
      } else {
        throw error // Bubble real issues
      }
    }
  }

  // Resources: Same loop, enum-typed
  const resources = [
    {
      title: '3Blue1Brown: Essence of Linear Algebra',
      description: 'Visual math that unlocks physics doors—must-watch.',
      url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab',
      type: ResourceType.VIDEO,
      subjects: ['Mathematics', 'Physics'],
      language: 'en',
      difficulty: 'high_school',
      duration: 180,
      provider: 'YouTube',
      rating: 4.9,
      viewCount: 1000000,
      learningStyle: ['visual', 'auditory'],
      tags: ['linear algebra', 'viz', 'math'],
    },
    {
      title: 'Y Combinator: How to Start a Startup',
      description: 'Raw startup wisdom—biz for future innovators.',
      url: 'https://www.startupschool.org/',
      type: ResourceType.COURSE,
      subjects: ['Business', 'Entrepreneurship'],
      language: 'en',
      difficulty: 'intermediate',
      duration: 600,
      provider: 'Y Combinator',
      rating: 4.7,
      viewCount: 500000,
      learningStyle: ['auditory', 'reading'],
      tags: ['startup', 'biz', 'founders'],
    },
  ]

  for (const resData of resources) {
    try {
      await prisma.resource.create({ data: resData })
      console.log(`✅ Resource added: ${resData.title}`)
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        console.log(`⚠️ Resource exists: ${resData.title} (skipped)`)
      } else {
        throw error
      }
    }
  }

  // Rec: Simple create (assumes path exists)
  const firstPath = await prisma.careerPath.findFirst()
  if (firstPath) {
    try {
      await prisma.recommendation.create({
        data: {
          userId: user.id,
          careerPathId: firstPath.id,
          reasoning: 'Physics spark + biz curiosity = quantum future.',
          confidenceScore: 0.92,
          priority: 1,
        },
      })
      console.log('✅ Rec linked: Demo to first path')
    } catch (error) {
      console.log('⚠️ Rec skipped (exists)')
    }
  }

  console.log('🎉 Demo refreshed! Studio: npm run db:studio')
}

main()
  .catch(e => {
    console.error('❌ Seed snag:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
