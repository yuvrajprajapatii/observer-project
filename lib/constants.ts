// lib/constants.ts - Observer's config dial
// Centralizes numbers/strings—easy tweaks, no scatter.

export const APP_NAME = 'Observer - AI Career Pathfinder'
export const APP_DESCRIPTION =
  'Guiding students to dream careers, one synergy at a time'

// API
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api'
export const API_TIMEOUT = 30000 // 30s grace

// Paging
export const DEFAULT_PAGE_SIZE = 10
export const MAX_PAGE_SIZE = 100

// Quiz
export const MIN_ASSESSMENT_QUESTIONS = 15
export const MAX_ASSESSMENT_QUESTIONS = 30
export const ASSESSMENT_TIME_LIMIT = 1800 // 30 min

// Subjects
export const SUBJECT_CATEGORIES = {
  STEM: [
    'Physics',
    'Mathematics',
    'Computer Science',
    'Engineering',
    'Biology',
    'Chemistry',
  ],
  BUSINESS: [
    'Business',
    'Entrepreneurship',
    'Economics',
    'Finance',
    'Marketing',
  ],
  ARTS: ['Art', 'Design', 'Music', 'Literature', 'Theater', 'Film'],
  HUMANITIES: ['Philosophy', 'History', 'Psychology', 'Sociology', 'Language'],
  OTHER: ['Sports', 'Agriculture', 'Medicine', 'Law', 'Education'],
} as const

// Difficulty
export const DIFFICULTY_MAP = {
  elementary: { min: 1, max: 5, label: 'Elementary School' },
  middle: { min: 6, max: 8, label: 'Middle School' },
  high: { min: 9, max: 12, label: 'High School' },
  college: { min: 13, max: 16, label: 'Undergraduate' },
  graduate: { min: 17, max: 20, label: 'Graduate & Beyond' },
} as const

// Styles
export const LEARNING_STYLE_INFO = {
  visual: { name: 'Visual', description: 'Images/videos shine', icon: '👁️' },
  auditory: {
    name: 'Auditory',
    description: 'Talks/podcasts click',
    icon: '👂',
  },
  reading: {
    name: 'Reading/Writing',
    description: 'Text/notes flow',
    icon: '📚',
  },
  kinesthetic: {
    name: 'Kinesthetic',
    description: 'Hands-on experiments',
    icon: '🤲',
  },
  hands_on: {
    name: 'Hands-On',
    description: 'Build/code projects',
    icon: '🛠️',
  },
} as const

// UI
export const DIFFICULTY_COLORS = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-yellow-100 text-yellow-800',
  advanced: 'bg-red-100 text-red-800',
} as const

// Toasts (ms)
export const TOAST_DURATION = {
  success: 3000,
  error: 5000,
  info: 4000,
  warning: 4000,
} as const

// Storage
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'observer_auth_token',
  USER_PROFILE: 'observer_user_profile',
  ASSESSMENT_DRAFT: 'observer_assessment_draft',
  THEME: 'observer_theme',
} as const

// Limits
export const RATE_LIMITS = {
  LOGIN_ATTEMPTS: { max: 5, windowMs: 15 * 60 * 1000 },
  API_REQUESTS: { max: 100, windowMs: 60 * 1000 },
  AI_GENERATION: { max: 10, windowMs: 60 * 60 * 1000 },
} as const
