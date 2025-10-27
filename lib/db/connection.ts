// lib/db/connection.ts
// Singleton pattern for PrismaClient to prevent connection pooling issues

import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  let prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

// Prevent hot-reload from creating new connections
if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma
}
