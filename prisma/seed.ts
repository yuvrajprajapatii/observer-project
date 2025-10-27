// prisma/seed.ts - Demo loader for Observer (clean human version)

import { PrismaClient, Prisma } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Refreshing Observer demo...')

  // Create demo user (idempotent: upsert)
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
  console.log(`Demo user ensured: ${user.name} (${user.email})`)

  // Learning paths
  const learningPaths = [
    {
      title: 'Quantum Computing Entrepreneur',
      description: 'Fuse physics breakthroughs with startup grit to quantum-ify the world.',
      category: 'Science',
      difficulty: 'advanced',
      duration: 12,
      tags: ['quantum', 'entrepreneur', 'physics'],
      isPublished: true,
    },
    {
      title: 'EdTech Innovator in STEM',
      description: 'Craft tools that spark science curiosity for every kid.',
      category: 'STEM',
      difficulty: 'intermediate',
      duration: 8,
      tags: ['edtech', 'innovation', 'kids'],
      isPublished: true,
    },
  ]

  for (const pathData of learningPaths) {
    try {
      await prisma.learningPath.create({ data: pathData })
      console.log(`Learning path added: ${pathData.title}`)
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        console.log(`Learning path skipped (already exists): ${pathData.title}`)
      } else {
        throw error
      }
    }
  }

  // EducationContent resources linked to demo user and matching schema fields
  const educationContents = [
    {
      userId: user.id, // link to demo user
      subject: 'Mathematics',
      title: '3Blue1Brown: Essence of Linear Algebra',
      description: 'Visual math that unlocks physics doors—must-watch.',
      source: 'YouTube',
      url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab',
      type: 'VIDEO',
      duration: 180,
      learningStyle: ['visual', 'auditory'],
      difficulty: 'high_school',
      relevance: 10,
      year: 2020,
      sequenceOrder: 1
    },
    {
      userId: user.id,
      subject: 'Business',
      title: 'Y Combinator: How to Start a Startup',
      description: 'Raw startup wisdom—biz for future innovators.',
      source: 'Y Combinator',
      url: 'https://www.startupschool.org/',
      type: 'COURSE',
      duration: 600,
      learningStyle: ['auditory', 'reading'],
      difficulty: 'intermediate',
      relevance: 10,
      year: 2023,
      sequenceOrder: 2
    },
  ]

  for (const contentData of educationContents) {
    try {
      await prisma.educationContent.create({ data: contentData })
      console.log(`Education content added: ${contentData.title}`)
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        console.log(`Education content skipped (already exists): ${contentData.title}`)
      } else {
        throw error
      }
    }
  }

  // Demo Recommendation
  const firstPath = await prisma.learningPath.findFirst()
  if (firstPath) {
    // Add recommendation seeding code here if you add a Recommendation model in your schema.
    console.log('First learning path found:', firstPath.title)
  }

  console.log('Demo refresh complete. Use: npm run db:studio')
}

main()
  .catch(e => {
    console.error('Seed error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
