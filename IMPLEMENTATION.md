# divisionzero: Idea-to-Exit Platform

## Complete Implementation Guide

> Turn your raw idea into a million-dollar exit through 15 guided phases.

---

## 🎯 Platform Overview

This platform guides users step-by-step from **idea → prototype → exit** with:
- **15 Phases** covering the complete startup journey
- **Branching paths** based on budget, time, and skill level
- **3 Tracks**: Speed (7 days), Production (60 days), Enterprise (120 days)
- **AI Integration**: Antigravity as the main coding assistant

---

## 📊 Tech Stack (Gold Standard)

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Database | PostgreSQL (Supabase) |
| ORM | Prisma |
| Styling | TailwindCSS + shadcn/ui |
| State | Zustand |
| Auth | Supabase Auth |
| Validation | Zod |
| Hosting | Vercel |

---

## 🗄️ Database Schema

```prisma
model User {
  id        String    @id @default(cuid())
  email     String    @unique
  name      String?
  projects  Project[]
  createdAt DateTime  @default(now())
}

model Project {
  id             String          @id @default(cuid())
  name           String
  description    String          @db.Text
  userId         String
  user           User            @relation(fields: [userId], references: [id])
  trackType      TrackType       @default(SPEED)
  budget         BudgetTier      @default(LOW)
  currentPhase   Int             @default(1)
  currentStep    Int             @default(1)
  completedSteps CompletedStep[]
  prd            Json?
  techStack      Json?
  createdAt      DateTime        @default(now())
  updatedAt      DateTime        @updatedAt
}

model CompletedStep {
  id        String   @id @default(cuid())
  projectId String
  project   Project  @relation(fields: [projectId], references: [id])
  phaseId   Int
  stepId    Int
  verified  Boolean  @default(false)
  notes     String?  @db.Text
  createdAt DateTime @default(now())
}

enum TrackType {
  SPEED
  PRODUCTION
  ENTERPRISE
}

enum BudgetTier {
  LOW
  MEDIUM
  HIGH
}
```

---

## 📋 15-Phase Implementation Overview

| Phase | Name | Days | Key Deliverable |
|-------|------|------|-----------------|
| 1 | Ideation & Research | 1-7 | Validated idea + market analysis |
| 2 | Architecture & Documentation | 8-14 | PRD + system design |
| 3 | Instant App Building | 15-30 | Working MVP |
| 4 | UI/UX Design | 20-35 | Design system + components |
| 5 | Frontend Development | 30-60 | Complete frontend |
| 6 | Backend Development | 40-75 | API + business logic |
| 7 | Database & Storage | 40-75 | Data layer complete |
| 8 | Hosting & Deployment | 60-90 | Production deployment |
| 9 | Authentication & Security | 50-80 | Secure auth system |
| 10 | Monitoring & Observability | 70-100 | Logging + analytics |
| 11 | Testing & QA | 60-90 | Test suite |
| 12 | Payments & Monetization | 80-100 | Payment integration |
| 13 | Communication & Marketing | 90-120 | Email + marketing |
| 14 | Launch & Distribution | 100-130 | Public launch |
| 15 | Selling Your Startup | 180-365+ | Exit preparation |

---

## 🛤️ Track Comparison

| Feature | Speed Track | Production Track | Enterprise Track |
|---------|-------------|------------------|------------------|
| Timeline | 7 days | 60 days | 120 days |
| Budget | <$50/mo | $50-500/mo | $500+/mo |
| Tools | Bolt.new, v0 | Cursor, Supabase | Custom stack |
| Output | MVP demo | Production app | Scale-ready |
| Best for | Validation | Launch | Series A+ |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Landing page
│   ├── globals.css          # Global styles
│   ├── builder/
│   │   └── page.tsx         # Builder wizard start
│   ├── dashboard/
│   │   └── page.tsx         # User dashboard
│   └── project/
│       └── [id]/
│           ├── page.tsx     # Project overview
│           └── phase/
│               └── [phaseId]/
│                   └── page.tsx  # Phase detail
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── wizard/              # Wizard components
│   └── layout/              # Layout components
├── lib/
│   ├── phases/              # Phase definitions
│   ├── supabase/            # Supabase client
│   └── utils.ts             # Utilities
└── store/
    └── project.ts           # Zustand store
```

---

## 🔗 See Also

- [Detailed Phase Documentation](./docs/PHASES.md)
- [Component Guide](./docs/COMPONENTS.md)
- [API Reference](./docs/API.md)

---

## 🚀 Quick Start

1. Clone the repo
2. Set up environment variables (see `.env.example`)
3. Deploy to Vercel
4. Connect Supabase

---

**Live Site**: [divisi-0-n.vercel.app](https://divisi-0-n.vercel.app)
