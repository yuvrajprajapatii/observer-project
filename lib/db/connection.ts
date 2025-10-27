// lib/db/connection.ts
import { PrismaClient } from '@prisma/client'

// Create prisma client singleton factory
const prismaClientSingleton = () => new PrismaClient()

// Extend the NodeJS.Global interface to include 'prisma'
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

// Use the existing prisma instance if available, else create a new one
const prisma = globalThis.prisma ?? prismaClientSingleton()

// Assign the prisma instance to globalThis in development to preserve singleton
if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma
}

export default prisma
