// types/index.ts
// Core type definitions for Observer app
// - Pulls Prisma models
// - Wraps API responses
// - Defines quiz, roadmap, resources, AI, and progress types
// - Keeps type definitions lean and focused

import {
  User,
  AssessmentResponse,
  LearningPath,
  EducationContent,
  UserProgress,
  PlatformFeedback,
} from '@prisma/client'

// ============= API Wrappers =============
// Standardized API responses with optional error and pagination

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: {
    message: string
    code?: string
    details?: any
  }
  meta?: {
    timestamp: string
    requestId?: string
  }
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// ============= User Types =============
// Public and profile views, hiding sensitive data

export type UserPublic = Omit<User, 'passwordHash'>

export interface UserProfile extends UserPublic {
  assessmentCount: number
  recommendationCount: number
  progress?: UserProgress
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  password: string
  name?: string
  age?: number
  grade?: number
  location?: string
}

// ============= Quiz / Assessment =============
// Quiz questions, responses, and assessment results

export interface QuizQuestion {
  id: string
  question: string
  type: 'multiple_choice' | 'scale' | 'text' | 'scenario'
  options?: string[]
  subject: string
  weight: number
}

export interface QuizResponse {
  questionId: string
  answer: string | number | string[]
  timeSpent?: number
}

export interface AssessmentResult {
  interests: string[]
  scores: Record<string, number>
  topSubjects: Array<{ subject: string; score: number }>
  learningStyle: string[]
  recommendations: string[]
}

export interface AssessmentWithResults extends AssessmentResponse {
  parsedResults?: AssessmentResult
}

// ============= Career Paths & Roadmaps =============
// Extended Prisma types with match scores, milestones, and user interaction

export interface CareerPathWithDetails extends LearningPath {
  matchScore?: number
  isRecommended?: boolean
  userInteraction?: {
    viewed: boolean
    liked: boolean
    saved: boolean
  }
}

export interface RoadmapMilestone {
  year: string
  milestones: string[]
  resources?: string[]
  competitions?: string[]
}

export interface ParsedRoadmap {
  years: RoadmapMilestone[]
  totalDuration: number
}

export interface RoleModel {
  name: string
  fields: string[]
  why?: string
  achievements?: string[]
}

// ============= Resources =============
// Filters, matching, and curation data

export interface ResourceFilter {
  subjects?: string[]
  type?: string[]
  difficulty?: string[]
  language?: string
  learningStyle?: string[]
  minRating?: number
  search?: string
}

export interface ResourceWithMatch extends EducationContent {
  matchScore?: number
  relevanceReason?: string
}

export interface ResourceCuration {
  userId: string
  resourceUrl: string
  title: string
  description: string
  metadata: {
    subjects: string[]
    type: string
    difficulty: string
    provider: string
  }
  submittedAt: Date
}

// ============= AI / Recommendations =============
// Inputs for AI models and generated career paths

export interface AIPromptInput {
  interests: string[]
  scores: Record<string, number>
  age?: number
  grade?: number
  location?: string
  preferredLearningStyle?: string[]
}

export interface AIGeneratedPath {
  title: string
  description: string
  subjectSynergies: string[]
  roadmap: ParsedRoadmap
  requiredSkills: string[]
  challenges: string[]
  opportunities: string[]
  roleModels: RoleModel[]
  realWorldApps: string[]
  difficulty: string
  avgDuration: number
  confidenceScore: number
}

// Local Recommendation type since it doesn't exist in schema
export interface Recommendation {
  id: string
  userId: string
  pathId: string
  matchScore: number
  createdAt: Date
  updatedAt: Date
}

export interface RecommendationWithPath extends Recommendation {
  careerPath: LearningPath
}

// ============= Progress Tracking =============
// Dashboard metrics, phase tracking, and engagement

export interface LearningPhase {
  name: string
  description: string
  milestones: string[]
  completed: boolean
}

export interface ProgressUpdate {
  phase?: string
  subjectsExplored?: string[]
  resourcesViewed?: string[]
  milestonesHit?: number
}

export interface EngagementMetrics {
  weeklyActiveMinutes: number
  resourcesCompleted: number
  assessmentsCompleted: number
  consistencyScore: number
  lastActiveDate: Date
}

// ============= Forms & Validation =============
// Error shapes for UI and form validation

export interface ValidationError {
  field: string
  message: string
  code?: string
}

export interface FormValidationResult {
  isValid: boolean
  errors: ValidationError[]
}

// ============= Helpers =============
// Utility types for deep partials and at-least-one enforcement

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
  }[Keys]

// ============= Constants =============
// Type-safe enumerations for learning phases, difficulty, and styles

export const LEARNING_PHASES = [
  'discovery',
  'exploration',
  'commitment',
  'action',
] as const

export const DIFFICULTY_LEVELS = [
  'elementary',
  'middle',
  'high',
  'college',
  'graduate',
] as const

export const LEARNING_STYLES = [
  'visual',
  'auditory',
  'reading',
  'kinesthetic',
  'hands_on',
] as const

export type LearningPhaseType = (typeof LEARNING_PHASES)[number]
export type DifficultyLevel = (typeof DIFFICULTY_LEVELS)[number]
export type LearningStyleType = (typeof LEARNING_STYLES)[number]
