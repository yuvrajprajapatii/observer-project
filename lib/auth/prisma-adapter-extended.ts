// lib/auth/prisma-adapter-extended.ts
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '@/lib/db/connection'

export const prismaAdapter = PrismaAdapter(prisma)
