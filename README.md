# divisionzero

> **Idea to Prototype Platform** - Turn your idea into a working prototype with guided automation.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL (Supabase)
- **ORM**: Prisma
- **Styling**: TailwindCSS + shadcn/ui
- **State**: Zustand
- **Validation**: Zod
- **Hosting**: Vercel

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Landing page
│   ├── globals.css     # Global styles
│   └── builder/
│       └── page.tsx    # Builder wizard
├── components/         # UI components
├── lib/               # Utilities
└── store/             # Zustand stores
```

## Deploy

Push to GitHub and connect to Vercel for automatic deployments.

---

**Version**: 2.0 (Next.js Rebuild)
