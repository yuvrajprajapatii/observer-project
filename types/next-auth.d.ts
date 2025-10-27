// types/next-auth.d.ts
// NextAuth v5 Type Extensions for Observer Project
// Purpose: Extend NextAuth types to include custom fields (id, role)
// Notes: Ensures type safety across session, JWT, and adapter user

import { DefaultSession } from 'next-auth';

// ============================================================================
// Session Type Extension
// ----------------------------------------------------------------------------
// Extends default NextAuth session to include user ID and role.
// Ensures access to role-based authorization throughout the app.
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;        // Unique user ID from database
      role: string;      // User role: STUDENT | MENTOR | ADMIN
    } & DefaultSession['user']; // Preserve default session fields
  }

  interface User {
    id: string;               // Unique user ID
    role: string;             // Role for authorization
    email: string;            // Email address
    name?: string | null;     // Optional display name
    image?: string | null;    // Optional profile image
  }
}

// ============================================================================
// JWT Type Extension
// ----------------------------------------------------------------------------
// Adds custom fields to JWT for consistent access to user info across API routes.
declare module 'next-auth/jwt' {
  interface JWT {
    id: string;         // User ID
    role: string;       // User role for authorization checks
    email?: string;     // Optional email for quick reference
  }
}

// ============================================================================
// AdapterUser Type Extension
// ----------------------------------------------------------------------------
// Critical fix for NextAuth v5: use '@auth/core/adapters' instead of 'next-auth/adapters'
// Adds 'role' field to AdapterUser to align with Prisma User model
declare module '@auth/core/adapters' {
  interface AdapterUser {
    role: string;       // Custom role field from Prisma schema
  }
}
