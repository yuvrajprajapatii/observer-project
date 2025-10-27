// lib/utils/index.ts
// Observer's Toolkit - Consolidated and Type-Safe Utilities

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

// ============= UI Helpers =============
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ============= Validators =============

// Zod schema for registration input
export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().optional(),
  age: z.number().int().positive().optional(),
  grade: z.number().int().positive().optional(),
  location: z.string().optional(),
});

// Basic email format check (fallback)
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Password strength validator
export function validatePassword(password: string): { valid: boolean; message?: string } {
  if (password.length < 8) return { valid: false, message: 'At least 8 characters' };
  if (!/[A-Z]/.test(password)) return { valid: false, message: 'One uppercase letter required' };
  if (!/[a-z]/.test(password)) return { valid: false, message: 'One lowercase letter required' };
  if (!/[0-9]/.test(password)) return { valid: false, message: 'At least one number required' };
  return { valid: true };
}

export function sanitizeInput(input: string): string {
  return input.replace(/[<>]/g, '').trim();
}

// ============= Formatters =============
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-IN').format(num);
}

export function formatRelativeTime(date: Date): string {
  const now = Date.now();
  const diffInSeconds = Math.floor((now - date.getTime()) / 1000);
  const intervals: Record<string, number> = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };
  for (const [unit, seconds] of Object.entries(intervals)) {
    const value = Math.floor(diffInSeconds / seconds);
    if (value >= 1) return `${value} ${unit}${value > 1 ? 's' : ''} ago`;
  }
  return 'just now';
}

export function truncateText(text: string, maxLength: number): string {
  return text.length <= maxLength ? text : text.slice(0, maxLength).trim() + '...';
}

export function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

// ============= Data Utilities =============
export function calculateAverage(numbers: number[]): number {
  return numbers.length ? numbers.reduce((sum, n) => sum + n, 0) / numbers.length : 0;
}

export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((acc, item) => {
    const group = String(item[key]);
    (acc[group] ??= []).push(item);
    return acc;
  }, {} as Record<string, T[]>);
}

export function uniqueArray<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}

export function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// ============= JSON & Parsing =============
export function safeJsonParse<T>(json: string, fallback: T): T {
  try {
    return JSON.parse(json) as T;
  } catch {
    return fallback;
  }
}

// ============= Async Helpers =============
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries = 3,
  baseDelay = 1000
): Promise<T> {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      if (attempt === maxRetries - 1) throw err;
      await sleep(baseDelay * Math.pow(2, attempt));
    }
  }
  throw new Error('Retries exhausted');
}

// ============= Scoring =============
export function calculateMatchScore(userInterests: string[], pathSubjects: string[]): number {
  if (!userInterests.length || !pathSubjects.length) return 0;
  const matches = userInterests.filter(ui =>
    pathSubjects.some(ps => ps.toLowerCase().includes(ui.toLowerCase()))
  );
  return Math.round((matches.length / userInterests.length) * 100);
}

export function normalizeScore(value: number, min: number, max: number): number {
  return max === min ? 0 : Math.max(0, Math.min(1, (value - min) / (max - min)));
}
