// app/api/auth/register/route.ts
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import prisma from '@/lib/db/connection'
import { z } from 'zod'

// Validation schema
const RegisterSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Validate input
    const { email, password, name } = RegisterSchema.parse(body)

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 409 }
      )
    }

    // Hash password
    const passwordHash = await bcryptjs.hash(password, 10)

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        name,
        passwordHash,
        role: 'STUDENT',
      },
    })

    // Don't return passwordHash
    const { passwordHash: omitted, ...userWithoutPassword } = user

    return NextResponse.json(
      {
        message: 'User registered successfully',
        user: userWithoutPassword,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[REGISTER_ERROR]', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0]?.message || 'Validation error' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 500 }
    )
  }
}
