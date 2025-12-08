// Phase data structure for the wizard
export interface Step {
    id: number
    title: string
    description: string
    tools?: string[]
    resources?: { name: string; url: string }[]
}

export interface Subheading {
    id: number
    title: string
    steps: {
        implementation: Step[]
        testing: Step[]
        verification: Step[]
    }
}

export interface Phase {
    id: number
    name: string
    emoji: string
    days: string
    description: string
    subheadings: Subheading[]
}

// Phase 1: Ideation & Research
export const phase1: Phase = {
    id: 1,
    name: "Ideation & Research",
    emoji: "📋",
    days: "1-7",
    description: "Validate your idea with market research and competitor analysis",
    subheadings: [
        {
            id: 1,
            title: "Market Research",
            steps: {
                implementation: [
                    { id: 1, title: "Set up Perplexity Deep Research", description: "Create account and research workspace", tools: ["Perplexity", "Gemini Deep Research"] },
                    { id: 2, title: "Create research workspace", description: "Set up Notion or Obsidian for documentation", tools: ["Notion", "Obsidian"] },
                    { id: 3, title: "Define target market", description: "Identify demographics, psychographics, and behaviors" },
                    { id: 4, title: "Calculate market size", description: "Determine TAM, SAM, and SOM" },
                    { id: 5, title: "Research industry trends", description: "Analyze growth patterns and future projections" },
                    { id: 6, title: "Document regulations", description: "Identify legal and compliance requirements" },
                    { id: 7, title: "Analyze timing factors", description: "Assess market readiness and timing" },
                    { id: 8, title: "Map customer segments", description: "Create detailed segment profiles" },
                    { id: 9, title: "Identify geographic markets", description: "Prioritize regions for launch" },
                    { id: 10, title: "Create market summary", description: "Compile findings into executive summary" },
                ],
                testing: [
                    { id: 1, title: "Verify market size claims", description: "Cross-reference with multiple sources" },
                    { id: 2, title: "Validate growth data", description: "Compare with Google Trends" },
                    { id: 3, title: "Test demographic accuracy", description: "Survey potential customers" },
                    { id: 4, title: "Confirm research reliability", description: "Check source credibility" },
                    { id: 5, title: "Validate regulations", description: "Consult official sources" },
                    { id: 6, title: "Test timing assumptions", description: "Analyze industry reports" },
                    { id: 7, title: "Verify segments", description: "Interview target users" },
                    { id: 8, title: "Confirm geographic data", description: "Check regional statistics" },
                    { id: 9, title: "Ensure data recency", description: "Data within 6 months" },
                    { id: 10, title: "Review completeness", description: "Check all sections covered" },
                ],
                verification: [
                    { id: 1, title: "Fix broken research links", description: "Update or replace dead links" },
                    { id: 2, title: "Update outdated stats", description: "Replace old data with current" },
                    { id: 3, title: "Resolve conflicting data", description: "Investigate discrepancies" },
                    { id: 4, title: "Clarify definitions", description: "Define ambiguous terms" },
                    { id: 5, title: "Debug tool access", description: "Resolve login or access issues" },
                    { id: 6, title: "Fix citation formatting", description: "Standardize references" },
                    { id: 7, title: "Remove duplicates", description: "Consolidate repeated findings" },
                    { id: 8, title: "Correct calculations", description: "Verify all math" },
                    { id: 9, title: "Update currencies", description: "Convert to target currency" },
                    { id: 10, title: "CHECKPOINT: Market research complete", description: "Get sign-off on research" },
                ],
            },
        },
        {
            id: 2,
            title: "Competitor Analysis",
            steps: {
                implementation: [
                    { id: 1, title: "List direct competitors", description: "Top 10 companies solving same problem" },
                    { id: 2, title: "List indirect competitors", description: "Alternative solutions" },
                    { id: 3, title: "Create comparison spreadsheet", description: "Feature matrix" },
                    { id: 4, title: "Analyze pricing models", description: "Document all pricing tiers" },
                    { id: 5, title: "Document features", description: "Complete feature lists" },
                    { id: 6, title: "Review marketing strategies", description: "Analyze positioning and messaging" },
                    { id: 7, title: "Study tech stacks", description: "Use BuiltWith to analyze", tools: ["BuiltWith"] },
                    { id: 8, title: "Analyze reviews", description: "G2, Capterra ratings", tools: ["G2", "Capterra"] },
                    { id: 9, title: "Map positioning", description: "Create positioning matrix" },
                    { id: 10, title: "Identify gaps", description: "Find underserved needs" },
                ],
                testing: [
                    { id: 1, title: "Verify competitor list", description: "Check comprehensiveness" },
                    { id: 2, title: "Test websites active", description: "Confirm competitors still operating" },
                    { id: 3, title: "Validate pricing", description: "Check against actual pages" },
                    { id: 4, title: "Confirm features current", description: "Verify features exist" },
                    { id: 5, title: "Test BuiltWith results", description: "Cross-check technology" },
                    { id: 6, title: "Verify review authenticity", description: "Check for fake reviews" },
                    { id: 7, title: "Validate positioning", description: "Compare to marketing" },
                    { id: 8, title: "Test gap analysis", description: "Verify gaps are real" },
                    { id: 9, title: "Confirm funding data", description: "Check Crunchbase", tools: ["Crunchbase"] },
                    { id: 10, title: "Review analysis completeness", description: "All sections done" },
                ],
                verification: [
                    { id: 1, title: "Update changed info", description: "Refresh competitor data" },
                    { id: 2, title: "Fix broken links", description: "Update URLs" },
                    { id: 3, title: "Resolve pricing conflicts", description: "Verify current pricing" },
                    { id: 4, title: "Update new features", description: "Add recent releases" },
                    { id: 5, title: "Correct tech inaccuracies", description: "Verify stack info" },
                    { id: 6, title: "Remove fake reviews", description: "Clean review analysis" },
                    { id: 7, title: "Fix positioning errors", description: "Update matrix" },
                    { id: 8, title: "Debug spreadsheet", description: "Fix formulas" },
                    { id: 9, title: "Update funding", description: "Add new rounds" },
                    { id: 10, title: "CHECKPOINT: Competitor analysis complete", description: "Sign-off" },
                ],
            },
        },
        // Additional subheadings would follow the same pattern...
    ],
}

// All phases array (abbreviated for now, full data would follow same pattern)
export const phases: Phase[] = [
    phase1,
    // Phases 2-15 would be added here with same structure
]

// Helper functions
export function getPhase(phaseId: number): Phase | undefined {
    return phases.find(p => p.id === phaseId)
}

export function getSubheading(phaseId: number, subheadingId: number): Subheading | undefined {
    const phase = getPhase(phaseId)
    return phase?.subheadings.find(s => s.id === subheadingId)
}

export function getTotalSteps(phase: Phase): number {
    return phase.subheadings.reduce((total, sub) => {
        return total +
            sub.steps.implementation.length +
            sub.steps.testing.length +
            sub.steps.verification.length
    }, 0)
}

export function getPhaseProgress(completedSteps: number, totalSteps: number): number {
    return Math.round((completedSteps / totalSteps) * 100)
}
