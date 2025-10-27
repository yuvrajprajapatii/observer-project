// app/api/user/profile/route.ts
// User self-service profile endpoints
// GET: Full profile + counts/progress
// PATCH: Safe updates (no email/password)

import { NextRequest, NextResponse } from 'next/server'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
import prisma from '@/lib/db/connection'

// Utility response helpers
function createErrorResponse(message: string, code: string) {
  return { error: message, code }
}

function createSuccessResponse(data: unknown, extra = {}) {
  return { data, ...extra, success: true }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json(
        createErrorResponse('Not logged in', 'UNAUTHORIZED'),
        { status: 401 }
      )
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        id: true,
        email: true,
        name: true,
        age: true,
        grade: true,
        location: true,
        role: true,
        createdAt: true,
      },
    })

    if (!user) {
      return NextResponse.json(
        createErrorResponse('User not found', 'USER_NOT_FOUND'),
        { status: 404 }
      )
    }

    return NextResponse.json(createSuccessResponse(user))
  } catch (error) {
    console.error('[PROFILE_GET_ERROR]', error)
    return NextResponse.json(
      createErrorResponse('Server error', 'SERVER_ERROR'),
      { status: 500 }
    )
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json(
        createErrorResponse('Not logged in', 'UNAUTHORIZED'),
        { status: 401 }
      )
    }

    const body = await request.json()
    const { name, age, grade, location } = body

    const updated = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        ...(name !== undefined && { name }),
        ...(age !== undefined && { age: parseInt(age, 10) || undefined }),
        ...(grade !== undefined && { grade: parseInt(grade, 10) || undefined }),
        ...(location !== undefined && { location }),
      },
      select: {
        id: true,
        email: true,
        name: true,
        age: true,
        grade: true,
        location: true,
        role: true,
      },
    })

    return NextResponse.json(
      createSuccessResponse(updated, { message: 'Profile updated' }),
      { status: 200 }
    )
  } catch (error) {
    console.error('[PROFILE_PATCH_ERROR]', error)
    return NextResponse.json(
      createErrorResponse('Server error', 'SERVER_ERROR'),
      { status: 500 }
    )
  }
}
