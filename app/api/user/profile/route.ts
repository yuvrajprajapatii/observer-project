// app/api/user/profile/route.ts - User self-service
// GET: Full profile + counts/progress. PATCH: Safe updates (no email/pw).

import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/db/connection';
import { createErrorResponse, createSuccessResponse } from '@/lib/utils';

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json(createErrorResponse('Not logged in', 'UNAUTHORIZED'), { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        id: true, email: true, name: true, age: true, grade: true, location: true, preferredLang: true, role: true,
        createdAt: true, lastLoginAt: true,
        _count: { select: { assessments: true, recommendations: true } },
      },
    });

    if (!user) {
      return NextResponse.json(createErrorResponse('User missing', 'USER_NOT_FOUND'), { status: 404 });
    }

    const progress = await prisma.userProgress.findUnique({ where: { userId: user.id } });

    const profile = {
      ...user,
      assessmentCount: user._count.assessments,
      recommendationCount: user._count.recommendations,
      progress,
    };

    return NextResponse.json(createSuccessResponse(profile));
  } catch (error) {
    console.error('Profile GET error:', error);
    return NextResponse.json(createErrorResponse('Server error', 'SERVER_ERROR'), { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json(createErrorResponse('Not logged in', 'UNAUTHORIZED'), { status: 401 });
    }

    const body = await request.json();
    const { name, age, grade, location, preferredLang } = body;

    const updated = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        ...(name !== undefined && { name }),
        ...(age !== undefined && { age }),
        ...(grade !== undefined && { grade }),
        ...(location !== undefined && { location }),
        ...(preferredLang !== undefined && { preferredLang }),
      },
      select: { id: true, email: true, name: true, age: true, grade: true, location: true, preferredLang: true, role: true },
    });

    return NextResponse.json(createSuccessResponse(updated, { message: 'Profile saved' }));
  } catch (error) {
    console.error('Profile PATCH error:', error);
    return NextResponse.json(createErrorResponse('Server error', 'SERVER_ERROR'), { status: 500 });
  }
}