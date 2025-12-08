'use client'

import { useState } from 'react'
import Link from 'next/link'

// Phase data (simplified for now)
const phases = [
    { id: 1, name: 'Ideation & Research', emoji: '📋', days: '1-7', steps: 300 },
    { id: 2, name: 'Architecture & Docs', emoji: '📐', days: '8-14', steps: 300 },
    { id: 3, name: 'Instant App Building', emoji: '🚀', days: '15-30', steps: 300 },
    { id: 4, name: 'UI/UX Design', emoji: '🎨', days: '20-35', steps: 300 },
    { id: 5, name: 'Frontend Development', emoji: '💻', days: '30-60', steps: 300 },
    { id: 6, name: 'Backend Development', emoji: '🔧', days: '40-75', steps: 300 },
    { id: 7, name: 'Database & Storage', emoji: '🗄️', days: '40-75', steps: 300 },
    { id: 8, name: 'Hosting & Deployment', emoji: '☁️', days: '60-90', steps: 300 },
    { id: 9, name: 'Auth & Security', emoji: '🔐', days: '50-80', steps: 300 },
    { id: 10, name: 'Monitoring', emoji: '📊', days: '70-100', steps: 300 },
    { id: 11, name: 'Testing & QA', emoji: '🧪', days: '60-90', steps: 300 },
    { id: 12, name: 'Payments', emoji: '💳', days: '80-100', steps: 300 },
    { id: 13, name: 'Marketing', emoji: '📧', days: '90-120', steps: 300 },
    { id: 14, name: 'Launch', emoji: '🚀', days: '100-130', steps: 300 },
    { id: 15, name: 'Exit', emoji: '💰', days: '180-365', steps: 300 },
]

// Mock project data
const mockProject = {
    id: '1',
    name: 'TaskFlow Pro',
    description: 'AI-powered task management app',
    currentPhase: 1,
    trackType: 'SPEED',
    completedSteps: 45,
    totalSteps: 4500,
}

export default function ProjectPage({ params }: { params: { id: string } }) {
    const [selectedPhase, setSelectedPhase] = useState(mockProject.currentPhase)
    const project = mockProject

    const progress = Math.round((project.completedSteps / project.totalSteps) * 100)

    return (
        <main className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                    <div>
                        <Link href="/dashboard" className="text-white/60 hover:text-white text-sm mb-2 inline-block">
                            ← Back to Dashboard
                        </Link>
                        <h1 className="text-4xl font-bold font-heading mb-2">{project.name}</h1>
                        <p className="text-white/50">{project.description}</p>
                    </div>
                    <div className="text-right">
                        <span className="tag mb-2 inline-block">{project.trackType} Track</span>
                        <div className="text-white/40 text-sm">Phase {project.currentPhase} of 15</div>
                    </div>
                </div>

                {/* Overall Progress */}
                <div className="glass p-6 mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold">Overall Progress</h3>
                        <span className="text-primary font-bold">{progress}%</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden mb-2">
                        <div
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="flex justify-between text-sm text-white/40">
                        <span>{project.completedSteps} steps completed</span>
                        <span>{project.totalSteps} total steps</span>
                    </div>
                </div>

                {/* Phases Grid */}
                <div className="grid grid-cols-5 gap-4 mb-8">
                    {phases.map((phase) => {
                        const isActive = phase.id === project.currentPhase
                        const isCompleted = phase.id < project.currentPhase
                        const isLocked = phase.id > project.currentPhase

                        return (
                            <button
                                key={phase.id}
                                onClick={() => !isLocked && setSelectedPhase(phase.id)}
                                disabled={isLocked}
                                className={`relative p-4 rounded-xl text-center transition-all ${selectedPhase === phase.id
                                        ? 'bg-primary/20 border-2 border-primary'
                                        : isLocked
                                            ? 'bg-white/5 border border-white/5 opacity-50 cursor-not-allowed'
                                            : 'bg-white/5 border border-white/10 hover:border-white/30'
                                    }`}
                            >
                                <div className="text-2xl mb-1">{phase.emoji}</div>
                                <div className="text-xs font-semibold mb-1 truncate">{phase.name}</div>
                                <div className="text-[10px] text-white/40">Days {phase.days}</div>

                                {isCompleted && (
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs">
                                        ✓
                                    </div>
                                )}
                                {isActive && (
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                    </div>
                                )}
                            </button>
                        )
                    })}
                </div>

                {/* Selected Phase Details */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Phase Info */}
                    <div className="lg:col-span-2">
                        <div className="glass p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="text-5xl">{phases[selectedPhase - 1].emoji}</div>
                                <div>
                                    <h2 className="text-2xl font-bold font-heading">
                                        Phase {selectedPhase}: {phases[selectedPhase - 1].name}
                                    </h2>
                                    <p className="text-white/50">Days {phases[selectedPhase - 1].days}</p>
                                </div>
                            </div>

                            {/* Subheadings Preview */}
                            <h3 className="font-semibold mb-4">10 Subheadings</h3>
                            <div className="space-y-3">
                                {Array.from({ length: 10 }, (_, i) => (
                                    <Link
                                        key={i}
                                        href={`/project/${project.id}/phase/${selectedPhase}/step/${i + 1}`}
                                        className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">
                                                {i + 1}
                                            </div>
                                            <span>Subheading {i + 1}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-white/40 text-sm">30 steps</span>
                                            <span className="text-white/40 group-hover:text-white transition-colors">→</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-6">
                        <div className="glass p-6">
                            <h3 className="font-semibold mb-4">Quick Actions</h3>
                            <div className="space-y-3">
                                <Link
                                    href={`/project/${project.id}/phase/${project.currentPhase}`}
                                    className="btn-primary w-full justify-center"
                                >
                                    Continue Phase {project.currentPhase}
                                </Link>
                                <button className="btn-secondary w-full">
                                    Generate PRD with AI
                                </button>
                                <button className="btn-secondary w-full">
                                    View Documentation
                                </button>
                            </div>
                        </div>

                        <div className="glass p-6">
                            <h3 className="font-semibold mb-4">Recommended Tools</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                                        🤖
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm">Antigravity</div>
                                        <div className="text-white/50 text-xs">AI Coding Assistant</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                        ⚡
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm">Bolt.new</div>
                                        <div className="text-white/50 text-xs">Instant App Builder</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                                        🔷
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm">Supabase</div>
                                        <div className="text-white/50 text-xs">Database & Auth</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
